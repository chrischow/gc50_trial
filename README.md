# GC50 Virtual Sports Challenge
This is the official webpage for the GC50 Virtual Sports Challenge (VSC).

## Overview of Workflow
1. User fills in Google Form with mileage.
2. Concurrently, VSC team fills in names of people who have attained badges.
2. Google Sheets summarises data into sheets dedicated for the community as a whole, sub-communities, individuals, and badges.
3. Script is run every `X` minutes to refresh the connection between Google Sheets and the GitHub repository.
4. Website graphics are updated with live data. Potential lag is 1 to 5 minutes.

## Integration Between Google Forms, Google Sheets, and GitHub

### Updating Mileage
* Participants submit activity via Google Forms anytime they complete it. They can submit as many entries as they wish.
* Entries are saved into a Google Sheet (`MileageEntries`).
* Tabulation of scores using Google Sheet's pivot tables:
    * Total community mileage is tabulated in `commMileage`.
    * Total mileage for sub-communities are tabulated in `subcommMileage`.
    * Total mileage for individuals are tabulated in `individualMileage`.

### Updating Badges
* **VSC team** must update `badges` sheet with the name of individuals and the name of badges they attained.

### Pulling Data
* Dedicated URLs are created to pull data from each sheet into a separate data files on GitHub.
* Pages with these URLs open will be refreshed every `X` minutes to pull data.
* Website content will be automatically updated.