
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/LarisTrabalhoAtividadeExtensionista/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/LarisTrabalhoAtividadeExtensionista"
  }
],
  assets: {
    'index.csr.html': {size: 686, hash: 'd3def484affe32dab01c64c94eedd1250e26ecdf4625797d78e155e42faeed44', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1200, hash: '3f88c62860ea04c26706fddf804c33222112bd846d63602663a1f55fe8d3824d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 846, hash: '2343e3b3e933b8cc43576c20b77ba3bc8035b2f7ec2eb2cd186973dbe005df34', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
