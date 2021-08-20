var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope, stringService) {
     
        //two problems here:
        //1) controller code is big large and complex
        //2)if we want to reuse logic we have to duplicate that code in that controller

        //solution create  service
        $scope.transformString = function (input) {

            //if (!input) {


            //    return input;
            //}

            //var output = "";

            //for (var i = 0; i < input.length; i++) {

            //    //skip first letter
            //    if (i > 0 && input[i] == input[i].toUpperCase()) {

            //        output = output + " ";
            //    }
            //    // else continue appending characters to output
            //    output = output + input[i];
            //}

            $scope.output = stringService.processString(input);

        }
    });
        
    