'use strict';

const childProcess = require('node:child_process');
const originalSpawn = childProcess.spawn;

function browserArgumentsForPlatform(args, platform = process.platform) {
  if (platform !== 'win32') return [...args];
  return args
    .filter(argument => ![
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--single-process',
      '--no-zygote'
    ].includes(argument))
    .map(argument => argument === '--headless' ? '--headless=new' : argument);
}

childProcess.spawn = function spawnWithPlatformBrowserArguments(command, args = [], options = {}) {
  return originalSpawn.call(childProcess, command, browserArgumentsForPlatform(args), options);
};

require('./browser-smoke');
