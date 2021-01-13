const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({ target: 'http://localhost:4040' });

module.exports = {
  plugins: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    port: 3030,
  },
  buildOptions: {
    /* ... */
  },
  mount: {
    /* ... */
  },
  alias: {
    '@q': './src/packages',
  },
  experiments: {
    routes: [
      {
        src: '/api/.*',
        dest: (req, res) => proxy.web(req, res),
      },
    ],
  },
};
