module.exports = {
  paths: {
    public: 'dist',
    watched: ['src']
  },
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {joinTo: 'app.css'},


  },
  plugins: {
    postcss: {processors: [require('autoprefixer')]},
    sass: {},
    static: {
      processors: [
        require('html-brunch-static')({


        })
      ]
    },
    browserSync: {
      port: 3333,
      logLevel: "debug"
    }
  }
};