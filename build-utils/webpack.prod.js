const Dotenv = require('dotenv-webpack');
module.exports = {
  mode: 'production',
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv({
      path: './.env.production',
    })
  ],
};