# opentdb

## Eine kompletter Lokaler Sync Client für das Open Trivia Database API

Dies war ein Projekt aus dem Unterricht, welches ich dann selber fertig geschrieben habe. Es wollte sich einfach
niemand der Schüler die Mühe antun.

## Tech Stack

- **deno / prisma / typescript**
- **fetch api** mit solidem error handling, da das opentdb api sehr interessante constraints hat.

## API response codes (taken from website, available in helpers.ts)

- Code 0: Success Returned results successfully.
- Code 1: No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
- Code 2: Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)
- Code 3: Token Not Found Session Token does not exist.
- Code 4: Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.
- Code 5: Rate Limit Too many requests have occurred. Each IP can only access the API once every 5 seconds.
