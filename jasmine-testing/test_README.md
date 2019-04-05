Converting to testing

Step 1:
Seperate code into another JavaScript file.
(In this case, we create the script.js and put the the 
JavaScript code inside the file)

Step 2:
Make sure we include the new script.js inside the .html file.

Step 3:
Refactor the code to use functions. It is easier to test functions than
an entire program. We have to chop up the programs into reusable/modular parts.
See the getData() function in script.js

Step 4:
We add in a function to retrieve the minimum and maximum date.
The process of breaking long code into smaller parts (with each parts
being a function) is known as *refactoring*


In this case, we identify a system within the long chunk of code.
A system is anything with input, processing and output. A function
is essentially a 'black box' which takes in an input
and return output.

For instance, to calculate the min and max dates, we need the crossfilter.
Hence the function takes in the ndx filter, and from there we
create a dimension which will be used to calculate the max and min dates.

The final result is in getData()
