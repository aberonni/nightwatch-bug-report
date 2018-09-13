## Explanation

When using a page object element together with a custom command that calles `.execute`, the custom command does not work and nightwatch reports the following error:

```
   Converting circular structure to JSON
       at JSON.stringify (<anonymous>)
 Error while running .executeScript() protocol action: unknown error: 'script' must bea string
```
