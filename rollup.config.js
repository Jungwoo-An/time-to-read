import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'lib/time-to-read.js',
  output: {
    file: 'dist/time-to-read.js',
    format: 'umd',
  },
  plugins: [
    uglify({
      sourcemap: true,
    }),
  ],
};
