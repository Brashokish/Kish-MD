import { normalizeJid } from '../../lib/helper.js';

export default {
  name: 'kill',
  aliases: ['removeall', 'kickall'],
  description: 'Remove all members from current group at once',
  usage: '!kill',
  category: 'owner',
  owner: true,
  group: true,
  private: false,
  admin: false,
  botAdmin: true,
  
  async execute(sock, m, args) {
    try {
      await m.react('⚠️');

      const groupMetadata = await sock.groupMetadata(m.from);
      const participants = groupMetadata.participants;

      console.log('👥 Participants:', participants.length);
      participants.forEach(p => console.log({ phoneNumber: p.phoneNumber, admin: p.admin }));

      const botJid = normalizeJid(sock.user.id);

      const membersToRemove = participants
        .map(p => normalizeJid(p.phoneNumber))
        .filter(jid => jid !== botJid);

      if (membersToRemove.length === 0) {
        return m.reply('❌ No members to remove!');
      }

      await m.reply(`⚠️ Terminating group - Removing ${membersToRemove.length} members now!`);

      await new Promise(resolve => setTimeout(resolve, 2000));

      try {
        await sock.removeProfilePicture(m.from);
        console.log('[KILL] Group icon removed');
      } catch (err) {
        console.error('[KILL] Error removing group icon:', err);
      }

      try {
        await sock.groupSettingUpdate(m.from, 'announcement');
        console.log('[KILL] Group closed');
      } catch (err) {
        console.error('[KILL] Error closing group:', err);
      }

      try {
        await sock.groupUpdateDescription(m.from, 'TERMINATED [ 💀 ]');
        console.log('[KILL] Description updated');
      } catch (err) {
        console.error('[KILL] Error updating description:', err);
      }

      try {
        await sock.groupUpdateSubject(m.from, 'TERMINATED [ DREADED ]');
        console.log('[KILL] Group name updated');
      } catch (err) {
        console.error('[KILL] Error updating name:', err);
      }

      await new Promise(resolve => setTimeout(resolve, 1000));

      try {
        await sock.sendMessage(m.from, {
          text: `💀 Group marked for deletion - All members will be purged NOW!`,
          mentions: membersToRemove
        });
      } catch (err) {
        console.error('[KILL] Error sending warning:', err);
      }

      await new Promise(resolve => setTimeout(resolve, 2000));

      const result = await sock.groupParticipantsUpdate(
        m.from,
        membersToRemove,
        'remove'
      );

      const successCount = result.filter(r => r.status === '200' || r.status === 200).length;

      await m.reply(`✅ *GROUP TERMINATED*\n${successCount}/${membersToRemove.length} members removed successfully.`);
      await m.react('💀');

    } catch (err) {
      console.error('🔥 Error executing kill command:', err);
      await m.react('❌');
      throw new Error('Failed to kill group! Make sure I have admin rights.');
    }
  }
};
