# Google Sheets Setup for Booking Form

This guide will help you set up the Google Sheets backend to receive bookings from your website.

## Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a **Blank spreadsheet**.
2. Give it a name (e.g., "Website Bookings").
3. (Optional) In the first row, add headers for clarity:
   - Full Name
   - Mobile Number
   - Car Model
   - Service Type
   - Preferred Date
   - Express Service
   - Submission Date

## Step 2: Open Apps Script

1. Click on **Extensions** in the top menu.
2. Select **Apps Script**. This will open a new tab.

## Step 3: Paste the Code

1. You will see a file named `Code.gs`. Delete everything inside it.
2. Copy and paste the following code into the editor:

```javascript
function doPost(e) {
  if (!e || !e.parameter) {
    return ContentService.createTextOutput('No data');
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  sheet.appendRow([
    e.parameter.fullName,
    e.parameter.mobileNumber,
    e.parameter.carModel,
    e.parameter.serviceType,
    e.parameter.preferredDate,
    e.parameter.expressService ? 'Yes' : 'No',
    new Date(),
  ]);

  return ContentService.createTextOutput('Success');
}
```

3. Click the **Save** icon (diskette) at the top and name the project (e.g., "Booking Form Handler").

## Step 4: Deploy as a Web App

1. Click the blue **Deploy** button at the top right.
2. Select **New deployment**.
3. Click the gear icon (⚙️) next to "Select type" and choose **Web app**.
4. Set the following settings:
   - **Description**: Booking Form Submission
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** (This is critical so the form can send data)
5. Click **Deploy**.
6. **Authorization**: A popup will appear.
   - Click **Authorize access**.
   - Select your Google account.
   - You might see "Google hasn't verified this app". Click **Advanced**.
   - Click **Go to Booking Form Handler (unsafe)** at the bottom.
   - Click **Allow**.

## Step 5: Copy the URL

1. Once the deployment finishes, you will see a **Web App URL**.
2. **Copy this URL** and provide it to the developer to connect the form.
