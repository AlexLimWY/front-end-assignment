Testing

Step 1:
Copied JavaScript code from 'charts.js' file to 'script.js' JavaScript file.


Step 2:
Linked the 'test.html' file to the 'script.js' file.

Step 3:
Refactored the JavaScript code to use functions. It is easier to test functions than
an entire program. We have to chop up the programs into reusable/modular parts.
See the getData() function in script.js

Step 4:
Functions were added to retrieve the minimum date, maximum date and date format.
The process of breaking long code into smaller parts (with each parts
being a function) is known as *refactoring*.


For example, to calculate the min and max dates, the 'ndx' crossfilter was used in the 'getMinandMaxDate' function.
A date dimension was then created in that function to store the max and min dates.

The final result is in getData().
