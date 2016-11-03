var app = angular.module('servicesIntroApp', []);

app.controller('myTunes', function ($http, $log) {

    this.createURL = function () {
        this.split_search = this.search_text.split(' ');
        this.search_term = this.split_search.join('+');
        $log.log('search term is :', this.search_term);
        this.hitUpDatabase();
    };

    this.hitUpDatabase = function () {
        var self = this;
        $http({
            url: 'https://itunes.apple.com/search?term=' + self.search_term + '&callback=JSON_CALLBACK',
            method: 'jsonp',
            cache: false
        })
            .then(
                function (response) {
                    $log.log('successful search!');
                    $log.log(response);
                    self.data = response.data.results;
                    $log.log(self.data);
                },
                function (response) {
                    $log.log('failure to launch!');
                    self.data = response.data || 'Failure to launch';
                })
    };

});