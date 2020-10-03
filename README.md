# GC50 Virtual Sports Challenge
This is the official webpage for the GC50 Virtual Sports Challenge.

## Workflow
1. User fills in Google Form with mileage.
2. Google Sheets summarises data using pivot table into the sheets `individualMileage` and `unitMileage`.
3. Script is run every `X` minutes to refresh the connection between Google Sheets and the GitHub repository.
4. Website graphics are updated with live data. Potential lag is 1 to 5 minutes.