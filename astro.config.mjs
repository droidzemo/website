// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://droidzemo.github.io',
    base: '/website',
    integrations: [
        starlight({
            title: 'Nigamelastic',
            logo: {
                src: './src/assets/logo.jpg',
            },
            social: [
                { label: 'GitHub', icon: 'github', href: 'https://github.com/droidzemo/website' },
            ],
            sidebar: [
                {
                    label: 'Knowledge Base',
                    autogenerate: { directory: 'knowledge-base' },
                },
                {
                    label: 'Resources',
                    autogenerate: { directory: 'resources' },
                },
            ],
            customCss: [
                // Path to your custom CSS file
                './src/styles/custom.css',
            ],
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});