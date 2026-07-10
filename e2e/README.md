# E2E Tests

End-to-end tests for the Oscar R. Reyes portfolio website using Playwright.

## Running Tests

By default, tests run against the production site at `https://www.oscarreyes.me/`:

```bash
# Run all tests in headless mode
npm run test:e2e

# Run tests with Playwright UI (interactive mode)
npm run test:e2e:ui

# Run tests in headed mode (visible browser)
npm run test:e2e:headed

# Show HTML test report
npm run test:e2e:report
```

## Testing Against Local Development

To test against a local development server instead:

```bash
BASE_URL=http://localhost:3001 npm run test:e2e
```

Or uncomment the `webServer` section in `playwright.config.ts` to automatically start the dev server.

## Test Coverage

- **home.spec.ts**: Tests for the main portfolio page
  - Main heading and name display
  - Job title
  - Tech stack
  - Footer links
  - External links (LinkedIn, Github, Medium)
  - Navigation to experiments page

- **example.spec.ts**: Basic smoke tests
  - Page loads successfully
  - Body content is visible

## Configuration

See `playwright.config.ts` for configuration options.
