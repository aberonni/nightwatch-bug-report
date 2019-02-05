## Explanation

When using a page object element together with a custom command that calls `.execute`, the custom command fails when an array or object is provided as an argument and we see the following error:

```
[Test] Test Suite
=================
Running:  Demo test

   No selector property for selector object. Instead found properties: 0
       at Object.Demo test (/Users/thaddeusreid/nightwatch-bug-report/tests/9999/src/test.js:8:8)

FAILED: 1 errors (10ms)
   No selector property for selector object. Instead found properties: 0
       at Object.Demo test (/Users/thaddeusreid/nightwatch-bug-report/tests/9999/src/test.js:8:8)
_________________________________________________
```
