import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'lib/time-to-read.js',
  output: {
    file: 'dist/time-to-read.js',
    name: 'time-to-read',
    format: 'umd',
  },
  plugins: [
    uglify({
      sourcemap: true,
    }),
  ],
};
