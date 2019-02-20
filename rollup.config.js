import { uglify } from 'rollup-plugin-uglify';

const isMinify = typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV === 'minify';
const plugins =
  (isMinify && [
    uglify({
      sourcemap: true,
    }),
  ]) ||
  [];

const file = (isMinify && 'dist/time-to-read.min.js') || 'dist/time-to-read.js';

export default {
  input: 'lib/time-to-read.js',
  output: {
    file,
    name: 'timeToRead',
    format: 'umd',
  },
  plugins: [...plugins],
};
