# Singapore HDB Resale Flat Information
This is a data dashboard of Singapore’s HDB (Housing & Development Board) resale flats. These are flats originally built by the Singapore government.  Singapore HDB flats are a popular topic among Singaporeans because the majority of Singaporeans own and live in HDB flats. Aspiring homeowners also watch the HDB flat prices keenly to determine whether they can afford their ideal HDB flats.

## Demo
A live demo can be found [here](https://alwy-front-end-assignment.herokuapp.com/ ).
## UX
My goal in the design was data visualisation. I wanted to present more than 80,000 records of resale flat information in easy-to-digest charts. For reference, all these records are in the ‘resale-flat-prices-based-on-registration-date-from-jan-2015-onwards.csv’ file in the main directory of this ‘front-end-assignment’ Cloud9 workspace.
4 Charts were used:
1.  Pie Chart
2. Bar Chart
3. Line Graph
4. Scatter Plot

All 4 charts interact with one another. For example, clicking on the ‘4 ROOM’ segment of the pie chart will only show information for the ‘4 ROOM’ flats in the other 3 charts.

 ### Existing Features
- I used a sticky button called ‘Statistics’ on the top-right hand corner of this one-page data dashboard. With this button and regardless of where the user is on this long page, the user can easily click on the menu items to get to their intended section on the page.

### Features Left to Implement
- I would like to use version 5 of d3 instead of version 3 so that I can use promises instead of asynchronous callbacks to load data. Faster loading of data will render the dimension charts from dc.js faster. 

## Technologies Used
1. HTML
- For structuring the website, e.g. adding content to the website.
2. CSS
- For styling the website, e.g. text alignment.
3. [Bootstrap (Version 4)](https://getbootstrap.com/)
 - The project uses Bootstrap to create mobile-responsive web pages.
4. [dc.js (Version 2)]( https://dc-js.github.io/dc.js/)
    - The project uses a dimensional charting JavaScript library (dc.js) to produce the 4 charts mentioned above.
5. [Jasmine (Version 2)]( https://jasmine.github.io/)
-The project uses Jasmine, a behavior-driven development framework for testing JavaScript code.

## Testing
The Jasmine framework was used to test the JavaScript code for the data visualisation charts. The files used to run this Jasmine test are in the ‘jasmine-testing’ folder within the ‘front-end-assignment’ workspace. The Jasmine test cases were written in the ‘test.js’ file in the ‘spec’ sub-folder while the JavaScript code to be tested were written in the ‘script.js’ file in the ‘scripts’ sub-folder.

Jasmine tested that the line graph and scatter plot would return the correct results for the minimum and maximum dates, as well as the date formats.

The interactions between the charts were manually tested. For example, clicking on the ‘4 ROOM’ segment of the pie chart will cause the other 3 charts to change their appearances and show only information for ‘4 ROOM’ flats.

## Deployment
This project was deployed to Heroku.
A person who wants to run this code locally can clone or download this repository from https://github.com/AlexLimWY/front-end-assignment.git and paste it into their editor terminal.

## Credits
### Content
The data for the charts are from [Data.gov.sg](https://data.gov.sg/dataset/resale-flat-prices).
### Acknowledgements
- I was inspired to produce this data dashboard as my mentor told me that data visualisation of Singapore’s HDB resale flat prices and related information would be useful for aspiring homeowners.

