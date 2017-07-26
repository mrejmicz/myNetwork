"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("../components/app.component/app.component");
var posts_component_1 = require("../components/posts.component/posts.component");
var users_component_1 = require("../components/users.component/users.component");
var user_detail_component_1 = require("../components/user-detail.component/user-detail.component");
var post_detail_component_1 = require("../components/post-detail.component/post-detail.component");
var currencies_component_1 = require("../components/currencies.component/currencies.component");
var data_service_1 = require("../services/data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [data_service_1.DataService],
        declarations: [
            app_component_1.AppComponent,
            posts_component_1.PostsComponent,
            users_component_1.UsersComponent,
            user_detail_component_1.UserDetailComponent,
            post_detail_component_1.PostDetailComponent,
            currencies_component_1.CurrenciesComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map