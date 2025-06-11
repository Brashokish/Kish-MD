const { spawn } = require('child_process');
const path = require('path');

function start() {
   let args = [path.join(__dirname, 'plugins.js'), ...process.argv.slice(2)];
   console.log([process.argv[0], ...args].join('\n'));
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot..');
            p.kill(); // Kill the process
            start();   // Restart
            p = null;  // Clear the reference instead of `delete`
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code);
         if (code == '.' || code == 1 || code == 0) start();
      });
}
start();