import {join} from 'path'

const context = join(__dirname, 'src')

export default {
  context,
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'gitHubNames',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], include: context},
      {test: /\.json$/, loaders: ['json'], include: context},
    ],
  },
}
