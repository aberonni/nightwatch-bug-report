## Explanation

Given this HTML structure:

```
<ul>
    <li class="speed"><div class="current-speed">10</div><div class="mph">MPH</div></li>
</ul>
```

and this E2E test:

```
browser.getText('li[class="speed"] div[class="current-speed"]', ({ value }) => {
    browser.assert.equal(value, 10, 'speed successfully read');
})
```

I've found varying results in different Nightwatch versions:

1. 1.0.11: test passes
2. 1.0.12: `Failed [equal]: (speed successfully read) - expected "10" but got: "null"`
3. 1.0.13: `Failed [equal]: (speed successfully read) - expected "10" but got: "[object Object]"`
4. 1.0.14: `Error while running .locateSingleElement() protocol action: no such element: Unable to locate element: {"method":"css selector","selector":"li[class="speed"] div[class="current-speed"]"}`

This seems to be a regression from 1.0.11.
