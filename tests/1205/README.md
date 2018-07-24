## Explanation

After running the two tests, an output.json file is saved from the custom reporter.

This json file contains the results from one test instead of both, because the
custom reporter is called twice (once for each test) instead of once at the end.
