
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5OOWJ5DC.js"
    ],
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/notes"
  },
  {
    "renderMode": 2,
    "route": "/login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5885, hash: 'ce44a2930f9cd170d1bba8180b567cd402bc386c022042ff571a26bd53de8229', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1060, hash: '44acffc4a0997373af53eca63d633dc4ea099c4022c9a0f888075bbf36e4ef82', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9835, hash: '14a7713316ec6360270b45dfe8b635f7cf9e0714da2c2bf694ba109e92335e09', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 9888, hash: 'e6a766505b14cea52e7446c93047d659e1548f0260a527689ccec7f7bc3c0a77', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 9835, hash: '14a7713316ec6360270b45dfe8b635f7cf9e0714da2c2bf694ba109e92335e09', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 9835, hash: '14a7713316ec6360270b45dfe8b635f7cf9e0714da2c2bf694ba109e92335e09', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-EU6LJK7Q.css': {size: 13665, hash: 'WordaXAFSv0', text: () => import('./assets-chunks/styles-EU6LJK7Q_css.mjs').then(m => m.default)}
  },
};
