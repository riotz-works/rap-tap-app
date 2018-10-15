const pkg = require('./package.json');

module.exports = {
  mode: 'spa',
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? `/${pkg.name}/` : '/'
  },
  build: {
    publicPath: '/static/'
  },
  head: {
    titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | ${require('~/package.json').displayName}` : pkg.displayName
  },
  loading: {
    color: '#000'
  }
};
