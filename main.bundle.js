webpackJsonp([0,4],{

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(442);


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authenticate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoteService = (function () {
    function NoteService(af, authService) {
        this.af = af;
        this.authService = authService;
        if (authService.isAuthenticate) {
            this.notes = this.af.database.list('Notes', {
                query: {
                    orderByChild: 'UserKey',
                    equalTo: this.authService.user.$key
                }
            });
        }
    }
    NoteService.prototype.getNoteListByUserID = function () {
        return this.notes;
    };
    NoteService.prototype.SaveNote = function (note) {
        return this.notes.push(note);
    };
    NoteService.prototype.UpdateNote = function (note) {
        var data = {
            Name: note.Name,
            Description: note.Description,
            UserKey: note.UserKey
        };
        return this.notes.update(note.$key, data);
    };
    NoteService.prototype.RemoveNote = function (key) {
        return this.notes.remove(key);
    };
    NoteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _b) || Object])
    ], NoteService);
    return NoteService;
    var _a, _b;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/note.service.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_authenticate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_loader_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetPasswordComponent = (function () {
    function SetPasswordComponent(authService, route, loaderService) {
        this.authService = authService;
        this.route = route;
        this.loaderService = loaderService;
        this.password = "";
        this.isHidden = false;
    }
    SetPasswordComponent.prototype.ngOnInit = function () {
    };
    SetPasswordComponent.prototype.SaveGoogleAuthUser = function () {
        if (this.password == "") {
            this.isHidden = true;
        }
        else {
            this.loaderService.showLoader();
            this.isHidden = false;
            var data = JSON.parse(localStorage.getItem("userDetail"));
            console.log(data);
            var userDetail = {
                Name: data.displayName,
                Email: data.email,
                PhotoUrl: data.photoURL,
                AuthUserID: data.uid,
                Password: this.password,
                GmailEnabled: true,
                OutLookEnabled: false
            };
            if (this.authService.RegisterUser(userDetail)) {
                this.hideModal();
                localStorage.setItem("userDetail", JSON.stringify(this.authService.user));
                this.route.navigate(["./Dashboard"]);
            }
            this.loaderService.hideLoader();
        }
    };
    SetPasswordComponent.prototype.hideModal = function () {
        $('#setPasswordModal').modal('hide');
    };
    SetPasswordComponent.prototype.showModal = function () {
        $('#setPasswordModal').modal({ backdrop: 'static' });
    };
    SetPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-set-password',
            template: __webpack_require__(749),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Services_authenticate_service__["a" /* AuthenticateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_loader_service__["a" /* LoaderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__Services_loader_service__["a" /* LoaderService */]) === 'function' && _c) || Object])
    ], SetPasswordComponent);
    return SetPasswordComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/set-password.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_note_service__ = __webpack_require__(253);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskPopupComponent = (function () {
    function TaskPopupComponent(noteService) {
        this.noteService = noteService;
        this.isEdit = false;
        this.headerText = "";
        this.saveDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */]();
        this.removeDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */]();
        this.note = {
            Name: "",
            Description: "",
            UserKey: ''
        };
    }
    TaskPopupComponent.prototype.ngOnInit = function () {
    };
    TaskPopupComponent.prototype.showModal = function (isEditFlag, currentNote) {
        this.isEdit = isEditFlag;
        this.headerText = isEditFlag ? "Edit" : "Add";
        this.note = Object.assign({}, currentNote);
        $('#noteModal').modal({ backdrop: 'static' });
    };
    TaskPopupComponent.prototype.hideModal = function () {
        $('#noteModal').modal('hide');
    };
    TaskPopupComponent.prototype.SaveNote = function () {
        this.hideModal();
        this.saveDetail.emit(this.note);
    };
    TaskPopupComponent.prototype.RemoveNote = function () {
        this.hideModal();
        this.removeDetail.emit(this.note);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], TaskPopupComponent.prototype, "saveDetail", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], TaskPopupComponent.prototype, "removeDetail", void 0);
    TaskPopupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-task-popup',
            template: __webpack_require__(751),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_note_service__["a" /* NoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Services_note_service__["a" /* NoteService */]) === 'function' && _a) || Object])
    ], TaskPopupComponent);
    return TaskPopupComponent;
    var _a;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/task-popup.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 441;


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(567);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/main.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_authenticate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_note_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_popup_task_popup_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_loader_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashBoardComponent = (function () {
    function DashBoardComponent(af, authService, noteService, route, loaderService) {
        this.af = af;
        this.authService = authService;
        this.noteService = noteService;
        this.route = route;
        this.loaderService = loaderService;
        this.isHidden = true;
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticate) {
            this.getNoteListByUserID();
        }
        else {
            this.route.navigate(["./Login"]);
        }
    };
    DashBoardComponent.prototype.getNoteListByUserID = function () {
        var _this = this;
        this.noteService.getNoteListByUserID().subscribe(function (list) {
            _this.NoteList = list;
            console.log(list);
            if (list.length <= 0) {
                _this.isHidden = false;
            }
        });
    };
    DashBoardComponent.prototype.AddNote = function () {
        this.currentNote = { Name: "", Description: "", UserKey: this.authService.user.$key };
        this.popup.showModal(false, this.currentNote);
    };
    DashBoardComponent.prototype.handleSaveNote = function ($event) {
        var _this = this;
        this.loaderService.showLoader();
        if ($event.hasOwnProperty('$key')) {
            //update
            this.noteService.UpdateNote($event).then(function () {
                _this.currentNote = null;
                _this.loaderService.hideLoader();
            }, function (error) {
                _this.currentNote = null;
                console.log(error);
                _this.loaderService.hideLoader();
            });
        }
        else {
            // add
            this.noteService.SaveNote($event).then(function () {
                _this.currentNote = null;
                _this.loaderService.hideLoader();
            }, function (error) {
                _this.currentNote = null;
                console.log(error);
                _this.loaderService.hideLoader();
            });
        }
    };
    DashBoardComponent.prototype.HandleRemoveNote = function ($event) {
        var _this = this;
        this.loaderService.showLoader();
        this.noteService.RemoveNote($event.$key).then(function () {
            _this.currentNote = null;
            _this.loaderService.hideLoader();
        }, function (error) {
            _this.currentNote = null;
            console.log(error);
            _this.loaderService.hideLoader();
        });
    };
    DashBoardComponent.prototype.getNewNoteID = function () {
        return this.NoteList.length > 0 ? (parseInt(this.NoteList[this.NoteList.length - 1].$key) + 1).toString() : "0";
    };
    DashBoardComponent.prototype.UpdateNote = function (item) {
        this.currentNote = item;
        this.popup.showModal(true, this.currentNote);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__task_popup_task_popup_component__["a" /* TaskPopupComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__task_popup_task_popup_component__["a" /* TaskPopupComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__task_popup_task_popup_component__["a" /* TaskPopupComponent */]) === 'function' && _a) || Object)
    ], DashBoardComponent.prototype, "popup", void 0);
    DashBoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-dash-board',
            template: __webpack_require__(745),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__Services_authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Services_authenticate_service__["a" /* AuthenticateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__Services_note_service__["a" /* NoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__Services_note_service__["a" /* NoteService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__Services_loader_service__["a" /* LoaderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__Services_loader_service__["a" /* LoaderService */]) === 'function' && _f) || Object])
    ], DashBoardComponent);
    return DashBoardComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/dash-board.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_loader_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(_loaderService) {
        var _this = this;
        this._loaderService = _loaderService;
        this.showLoader = false;
        _loaderService.StartLoader.subscribe(function (loading) {
            _this.showLoader = loading;
        });
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__(746),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_loader_service__["a" /* LoaderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Services_loader_service__["a" /* LoaderService */]) === 'function' && _a) || Object])
    ], LoaderComponent);
    return LoaderComponent;
    var _a;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/loader.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_authenticate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_loader_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(route, authService, loaderService) {
        this.route = route;
        this.authService = authService;
        this.loaderService = loaderService;
        this.showError = false;
        //super(route,authService);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticate) {
            this.route.navigate(["./Dashboard"]);
        }
    };
    LoginComponent.prototype.Login = function (form) {
        var _this = this;
        //this.authService.isAuthenticate=true;
        this.showError = false;
        this.loaderService.showLoader();
        this.authService.Login(this.email, this.password)
            .subscribe(function (data) {
            if (data[0].Password == _this.password) {
                _this.authService.userAuthenticated(data[0]);
                _this.route.navigate(["./Dashboard"]);
            }
            else {
                _this.showError = true;
            }
            _this.loaderService.hideLoader();
        }, function (error) {
            console.log(error);
            _this.loaderService.hideLoader();
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(747),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__Services_authenticate_service__["a" /* AuthenticateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_loader_service__["a" /* LoaderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__Services_loader_service__["a" /* LoaderService */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/login.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_password_set_password_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_authenticate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_loader_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(af, authService, route, loaderService) {
        var _this = this;
        this.af = af;
        this.authService = authService;
        this.route = route;
        this.loaderService = loaderService;
        this.isSubscribeCall = false;
        this.ConfirmPassword = "";
        this.userInfo = {
            Name: '',
            Email: '',
            Password: '',
            AuthUserID: '',
            PhotoUrl: '',
            $key: '',
            GmailEnabled: false,
            OutLookEnabled: false
        };
        this.af.auth.subscribe(function (user) {
            if (_this.isSubscribeCall) {
                if (user) {
                    console.log(user);
                    localStorage.setItem("userDetail", JSON.stringify(user.google));
                    _this._passwordModal.showModal();
                }
                else {
                    console.log("error");
                }
            }
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.GmailAuthenticate = function () {
        this.isSubscribeCall = true;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Google
        });
    };
    RegisterComponent.prototype.RegisterUser = function () {
        if (this.userInfo.Password != this.ConfirmPassword) {
            alert("Password does not match");
        }
        else {
            this.loaderService.showLoader();
            var userDetail = {
                Name: this.userInfo.Name,
                Email: this.userInfo.Email,
                PhotoUrl: this.userInfo.PhotoUrl,
                AuthUserID: "",
                Password: this.userInfo.Password,
                GmailEnabled: false,
                OutLookEnabled: false
            };
            if (this.authService.RegisterUser(userDetail)) {
                localStorage.setItem("userDetail", JSON.stringify(this.authService.user));
                this.route.navigate(["./Dashboard"]);
            }
            this.loaderService.hideLoader();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__set_password_set_password_component__["a" /* SetPasswordComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__set_password_set_password_component__["a" /* SetPasswordComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__set_password_set_password_component__["a" /* SetPasswordComponent */]) === 'function' && _a) || Object)
    ], RegisterComponent.prototype, "_passwordModal", void 0);
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(748),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__Services_authenticate_service__["a" /* AuthenticateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__Services_loader_service__["a" /* LoaderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__Services_loader_service__["a" /* LoaderService */]) === 'function' && _e) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/register.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialMediaSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialMediaSettingsComponent = (function () {
    function SocialMediaSettingsComponent(af) {
        this.af = af;
        this.af.auth.subscribe(function (user) {
            if (user) {
                console.log(user);
                console.log("Token");
                console.log(user.auth.getToken());
            }
            else {
                // user not logged in
                // this.user = {};
                console.log("error");
            }
        });
    }
    SocialMediaSettingsComponent.prototype.ngOnInit = function () {
    };
    SocialMediaSettingsComponent.prototype.GmailAuthenticate = function () {
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Google
        });
    };
    SocialMediaSettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-social-media-settings',
            template: __webpack_require__(750),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], SocialMediaSettingsComponent);
    return SocialMediaSettingsComponent;
    var _a;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/social-media-settings.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_authenticate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(route, authService) {
        var _this = this;
        this.route = route;
        this.authService = authService;
        this.title = 'app works!';
        authService.isAuthenticate = false;
        this.userName = "test";
        this.authService.userInfo.subscribe(function (userDetails) {
            _this.userName = userDetails.Name;
            _this.imgUrl = userDetails.PhotoUrl != "" ? userDetails.PhotoUrl : "../assets/images/noimage.jpg";
        });
    }
    AppComponent.prototype.LogOut = function () {
        this.authService.LogOut();
        this.route.navigate(["./Login"]);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(752),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Services_authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Services_authenticate_service__["a" /* AuthenticateService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/app.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_authenticate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_note_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_dash_board_dash_board_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_login_login_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Components_social_media_settings_social_media_settings_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Components_loader_loader_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Components_task_popup_task_popup_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Components_register_register_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Components_set_password_set_password_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Services_loader_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'Login' },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_9__Components_login_login_component__["a" /* LoginComponent */] },
    { path: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_8__Components_dash_board_dash_board_component__["a" /* DashBoardComponent */] },
    { path: 'AccountSettings', component: __WEBPACK_IMPORTED_MODULE_11__Components_social_media_settings_social_media_settings_component__["a" /* SocialMediaSettingsComponent */] },
    { path: 'Register', component: __WEBPACK_IMPORTED_MODULE_14__Components_register_register_component__["a" /* RegisterComponent */] }
];
var firebaseConfig = {
    apiKey: "AIzaSyDyw0L-36iLMIPhmyrLsy4apFJb5miGdRY",
    authDomain: "feeds-157317.firebaseapp.com",
    databaseURL: "https://feeds-157317.firebaseio.com",
    storageBucket: "feeds-157317.appspot.com"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Components_dash_board_dash_board_component__["a" /* DashBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__Components_social_media_settings_social_media_settings_component__["a" /* SocialMediaSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Components_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__Components_task_popup_task_popup_component__["a" /* TaskPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__Components_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_15__Components_set_password_set_password_component__["a" /* SetPasswordComponent */], __WEBPACK_IMPORTED_MODULE_12__Components_loader_loader_component__["a" /* LoaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig, {
                    provider: __WEBPACK_IMPORTED_MODULE_10_angularfire2__["b" /* AuthProviders */].Google,
                    method: __WEBPACK_IMPORTED_MODULE_10_angularfire2__["c" /* AuthMethods */].Popup
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__Services_authenticate_service__["a" /* AuthenticateService */], __WEBPACK_IMPORTED_MODULE_6__Services_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_16__Services_loader_service__["a" /* LoaderService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/app.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/environment.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/polyfills.js.map

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = ".text-center{\r\n    text-align: center;\r\n}\r\n\r\n.row{\r\n  margin:0;\r\n  padding:0;\r\n}\r\nbody{\r\n  font-family:arial,sans-serif;\r\n  font-size:100%;\r\n  margin:1em;\r\n  background:#666;\r\n  color:#fff;\r\n}\r\nh2,p{\r\n  font-size:100%;\r\n  font-weight:normal;\r\n}\r\nul,li{\r\n  list-style:none;\r\n}\r\nul{\r\n  overflow:hidden;\r\n  padding:3em;\r\n}\r\nul li a{\r\n  text-decoration:none;\r\n  color:#000;\r\n  background:#ffc;\r\n  display:block;\r\n  height:10em;\r\n  width:10em;\r\n  padding:1em;\r\n  box-shadow: 5px 5px 7px rgba(33,33,33,.7);\r\n  -moz-transition:-moz-transform .15s linear;\r\n  -o-transition:-o-transform .15s linear;\r\n  -webkit-transition:-webkit-transform .15s linear;\r\n}\r\nul li{\r\n  margin:1em;\r\n  float:left;\r\n}\r\nul li h2{\r\n  font-size:140%;\r\n  font-weight:bold;\r\n  padding-bottom:10px;\r\n}\r\nul li p{\r\n  font-family:\"Reenie Beanie\",arial,sans-serif;\r\n  font-size:180%;\r\n}\r\nul li a{\r\n  -webkit-transform: rotate(-6deg);\r\n  -o-transform: rotate(-6deg);\r\n  -moz-transform:rotate(-6deg);\r\n}\r\nul li:nth-child(even) a{\r\n  -o-transform:rotate(4deg);\r\n  -webkit-transform:rotate(4deg);\r\n  -moz-transform:rotate(4deg);\r\n  position:relative;\r\n  top:5px;\r\n  background:#cfc;\r\n}\r\nul li:nth-child(3n) a{\r\n  -o-transform:rotate(-3deg);\r\n  -webkit-transform:rotate(-3deg);\r\n  -moz-transform:rotate(-3deg);\r\n  position:relative;\r\n  top:-5px;\r\n  background:#ccf;\r\n}\r\nul li:nth-child(5n) a{\r\n  -o-transform:rotate(5deg);\r\n  -webkit-transform:rotate(5deg);\r\n  -moz-transform:rotate(5deg);\r\n  position:relative;\r\n  top:-10px;\r\n}\r\nul li a:hover,ul li a:focus{\r\n  box-shadow:10px 10px 7px rgba(0,0,0,.7);\r\n  -moz-box-shadow:10px 10px 7px rgba(0,0,0,.7);\r\n  -webkit-box-shadow: 10px 10px 7px rgba(0,0,0,.7);\r\n  -webkit-transform: scale(1.25);\r\n  -moz-transform: scale(1.25);\r\n  -o-transform: scale(1.25);\r\n  position:relative;\r\n  z-index:5;\r\n}\r\nol{text-align:center;}\r\nol li{display:inline;padding-right:1em;}\r\nol li a{color:#fff;}"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ".loading {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: rgba(0,0,0,.5);\r\n}\r\n.loading-wheel {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-top: -40px;\r\n    margin-left: -40px;\r\n    \r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    \r\n    border-width: 30px;\r\n    border-radius: 50%;\r\n    -webkit-animation: spin 1s linear infinite;\r\n}\r\n.style-2 .loading-wheel {\r\n    border-style: double;\r\n    border-color: #ccc transparent;\r\n}\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(-360deg);\r\n    }\r\n}"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = ".login-container {\r\n    padding: 30px;\r\n    /*max-width: 350px;\r\n    width: 100% !important;*/\r\n    background-color: #F7F7F7;\r\n    margin: 0 auto;\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    overflow: hidden;\r\n    font-family: roboto;\r\n}\r\n\r\n.login-container h2{\r\n    text-align: center;\r\n}\r\n\r\n.MarginTop10{\r\n    margin-top: 10%;\r\n}\r\n\r\n.loginBtn {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n\r\n        /* border: 1px solid #3079ed; */\r\n    border: 0px;\r\n    color: #fff;\r\n    text-shadow: 0 1px rgba(0,0,0,0.1);\r\n    background-color: #4d90fe;\r\n    padding: 17px 0px;\r\n    font-family: roboto;\r\n    font-size: 14px;\r\n    /* background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#4d90fe), to(#4787ed)); */\r\n}\r\n\r\n.loginTextField{\r\n    height: 44px;\r\n    font-size: 16px;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    -webkit-appearance: none;\r\n    background: #fff;\r\n    border: 1px solid #d9d9d9;\r\n    border-top: 1px solid #c0c0c0;\r\n    /* border-radius: 2px; */\r\n    padding: 0 8px;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = ".centered-form{\r\n\tmargin-top: 60px;\r\n}\r\n\r\n.centered-form .panel{\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tbox-shadow: rgba(0, 0, 0, 0.3) 20px 20px 20px;\r\n}"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = ".popUpTextField{\r\n    height: 44px;\r\n    font-size: 16px;\r\n    width: 97%;\r\n    margin-bottom: 10px;\r\n    -webkit-appearance: none;\r\n    background: #fff;\r\n    border: 1px solid #d9d9d9;\r\n    border-top: 1px solid #c0c0c0;\r\n    /* border-radius: 2px; */\r\n    padding: 0 8px;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    margin-left:10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.marginLeft10{\r\nmargin-left: 10px;\r\n}"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = ".MarginTop10{\r\n    margin-top: 4%;\r\n}"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = ".popUpTextField{\r\n    height: 44px;\r\n    font-size: 16px;\r\n    width: 97%;\r\n    margin-bottom: 10px;\r\n    -webkit-appearance: none;\r\n    background: #fff;\r\n    border: 1px solid #d9d9d9;\r\n    border-top: 1px solid #c0c0c0;\r\n    /* border-radius: 2px; */\r\n    padding: 0 8px;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    margin-left:10px;\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = ".pointer{\r\n cursor: pointer;\r\n}\r\n\r\n.profile-img{\r\n    /*width: 50px;\r\n    height: 50px;*/\r\n    width: 39px;\r\n    height: 39px;\r\n    border-radius: 50%;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n    margin-top: 6px;\r\n}"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = " <div class=\"col-md-12\">\r\n   <div class=\"col-md-5\"></div>\r\n   <div class=\"col-md-5\"></div>\r\n   <div class=\"col-md-2\">\r\n     <button class=\"btn btn-primary pull-right\" (click)=\"AddNote()\">Add Note</button>\r\n   </div>\r\n    \r\n  </div>\r\n\r\n<div clas=\"row\">\r\n \r\n  <div class=\"col-md-12\">\r\n     <div class=\"col-md-2\"></div>\r\n     <div class=\"col-md-8\">\r\n       <div [hidden]=\"isHidden\" class=\"well well-sm text-center\">\r\n         No Records Found\r\n       </div>\r\n       <ul [hidden]=\"!isHidden\">\r\n            <li *ngFor=\"let item of NoteList\">\r\n                <a (click)=\"UpdateNote(item)\" title=\"Click to Edit Note\">\r\n                    <h2>{{item.Name}}</h2>\r\n                    <p>\r\n                     {{item.Description}}\r\n                    </p>\r\n                </a>\r\n            </li>\r\n       </ul>\r\n     </div>\r\n     <div class=\"col-md-2\"></div>\r\n  </div>\r\n</div>\r\n\r\n<app-task-popup (removeDetail)=\"HandleRemoveNote($event)\" (saveDetail)=\"handleSaveNote($event)\"></app-task-popup>"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!showLoader\" class=\"loading style-2\">\r\n  <div class=\"loading-wheel\"></div>\r\n</div>"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row col-md-12 MarginTop10\">\r\n  <div class=\"col-md-4\"></div>\r\n<div class=\"col-md-4 login-container\">\r\n  <h2>Login to Your Account</h2> <br/>\r\n <form class=\"form-horizontal\" (ngSubmit)=\"Login(loginForm.value)\" #loginForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"loginTextField\" required [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n     <input type=\"password\" class=\"loginTextField\" required [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">   \r\n    <span [hidden]=\"!showError\" style=\"color: red;\">Wrong username or password</span>\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n      <input type=\"submit\" class=\"loginBtn btn-primary\"  value=\"Login\" />\r\n      <!--<div class=\"col-lg-10 col-lg-offset-2\">        \r\n        \r\n      </div>-->\r\n    </div>\r\n  \r\n</form>\r\n<div class=\"pull-right\">\r\n  <a  routerLink=\"/Register\">Create New Account?</a>\r\n</div>\r\n</div>\r\n<div class=\"col-md-4\"></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <div class=\"row centered-form\">\r\n        <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\r\n        \t<div class=\"panel panel-default\">\r\n        \t\t<div class=\"panel-heading\">\r\n\t\t\t    \t\t<h3 class=\"panel-title\">Sign Up</h3>\r\n\t\t\t \t\t\t</div>\r\n\t\t\t \t\t\t<div class=\"panel-body\">\r\n\t\t\t    \t\t<form role=\"form\" (ngSubmit)=\"RegisterUser()\">\r\n\t\t\t    \t\t<div class=\"form-group\">\r\n\t\t\t                <input type=\"text\" name=\"first_name\" [(ngModel)]=\"userInfo.Name\" required class=\"form-control input-sm\" placeholder=\"Name\">\r\n\t\t\t    \t\t</div>\r\n\r\n\t\t\t    \t\t\t<div class=\"form-group\">\r\n\t\t\t    \t\t\t\t<input type=\"email\" name=\"email\" [(ngModel)]=\"userInfo.Email\" required class=\"form-control input-sm\" placeholder=\"Email Address\">\r\n\t\t\t    \t\t\t</div>\r\n\r\n\t\t\t    \t\t\t<div class=\"row\">\r\n\t\t\t    \t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n\t\t\t    \t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t    \t\t\t\t\t\t<input type=\"password\" name=\"password\" [(ngModel)]=\"userInfo.Password\" required class=\"form-control input-sm\" placeholder=\"Password\">\r\n\t\t\t    \t\t\t\t\t</div>\r\n\t\t\t    \t\t\t\t</div>\r\n\t\t\t    \t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n\t\t\t    \t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t    \t\t\t\t\t\t<input type=\"password\" name=\"ConfirmPassword\" [(ngModel)]=\"ConfirmPassword\" required class=\"form-control input-sm\" placeholder=\"Confirm Password\">\r\n\t\t\t    \t\t\t\t\t</div>\r\n\t\t\t    \t\t\t\t</div>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t\r\n\t\t\t    \t\t\t<input type=\"submit\" value=\"Register\" class=\"btn btn-info btn-block\">\r\n\t\t\t    \t\t\r\n\t\t\t    \t\t</form>\r\n              <br/>\r\n               <a class=\"btn btn-info btn-block btn-social btn-google my-button\" (click)=\"GmailAuthenticate()\">\r\n                <span class=\"fa fa-google\"></span> Sign in with Google\r\n              </a>\r\n\r\n\t\t\t    \t</div>             \r\n\t    \t\t</div>\r\n    \t\t</div>\r\n    \t</div>\r\n    </div>\r\n\r\n\t<app-set-password></app-set-password>"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<div id=\"setPasswordModal\" class=\"modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Set Password</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\">\r\n          <div class=\"form-group\">\r\n            <input type=\"password\" class=\"popUpTextField\" [(ngModel)]=\"password\" name='password' placeholder=\"password\">\r\n            <span [hidden]=\"!isHidden\" class=\"marginLeft10\" style=\"color: red;\">Enter Password</span>\r\n          </div>          \r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">        \r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveGoogleAuthUser()\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-md-12 MarginTop10\">\r\n<div class=\"col-md-3\"></div>\r\n<div class=\"col-md-6\">\r\n   <table class=\"table table-striped table-hover \">\r\n  <thead>\r\n    <tr>\r\n      <th>Account</th>\r\n      <th>Status</th>\r\n      <th>Action</th>      \r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>Gmail</td>\r\n      <td>Disable</td>\r\n      <td><button class=\"btn btn-primary\" (click)=\"GmailAuthenticate()\">Enable </button></td>      \r\n    </tr>\r\n    <tr>\r\n      <td>Outlook</td>\r\n      <td>Disable</td>\r\n      <td><button class=\"btn btn-primary\">Enable </button></td>      \r\n    </tr>\r\n  </tbody>\r\n</table> \r\n</div>\r\n<div class=\"col-md-3\"></div>\r\n</div>\r\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<div id=\"noteModal\" class=\"modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">{{headerText}} Note</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"popUpTextField\" [(ngModel)]=\"note.Name\" name='title' placeholder=\"Name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n          <input type=\"text\" class=\"popUpTextField\" [(ngModel)]=\"note.Description\" name=\"Description\" placeholder=\"Description\">   \r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isEdit\" (click)=\"RemoveNote()\">Delete</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveNote()\">Save Note</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-default\" [hidden]=\"!authService.isAuthenticate\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Menu</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">MyNotes</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n     \r\n      \r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n             <img class=\"profile-img\" src=\"{{imgUrl}}\" />\r\n        </li>\r\n        <li class=\"dropdown\">          \r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\" >\r\n            {{userName}}\r\n            <span class=\"caret\"></span>\r\n          </a>\r\n         \r\n          <ul class=\"dropdown-menu\" role=\"menu\">\r\n            <li><a  routerLink=\"/AccountSettings\">Configure Account</a></li>            \r\n            <li class=\"divider\"></li>            \r\n            <li class=\"pointer\"><a  (click)=\"LogOut()\">Log Out</a></li>\r\n          </ul>\r\n        </li>  \r\n        \r\n        \r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<router-outlet>\r\n\r\n</router-outlet>\r\n\r\n<app-loader></app-loader>"

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticateService = (function () {
    function AuthenticateService(af) {
        this.af = af;
        this.isAuthenticate = false;
        this._userAuthenticated = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.userInfo = this._userAuthenticated.asObservable();
    }
    AuthenticateService.prototype.userAuthenticated = function (userDetails) {
        this.user = userDetails;
        this.isAuthenticate = true;
        this._userAuthenticated.next(this.user);
    };
    AuthenticateService.prototype.Login = function (email, password) {
        return this.af.database.list('UserInfo', {
            query: {
                orderByChild: 'Email',
                equalTo: email
            }
        });
    };
    AuthenticateService.prototype.RegisterUser = function (userInfo) {
        var list = this.af.database.list('UserInfo');
        var keyId = list.push(userInfo).key;
        if (keyId != "") {
            userInfo.$key = keyId;
            this.userAuthenticated(userInfo);
            return true;
        }
        return false;
    };
    AuthenticateService.prototype.LogOut = function () {
        // this.user = {
        //        Name: "",
        //        Email: "",
        //        PhotoUrl:"",
        //        AuthUserID: "",
        //        Password:"",
        //        GmailEnabled:false,
        //        OutLookEnabled:false
        //        };
        this.isAuthenticate = false;
        //this._userAuthenticated.next(this.user);
    };
    AuthenticateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], AuthenticateService);
    return AuthenticateService;
    var _a;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/authenticate.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = (function () {
    function LoaderService() {
        this.LoaderObserver = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.StartLoader = this.LoaderObserver.asObservable();
    }
    LoaderService.prototype.showLoader = function () {
        this.LoaderObserver.next(true);
    };
    LoaderService.prototype.hideLoader = function () {
        this.LoaderObserver.next(false);
    };
    LoaderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LoaderService);
    return LoaderService;
}());
//# sourceMappingURL=F:/Angular2 Dev/Feeds/src/loader.service.js.map

/***/ })

},[1022]);
//# sourceMappingURL=main.bundle.map