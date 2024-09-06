const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy configuration
app.use(
  '/api', 
  createProxyMiddleware({
    target: 'https://api.booking.oslo.kommune.no', // Target API URL
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // Remove '/api' from the proxied request
    },
  })
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Reverse proxy server running on port ${PORT}`);
});