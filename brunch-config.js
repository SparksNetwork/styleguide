module.exports = {
  paths: {
    public: 'docs',
    watched: ['src']
  },
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {joinTo: 'app.css'},
  },
  conventions: {
    assets: /src\/assets/
  },
  plugins: {
    postcss: {processors: [require('autoprefixer')]},
    static: {
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: {
              fileMatch: /\.html$/
            }
          }
        })
      ]
    },
    browserSync: {
      port: 3333,
      logLevel: "debug"
    }
  }
};