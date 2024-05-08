import { config } from '@/lib/config';
import { test, expect } from '@playwright/test';
import { mockAnalyticsResponse } from './fixtures/analytics';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.route('*/**/api/analytics', async (route) => {
    await route.fulfill({ json: mockAnalyticsResponse });
  });
});

test.describe('Rendering Dashboard page', async () => {
  test('should render the dashboard page', async ({ page }) => {
    const title = await page.textContent('h1');

    expect(title).toBe('Dashboard');
  });

  test('should be able to switch customizeable mode', async ({ page }) => {
    await page.getByRole('button').click();
    await page
      .getByRole('menuitemcheckbox', { name: 'Customization Mode' })
      .click();
    await expect(page.getByText('Refetching disabled')).toBeVisible();
    await expect(
      page
        .locator('div')
        .filter({ hasText: /^Sales Over Time$/ })
        .getByRole('img'),
    ).toBeVisible();
    await expect(
      page.locator('.right-0 > .lucide > path').first(),
    ).toBeVisible();
    await page.getByRole('button').click();
  });

  test('show 4 widgets with the correct data', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Sales Over Time' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'User Engagement' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Recent Transactions' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Top Products' }),
    ).toBeVisible();

    await expect(page.getByText('Product M2')).toBeVisible();
  });
});
