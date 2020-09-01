angular.module('myngapp', []);

angular.module('myngapp')
    .controller('mainCnt', cntListener);

function cntListener() {
    this.message = "Hellow world";
    this.firstname = "First name";
    this.lastname = "Last name";

    this.people = [
        'Ashraf',
        'kaka',
        'Tammum'
    ];
}