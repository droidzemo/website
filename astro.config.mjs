// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://droidzemo.github.io',
    base: process.env.BASE_PATH || '/website',
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
                    label: 'YouTube',
                    autogenerate: { directory: 'youtube' },
                    collapsed: true,
                },
                {
                    label: 'Knowledge Base',
                    autogenerate: { directory: 'knowledge-base' },
                    collapsed: true,
                },
                {
                    label: 'CTF',
                    autogenerate: { directory: 'ctf' },
                    collapsed: true,
                },
                {
                    label: 'Writeups',
                    autogenerate: { directory: 'writeups' },
                    collapsed: true,
                },
                {
                    label: 'About',
                    slug: 'about',
                },
                {
                    label: 'News',
                    slug: 'news',
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