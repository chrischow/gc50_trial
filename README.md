# GC50 Virtual Sports Challenge
This is the official webpage for the GC50 Virtual Sports Challenge.

## Workflow
1. User fills in Google Form with mileage.
2. Google Sheets summarises data into sheets dedicated for individuals and units.
3. Script is run every `X` minutes to refresh the connection between Google Sheets and the GitHub repository.
4. Website graphics are updated with live data. Potential lag is 1 to 5 minutes.

### Google Forms and Sheets
* Participants submit activity via Google Forms anytime they complete it. They can submit as many entries as they wish.
* Entries are saved into a Google Sheet (`Raw`).
* Is there a plan to archive data to reduce the load on Google Sheets? There could potentially be thousands of entries.
* Overall scores are tabulated in dedicated sheets `individualMileage` and `unitMileage` using pivot tables.
* Pivot tables are automatically refreshed (verify).