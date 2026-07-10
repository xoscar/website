import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the main heading with name', async ({ page }) => {
    await page.goto('/');
    
    const nameHeading = page.locator('h1');
    await expect(nameHeading).toContainText('Oscar R. Reyes');
  });

  test('should display the job title', async ({ page }) => {
    await page.goto('/');
    
    const jobTitle = page.locator('h2');
    await expect(jobTitle).toContainText('Fullstack Lead Software Engineer');
  });

  test('should display the tech stack', async ({ page }) => {
    await page.goto('/');
    
    const techStack = page.locator('h3');
    await expect(techStack).toContainText('AWS');
    await expect(techStack).toContainText('React');
    await expect(techStack).toContainText('Node.js');
    await expect(techStack).toContainText('Docker');
    await expect(techStack).toContainText('OpenTelemetry');
  });

  test('should have all footer links', async ({ page }) => {
    await page.goto('/');
    
    const linkedInLink = page.getByRole('link', { name: 'LinkedIn' });
    const resumeLink = page.getByRole('link', { name: 'Resume' });
    const githubLink = page.getByRole('link', { name: 'Github' });
    const mediumLink = page.getByRole('link', { name: 'Medium' });
    const experimentsLink = page.getByRole('link', { name: 'Experiments' });

    await expect(linkedInLink).toBeVisible();
    await expect(resumeLink).toBeVisible();
    await expect(githubLink).toBeVisible();
    await expect(mediumLink).toBeVisible();
    await expect(experimentsLink).toBeVisible();
  });

  test('should have correct external links', async ({ page }) => {
    await page.goto('/');
    
    const linkedInLink = page.getByRole('link', { name: 'LinkedIn' });
    await expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/oscar-rreyes/');
    
    const githubLink = page.getByRole('link', { name: 'Github' });
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/xoscar');
    
    const mediumLink = page.getByRole('link', { name: 'Medium' });
    await expect(mediumLink).toHaveAttribute('href', 'https://medium.com/@oscar-reyes');
  });

  test('should navigate to experiments page', async ({ page }) => {
    await page.goto('/');
    
    const experimentsLink = page.getByRole('link', { name: 'Experiments' });
    await expect(experimentsLink).toHaveAttribute('href', '/experiments');
  });
});
