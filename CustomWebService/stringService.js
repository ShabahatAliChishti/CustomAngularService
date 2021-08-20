/// <reference path="script.js" />

//to create custom service and register with angular we use factory method
app.factory('stringService', function () {
    //this service return javascript object
    return
    {
        processString: (function (input) {
            if (!input) {


                return input;
            }

            var output = "";

            for (var i = 0; i < input.length; i++) {

                //skip first letter
                if (i > 0 && input[i] == input[i].toUpperCase()) {

                    output = output + " ";
                }
                // else continue appending characters to output
                output = output + input[i];
            }
            return output;


        })();
    };
});