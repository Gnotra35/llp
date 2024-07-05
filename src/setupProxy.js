const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/sci', createProxyMiddleware({
    target: 'http://localhost',  
    changeOrigin: true,
    pathRewrite: {
      '^/sci': '/sci'  
    }
  }));
};
