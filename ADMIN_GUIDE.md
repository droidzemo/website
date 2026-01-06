# Admin Guide for Nigamelastic Website

This guide explains how to manage content on the Nigamelastic website. The site is built with Astro Starlight and uses Markdown for content.

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
1. Commit your changes to the GitHub repository.
2. The site will be automatically updated (assuming a CI/CD pipeline is set up, e.g., GitHub Actions).
