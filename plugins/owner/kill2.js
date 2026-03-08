import { normalizeJid } from '../../lib/helper.js';

export default {
  name: 'kill2',
  aliases: ['removeall2', 'kickall2'],
  description: 'Remove all members from any group using invite link',
  usage: '!kill2 <group_link>',
  category: 'owner',
  owner: true,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,

  async execute(sock, m, args) {
    try {
      if (!args[0]) {
        return m.reply('❌ Please provide a group link!\n\nExample: !kill2 https://chat.whatsapp.com/xxxxx');
      }

      await m.react('⏳');

      const linkRegex = /chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/i;
      const match = args[0].match(linkRegex);

      if (!match) {
        return m.reply('❌ Invalid group link format!\n\nExample: https://chat.whatsapp.com/xxxxx');
      }

      const inviteCode = match[1];

      let groupInfo;
      try {
        groupInfo = await sock.groupGetInviteInfo(inviteCode);
      } catch (err) {
        return m.reply('❌ Failed to get group info! The link might be invalid or revoked.');
      }

      const groupJid = groupInfo.id;
      const groupName = groupInfo.subject;

      let groupMetadata;
      try {
        groupMetadata = await sock.groupMetadata(groupJid);
      } catch (err) {
        return m.reply('❌ Bot is not in this group! Please add the bot first.');
      }

      const botJid = normalizeJid(sock.user.id);
      const botParticipant = groupMetadata.participants.find(p =>
        normalizeJid(p.phoneNumber) === botJid
      );

      if (!botParticipant) {
        return m.reply('❌ Bot is not in this group!');
      }

      if (botParticipant.admin !== 'admin' && botParticipant.admin !== 'superadmin') {
        return m.reply('❌ Bot is not an admin in this group!');
      }

      const membersToRemove = groupMetadata.participants
        .map(p => normalizeJid(p.phoneNumber))
        .filter(jid => jid !== botJid);

      if (membersToRemove.length === 0) {
        return m.reply('❌ No members to remove!');
      }

      await m.reply(`⚠️ Terminating ${groupName} - ${membersToRemove.length} members will be removed in 5 seconds!`);
      await m.react('⚠️');
      await new Promise(resolve => setTimeout(resolve, 5000));

      try {
        await sock.removeProfilePicture(groupJid);
      } catch (err) {
        console.error('[KILL2] Error removing group icon:', err);
      }

      try {
        await sock.groupSettingUpdate(groupJid, 'announcement');
      } catch (err) {
        console.error('[KILL2] Error closing group:', err);
      }

      try {
        await sock.groupUpdateDescription(groupJid, 'TERMINATED [ 💀 ]');
      } catch (err) {
        console.error('[KILL2] Error updating description:', err);
      }

      try {
        await sock.groupUpdateSubject(groupJid, 'TERMINATED [ DREADED ]');
      } catch (err) {
        console.error('[KILL2] Error updating name:', err);
      }

      await new Promise(resolve => setTimeout(resolve, 1000));

      try {
        await sock.sendMessage(groupJid, {
          text: `🔴 Group marked for deletion - All members will be purged now!`,
          mentions: membersToRemove
        });
      } catch (err) {
        console.error('[KILL2] Error sending warning:', err);
      }

      await new Promise(resolve => setTimeout(resolve, 2000));

      const result = await sock.groupParticipantsUpdate(groupJid, membersToRemove, 'remove');

      const successCount = result.filter(r => r.status === '200' || r.status === 200).length;
      const failedCount = membersToRemove.length - successCount;

      let response = `✅ *GROUP TERMINATED*\n📊 ${groupName}\n✅ Removed: ${successCount}`;
      if (failedCount > 0) response += `\n❌ Failed: ${failedCount}`;
      response += `\n💀 Total: ${membersToRemove.length} members`;

      await m.reply(response);
      await m.react('💀');

    } catch (err) {
      console.error('🔥 Error executing kill2 command:', err);
      await m.react('❌');
      throw new Error('Failed to execute kill2 command!');
    }
  }
};
