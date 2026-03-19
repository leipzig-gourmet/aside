import cleanup from 'rollup-plugin-cleanup';
import prettier from 'rollup-plugin-prettier';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    typescript(),
    cleanup({ comments: 'none', extensions: ['.ts', '.js'] }),
    prettier({ parser: 'typescript' }),
  ],
  context: 'this',
};
