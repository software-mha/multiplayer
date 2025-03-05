import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'MultiClient',
            fileName: (format) => `multi-client.${format}.js`,
            formats: ['cjs','es', 'umd']
        },
        rollupOptions: {
            output: {
                exports: 'named', // Ensure only named exports are available
                globals: {
                    Colyseus: '_' // Prevents lodash from being globally accessible
                }
            }
        }
    }
});