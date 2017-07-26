"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var data_service_1 = require("../../services/data.service");
var PostDetailComponent = (function () {
    function PostDetailComponent(dataService, route, location, router) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.dataService.getPost(+params.get('id')); })
            .subscribe(function (post) {
            _this.post = post;
            _this.dataService.getUser(_this.post.userId).then(function (user) { return _this.user = user; });
        });
    };
    PostDetailComponent.prototype.userDetail = function () {
        this.router.navigate(['/users', this.user.id]);
    };
    PostDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return PostDetailComponent;
}());
PostDetailComponent = __decorate([
    core_1.Component({
        selector: 'post-detail',
        templateUrl: './post-detail.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=post-detail.component.js.map