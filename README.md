# The Private Office — GitHub Pages edition

This package is a static, GitHub Pages-ready edition of The Private Office website. It contains the complete public website, responsive styling, official logo, approved leadership portrait, photography and an automatic GitHub Pages deployment workflow.

## Publish the website

1. Create a new empty repository on GitHub. Do not add a README, licence or `.gitignore` during creation.
2. Upload everything inside this package to the root of the repository. Keep the `.github`, `site` and `README.md` structure unchanged.
3. Commit the files to the `main` branch.
4. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the source if it is not already selected.
5. Open the **Actions** tab and wait for **Deploy Private Office website to GitHub Pages** to finish.
6. GitHub will show the live Pages address in the deployment summary.

Every later update pushed to `main` will publish automatically.

## Enquiry form note

GitHub Pages only hosts static files and cannot securely process the existing server-side enquiry form. The form is displayed with a clear pending notice and its submit button is disabled. Connect an approved form service or official enquiry address before enabling submissions.

## Package structure

- `.github/workflows/deploy-pages.yml` — automatic GitHub Pages deployment.
- `site/` — finished static website published by the workflow.
- `README.md` — these instructions.

GitHub Pages workflow guidance: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
