import { rmSync } from 'fs';
import { buildSync } from 'esbuild';

rmSync('lib', {
  force: true,
  recursive: true,
});

const baseOpt = {
  entryPoints: ['src/main.js'],
  bundle: true,
  charset: 'utf8',
  target: ['es2020', 'node14'],
  pure: ['console.log', 'debug', 'alert'],
  external: ['axios'],
  legalComments: 'none',
  minify: false,
  sourcemap: false,
  write: true,
};

const esmVersion = {
  ...baseOpt,
  platform: 'browser',
  format: 'esm',
  outfile: 'lib/main.js',
};

buildSync(esmVersion);
