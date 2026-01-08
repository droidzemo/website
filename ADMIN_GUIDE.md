# Admin Guide

## Overview
This website is built with [Astro Starlight](https://starlight.astro.build/), a documentation framework that makes it easy to manage content using Markdown files. As an admin, your primary responsibility is adding and updating these markdown files.

## Content Management

### Directory Structure
All content is located in `src/content/docs/`. The folder structure directly maps to the URL structure of the website.

- **`src/content/docs/`**
    - `index.mdx` (Home Page)
    - `about.mdx` (About Page)
    - `news.mdx` (News Page)
    - **`youtube/`** (YouTube Section)
        - `index.mdx` (Main list)
        - `video-title.mdx` (Individual video pages)
    - **`knowledge-base/`** (Knowledge Base Section)
        - `ai-hacking/`
        - `mobile-hacking/`
        - `webapp-hacking/`
    - **`writeups/`** (Writeups Section)
        - `ctfs/`
        - `hackthebox/`

### Adding New Content
To add a new page (e.g., a new YouTube video or a Writeup), follow these steps:

1.  **Navigate** to the appropriate folder in `src/content/docs/`.
2.  **Create** a new file with the extension `.mdx` (e.g., `new-video.mdx`).
    - *Tip: Use lowercase letters and hyphens for filenames (e.g., `my-new-post.mdx`).*
3.  **Add Frontmatter**: Every file must start with "frontmatter" enclosed in `---`.
    ```yaml
    ---
    title: My New Page Title
    description: A short description of the content.
    ---
    ```
4.  **Write Content**: Add your content below the second `---` using Markdown.

#### Template: YouTube Video
File path: `src/content/docs/youtube/my-video.mdx`
```mdx
---
title: How to Hack WiFi
description: A tutorial on wireless security.
---

## Video
[Link to Video](https://youtube.com/...)

## Description
Here is a detailed description of what is covered in the video.

## Resources
*   [Tool 1](https://github.com/...)
*   [Paper](https://example.com/...)
```

#### Template: Writeup
File path: `src/content/docs/writeups/hackthebox/machine-name.mdx`
```mdx
---
title: Machine Name
description: Walkthrough for Machine Name on HackTheBox.
---

## Introduction
Brief overview of the machine difficulty and OS.

## Enumeration
Details on nmap scans, web enumeration, etc.

## Exploitation
How you got the user flag.

## Privilege Escalation
How you got the root flag.
```

### Managing Images
1.  Save your images in the `src/assets/` folder. You can create subfolders here (e.g., `src/assets/writeups/`).
2.  In your MDX file, import and use the image:

```mdx
---
title: My Post with Image
---
import { Image } from 'astro:assets';
import myImage from '../../../assets/writeups/screenshot.png';

## Screenshot
<Image src={myImage} alt="Description of the screenshot" />
```

### Updating the News Page
Open `src/content/docs/news.mdx` and add a new entry to the top of the list:

```markdown
### [Date: YYYY-MM-DD]
*   **Topic:** [Title](link) - Brief description.
```

## Deployment
The website is configured to deploy automatically (depending on your setup, usually via GitHub Actions).
- **Local Preview:** If you have access to a terminal, you can run `npm run dev` to preview changes locally.
- **Production Build:** `npm run build` generates the static site in the `dist/` folder.
