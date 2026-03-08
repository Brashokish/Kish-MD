import { createEvalContext } from '../../lib/evalHelpers.js';
import util from 'util';
import config from '../../config.js';

const isOwner = (m) => {

const sender =
m.key?.participantAlt ||
m.key?.remoteJidAlt ||
m.key?.participant ||
m.key?.remoteJid;

if (!sender) return false;

const number = sender.split('@')[0];

return config.owners.includes(number);
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

```
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

    if (
      typeof value === 'function' &&
      value.constructor.name === 'AsyncFunction' &&
      value.length === 0
    ) {

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
      sockVar, mVar, getMetadata, refreshMetadata,
      participants, admins, members,
      isAdmin, isBotAdmin, count, subject, desc,
      groupInfo, cache,
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

  if (typeof result === 'undefined') {
    output = 'undefined';
  } else if (typeof result === 'object') {
    output = util.inspect(result, { depth: 2, colors: false });
  } else {
    output = String(result);
  }

  await m.reply(`\`\`\`${output}\`\`\``);

  await m.react('✅');

} catch (err) {

  console.error('Eval error:', err);

  await m.react('❌');

  await m.reply(`❌ *Error:*\n\`\`\`${err.message}\`\`\``);

}
```

}
};
