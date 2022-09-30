AMP_SW.init({
  assetCachingOptions: [{
    regexp: /\.(png|jpg|woff2|woff|css|js)/,
    cachingStrategy: 'CACHE_FIRST',
  }],
  offlinePageOptions: {
    url: '/offline.html',
    assets: [],
  },
});
