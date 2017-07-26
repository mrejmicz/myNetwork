"use strict";
var User = (function () {
    function User(user) {
        this.id = user.id;
        this.name = user.name;
        this.username = user.username;
        this.email = user.email;
        this.address = user.address;
        this.phone = user.phone;
        this.website = user.website;
        this.company = user.company;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map