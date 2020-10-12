# Data Team Workflow

## Integration of Design Updates
1. Site to be tested locally.
2. Changes will be pushed to *staging site* for live testing.
    * Test basic functionality
    * Test view on different viewports (i.e. mobile, tablet, browser x various orientations)
3. Once tested good, changes will be pushed to *live site*.

## Data Updates
* Both the staging and live sites are to be refreshed with data from [Google Sheets](https://docs.google.com/spreadsheets/d/1P_eKRABIs7vQG0-p7Z8ElE_EpCOJl3bEJ8gUH5ScEHU/edit#gid=442245183) - method TBC
* If necessary, data will be pushed from the staging site to the live site

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