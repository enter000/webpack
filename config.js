module.exports = {
  PROJECT: 'webpack',

  MODE: 'development',

  DEV_DIR: 'src',
  BUILD_DIR: 'dist',

  SCRIPTS_DIR: 'js-dev',

  WATCH: true,
  WATCH_OPTIONS: {
    ignored: [
      'node_modules',
    ],
  }
}
