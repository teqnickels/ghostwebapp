const args = ['start'];
const opts = {
  stdio: 'inherit',
  cwd: '../ghost_client',
  shell: true
};
require('child_process').spawn('npm', args, opts);