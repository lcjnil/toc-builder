module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    production: {
      servers: process.env.SERVER
    }
  });

  const localBuildPath = 'build/';
  const deployPath = process.env.DEPLOY_PATH || '/home/ubuntu/toc-builder';

  shipit.task('deploy', () => {
    shipit.local('npm run build')
      .then(() => {
        shipit.remoteCopy(
          `./${localBuildPath}`,
          deployPath,
          {rsync: '--rsync-path="sudo rsync"'}
        )
      })
      .then(() => {
        shipit.log('DEPLOY SUCCESS')
      })
  })
};