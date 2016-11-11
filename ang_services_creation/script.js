var app = angular.module('sgtApp', []);

app.provider('sgtData', function(){
    //Create a variable to hold this
    var sgtDataSelf = this;
    //Create a variable to hold your api key but set it to an empty string
    sgtDataSelf.api_key = '';
    //Create a variable to hold the API url but set it to an empty string
    sgtDataSelf.api_url = '';

    //Add the necessary services to the function parameter list
    sgtDataSelf.$get = function($http,$q,$log){
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help
        return {
            call_api: function () {
                var data = 'api_key=' + sgtDataSelf.api_key;
                var defer = $q.defer();
                $http({
                    url: sgtDataSelf.api_url,
                    method: 'post',
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function (response){
                    $log.log('success: ', response);
                    defer.resolve(response);
                },
                function (response){
                    $log.log('error: ', response);
                    defer.reject('Error message!');
                });
                $log.log('defer: ', defer.promise);
                return defer.promise;
            }
        }
    }
});

//Config your provider here to set the api_key and the api_url
app.config(function(sgtDataProvider){
    sgtDataProvider.api_key = 'BmjoMo3MLu';
    sgtDataProvider.api_url = 'https://s-apis.learningfuze.com/sgt/get';
});

//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function(sgtData,$log){
    //Create a variable to hold this, DO NOT use the same name you used in your provider
    var ioContSelf = this;
    //Add an empty data object to your controller, make sure to call it 'data'
    ioContSelf.data = {};
    //Add a function called getData to your controller to call the SGT API
    ioContSelf.getData = function () {
        sgtData.call_api()
            .then(function (response){
                $log.log('success!');
                ioContSelf.data = response.data;
            },
            function (response) {
                $log.log('fail!!!');
            })
    };
    //Refer to the prototype instructions for more help

});