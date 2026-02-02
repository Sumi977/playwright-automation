
Running 1 test using 1 worker

[1A[2K[1/1] tests/ClientAppPageObject.spec.js:5:5 › @Web Client App login
[1A[2K  1) tests/ClientAppPageObject.spec.js:5:5 › @Web Client App login ─────────────────────────────────

    ReferenceError: page is not defined

       at ../pageobjects/Loginpage.js:10

       8 |     }
       9 |     async goto() {
    > 10 |         await page.goto("https://rahulshettyacademy.com/client");
         |         ^
      11 |
      12 |     }
      13 |
        at LoginPage.goto (/Users/sumanarai/Documents/playWrightAutomationEndToEnd/pageobjects/Loginpage.js:10:9)
        at /Users/sumanarai/Documents/playWrightAutomationEndToEnd/tests/ClientAppPageObject.spec.js:15:14

    Error: locator.waitFor: Test ended.
    Call log:
    [2m  - waiting for locator('.card-body b') to be visible[22m


      16 |    loginPage.validLogin(username, password);
      17 |
    > 18 |    await page.locator('.card-body b').waitFor();
         |                                       ^
      19 |    const products = await page.$$('.card-body b');
      20 |
      21 |    for (const product of products) {
        at /Users/sumanarai/Documents/playWrightAutomationEndToEnd/tests/ClientAppPageObject.spec.js:18:39

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/ClientAppPageObject--Web-Client-App-login/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/ClientAppPageObject--Web-Client-App-login/trace.zip
    Usage:

        npx playwright show-trace test-results/ClientAppPageObject--Web-Client-App-login/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────


[1A[2K  1 failed
    tests/ClientAppPageObject.spec.js:5:5 › @Web Client App login ──────────────────────────────────

[36m  Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.[39m
