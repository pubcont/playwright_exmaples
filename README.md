# Playwright Github Workflows with Exmaple

## Install playwright
Source: [playwright.dev](https://playwright.dev/docs/intro)
```bash
npm i -D @playwright/test
# install supported browsers
npx playwright install
```

## Write test with following command and store in e2e-tests

```js
npx playwright codegen <url>
```

Then store the code in a `e2e-tests/<url>.spec.mjs` file and generate a workfow in `.github/workflows/e2e_url.yml`