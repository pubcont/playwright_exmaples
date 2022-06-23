import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.schlosszwerge.de/
  await page.goto('https://www.schlosszwerge.de/');

  // Click text=Startseite / Über uns >> nth=1
  await page.locator('text=Startseite / Über uns').nth(1).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/');

  // Click text=Anmelden / Mitglied werden >> nth=1
  await page.locator('text=Anmelden / Mitglied werden').nth(1).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/anmelden-mitglied-werden/');

  // Click text=So finden Sie uns >> nth=1
  await page.locator('text=So finden Sie uns').nth(1).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/so-finden-sie-uns/');

  // Click text=Kontakt >> nth=1
  await page.locator('text=Kontakt').nth(1).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/kontakt/');

  // Click text=Impressum >> nth=1
  await page.locator('text=Impressum').nth(1).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/impressum/');

  // Click text=Steuernummer
  await page.locator('text=Steuernummer').click();

  // Click text=Kontakt >> nth=1
  await page.locator('text=Kontakt').nth(1).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/kontakt/');

  // Click text=vorstand@schlosszwerge.de
  await page.locator('text=vorstand@schlosszwerge.de').click();

  // Click text=So finden Sie uns >> nth=1
  await page.locator('text=So finden Sie uns').nth(1).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/so-finden-sie-uns/');

  // Click text=So finden Sie uns ...
  await page.locator('text=So finden Sie uns ...').click();

  // Click text=Anmelden / Mitglied werden >> nth=1
  await page.locator('text=Anmelden / Mitglied werden').nth(1).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/anmelden-mitglied-werden/');

  // Click text=Wie man ein Schlosszwerg wird?
  await page.locator('text=Wie man ein Schlosszwerg wird?').click();

  // Click a:has-text("Startseite / Über uns") >> nth=1
  await page.locator('a:has-text("Startseite / Über uns")').nth(1).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/');

  // Click a:has-text("Unser Tagesablauf") >> nth=2
  await page.locator('a:has-text("Unser Tagesablauf")').nth(2).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/startseite-%C3%BCber-uns/unser-tagesablauf/');

  // Click text=Unser Tagesablauf in der Krippe (U3)
  await page.locator('text=Unser Tagesablauf in der Krippe (U3)').click();

  // Click text=Unser Tagesablauf im Kindergarten (Ü3)
  await page.locator('text=Unser Tagesablauf im Kindergarten (Ü3)').click();

  // Click text=Vorschularbeit >> nth=2
  await page.locator('text=Vorschularbeit').nth(2).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/startseite-%C3%BCber-uns/vorschularbeit/');

  // Click text=Inhalte der Vorschularbeit
  await page.locator('text=Inhalte der Vorschularbeit').click();

  // Click text=Der Vorstand >> nth=2
  await page.locator('text=Der Vorstand').nth(2).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/startseite-%C3%BCber-uns/der-vorstand/');

  // Click text=Den Vorstand erreichen Sie per Mail unter vorstand@schlosszwerge.de
  await page.locator('text=Den Vorstand erreichen Sie per Mail unter vorstand@schlosszwerge.de').click();

  // Click text=Aktuelles für Mitglieder >> nth=2
  await page.locator('text=Aktuelles für Mitglieder').nth(2).click();
  await expect(page).toHaveURL('https://www.schlosszwerge.de/startseite-%C3%BCber-uns/aktuelles-f%C3%BCr-mitglieder/');

  // Click text=Das Mittagsmenü
  await page.locator('text=Das Mittagsmenü').click();

  // Click text=!!! Wichtiger Aushang für die Krippe !!!
  await page.locator('text=!!! Wichtiger Aushang für die Krippe !!!').click();

});