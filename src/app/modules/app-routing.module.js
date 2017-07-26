"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var posts_component_1 = require("../components/posts.component/posts.component");
var users_component_1 = require("../components/users.component/users.component");
var user_detail_component_1 = require("../components/user-detail.component/user-detail.component");
var post_detail_component_1 = require("../components/post-detail.component/post-detail.component");
var currencies_component_1 = require("../components/currencies.component/currencies.component");
var routes = [
    {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: posts_component_1.PostsComponent
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    },
    {
        path: 'users/:id',
        component: user_detail_component_1.UserDetailComponent
    },
    {
        path: 'posts/:id',
        component: post_detail_component_1.PostDetailComponent
    },
    {
        path: 'currencies',
        component: currencies_component_1.CurrenciesComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map