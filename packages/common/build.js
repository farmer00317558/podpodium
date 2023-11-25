const { NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill');

(async () => {
  await require('esbuild').build({
    entryPoints: ['./index.ts'],
    plugins: [NodeModulesPolyfillPlugin()],
    bundle: true,
    platform: 'node',
    outdir: 'lib',
    external: ['react'],
    mainFields: ['module', 'main'],
  });
})();
