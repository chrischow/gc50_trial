# Data Team Workflow

## Integration of Design Updates
*IC: Christian*

1. Site to be tested locally.
2. Changes will be pushed to *staging site* for live testing.
    * Test basic functionality
    * Test view on different viewports (i.e. mobile, tablet, browser x various orientations)
3. Once tested good, changes will be pushed to *live site*.

## Data Updates
*IC: Christian*
*2IC: Gabriel*

* Both the staging and live sites are to be refreshed with data from [Google Sheets](https://docs.google.com/spreadsheets/d/1P_eKRABIs7vQG0-p7Z8ElE_EpCOJl3bEJ8gUH5ScEHU/edit#gid=442245183) - method TBC
* If necessary, data will be pushed from the staging site to the live site

### Instructions
1. Open the [Page Refresh](https://chrome.google.com/webstore/detail/page-refresh/hmooaemjmediafeacjplpbpenjnpcneg) Chrome extension dashboard (top right of browser --> Home).
2. Open all four webpages in separate tabs (URLs sent privately).
3. In each tab, configure timer to 5 minutes (frequency to be decided) and start, noting that the four pages **should not refresh at the same time** to prevent clashes in updates at GitHub's end.
4. Go back to the Page Refresh dashboard page.
5. Ensure that the refreshes do not overlap exactly. Pause and continue the refresh timers for the four pages to spread them out by at least 30s.

## Periodic Checks and Tasks

### All Sheets
* If there is at least response, then check that there are **no calculations errors** (e.g. #N/A, #VALUE!, #REF!)

### Form Responses
* Rows are not skipped (i.e. blank role in between valid rows)
* All rows have required entries
* All rows have no erroneous or weird entries

### Calculations
* All responses have a corresponding calculation

### Badge Recognitions
* Update the `DATE RECOGNISED` column for a given person when you have recognised a person for clocking a given badge

### Name Lookups
* Ensure that name lookups reflect the correct alias
* Correct aliases manually if requested by participants