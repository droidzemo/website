# Admin Guide for Nigamelastic

This guide explains how to manage content on the Nigamelastic. The site is built with Astro Starlight and uses Markdown for content.

## Adding Content

### Knowledge Base Article
1. Navigate to `src/content/docs/knowledge-base/`.
2. Create a new file with `.md` extension, e.g., `new-topic.md`.
3. Add the following frontmatter at the top of the file:
   ```markdown
   ---
   title: Your Article Title
   description: A brief summary of the article.
   sidebar:
     order: 2 # Optional: Control the order in the sidebar
   ---
   ```
4. Write your content using standard Markdown.

### Resources
1. Navigate to `src/content/docs/resources/`.
2. Create or edit an existing `.md` file.
3. Use the same frontmatter format as above.

## Managing Files
To add images or files:
1. Upload the file to `src/assets/`.
2. Reference it in your Markdown:
   ```markdown
   ![Image Description](../../assets/image-name.jpg)
   ```

## Deploying Changes
This site is configured for **Automatic Deployment** via GitHub Actions.
1. Commit your changes to the GitHub repository.
2. Push your changes to the `main` branch.
3. GitHub Actions will automatically build and deploy the site to GitHub Pages.

> [!NOTE]
> Ensure that GitHub Pages is set to deploy from "GitHub Actions" in your repository settings (**Settings > Pages > Build and deployment > Source**).

