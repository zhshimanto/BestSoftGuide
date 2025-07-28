// Hostinger deployment configuration
module.exports = {
  // Build settings for Hostinger
  build: {
    outDir: '.output/public',
    assetsDir: 'assets'
  },
  
  // Server settings
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000
  },
  
  // Static file serving
  static: {
    maxAge: 31536000 // 1 year cache for static assets
  }
}
