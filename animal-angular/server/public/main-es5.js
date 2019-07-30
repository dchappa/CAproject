(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/animal/animal.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/animal/animal.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>animal works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>{{ title }}!</h1>\n  <h3>Pick an animal to see it's description!</h3>\n  <select [(ngModel)]=\"selectedAnimal\">\n      <option *ngFor=\"let animal of animals\" [ngValue]=\"animal\">\n        {{animal.name}}\n      </option>\n  </select>\n  <p *ngIf=\"selectedAnimal\">The {{selectedAnimal.name}} is colored {{selectedAnimal.color}}, is sized {{selectedAnimal.size}}, and was born on {{selectedAnimal.dob}}</p>\n\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Enter an animal here!</h2>\n      <form [formGroup]=\"animalForm\"\n          (ngSubmit)=\"addAnimal(animalForm.value)\"\n          class=\"ui form\" >\n          <div class=\"field\">\n            <label for=\"aniInput\">Animal Name</label>\n            <input type=\"text\" id=\"aniInput\"\n           placeholder=\"Animal Name\"\n           formControlName=\"animalName\">\n           <input type=\"submit\" class=\"ui button\" value=\"{{addBtn}}\" formControlName=\"addButton\">\n           <select formControlName=\"animalColor\">\n             <option *ngFor=\"let color of colors\" [ngValue]=\"color\">{{color}}\n          </select>\n          <select formControlName=\"animalSize\">\n            <option *ngFor=\"let size of sizes\" [ngValue]=\"size\">{{size}}\n          </select>\n          <input type=\"date\" formControlName=\"animalDOB\">\n         </div>\n       </form>\n\n       <table style=\"text-align:center\" align=\"center\">\n           <th>Name</th>\n           <th>Color</th>\n           <th>Size</th>\n           <th>DOB</th>\n           <tr *ngFor=\"let animal of animals\">\n             <td>{{animal.name}}</td>\n             <td>{{animal.color}}</td>\n             <td>{{animal.size}}</td>\n             <td>{{animal.dob}}</td>\n             <td>\n               <input type=\"button\" *ngIf=!animal.display class=\"ui button\" value={{editBtn}} (click)=\"onClickOpenForm(animal._id)\">\n               <form id={{animal._id}} *ngIf=animal.display [formGroup]=\"editForm\"\n                   (ngSubmit)=\"editAnimal(animal, editForm.value)\"\n                   class=\"ui form\">\n                   <div class=\"field\">\n                     <label for=\"editInput\">Animal Name</label>\n                     <input type=\"text\" id=\"editInput\"\n                    placeholder=\"Animal Name\"\n                    formControlName=\"editName\">\n                    <select formControlName=\"editColor\">\n                      <option value=\"\">\n                      <option value=\"Red\">Red\n                      <option value=\"Blue\">Blue\n                      <option value=\"Green\">Green\n                      <option value=\"Brown\">Brown\n                   </select>\n                   <select formControlName=\"editSize\">\n                     <option value=\"\">\n                     <option value=\"Small\">Small\n                     <option value=\"Medium\">Medium\n                     <option value=\"Large\">Large\n                     <option value=\"Super-Sized\">Super-Sized\n                   </select>\n                   <input type=\"date\" formControlName=\"editDOB\">\n                  </div>\n                  <input type=\"button\" class=\"ui button\" value={{cancelBtn}} (click)=\"onClickCloseForm(animal._id)\">\n                  <input type=\"submit\" class=\"ui button\" value=\"{{confirmBtn}}\">\n                </form>\n            </td>\n            <td>\n              <input type=\"button\" class=\"ui button\" value={{delBtn}} (click)=\"deleteAnimal(animal)\">\n           </td>\n         </tr>\n      </table>\n  </div>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/animal.service.ts":
/*!***********************************!*\
  !*** ./src/app/animal.service.ts ***!
  \***********************************/
/*! exports provided: AnimalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalService", function() { return AnimalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AnimalService = /** @class */ (function () {
    function AnimalService(http) {
        this.http = http;
    }
    AnimalService.prototype.getAnimals = function () {
        return this.http.get('http://localhost:3000/animals')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new Error(e)); }));
    };
    AnimalService.prototype.addAnimal = function (animal) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        return this.http.post('http://localhost:3000/animals', animal, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new Error(e)); }));
    };
    AnimalService.prototype.deleteAnimal = function (animalID) {
        console.log(animalID);
        return this.http.delete('http://localhost:3000/animals/' + animalID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new Error(e)); }));
    };
    AnimalService.prototype.editAnimal = function (animal, animalID) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        console.log(animalID);
        console.log(animal);
        return this.http.put('http://localhost:3000/animals/' + animal._id, animalID, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new Error(e)); }));
    };
    AnimalService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    AnimalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AnimalService);
    return AnimalService;
}());



/***/ }),

/***/ "./src/app/animal/animal.component.css":
/*!*********************************************!*\
  !*** ./src/app/animal/animal.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hbC9hbmltYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/animal/animal.component.ts":
/*!********************************************!*\
  !*** ./src/app/animal/animal.component.ts ***!
  \********************************************/
/*! exports provided: AnimalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalComponent", function() { return AnimalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animal.service */ "./src/app/animal.service.ts");



var AnimalComponent = /** @class */ (function () {
    function AnimalComponent(animalService) {
        this.animalService = animalService;
    }
    AnimalComponent.prototype.getAnimals = function () {
        console.log(this.animalService.getAnimals().subscribe(function (result) { console.log(result); result; }));
    };
    AnimalComponent.prototype.ngOnInit = function () {
        this.getAnimals();
    };
    AnimalComponent.ctorParameters = function () { return [
        { type: _animal_service__WEBPACK_IMPORTED_MODULE_2__["AnimalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AnimalComponent.prototype, "animals", void 0);
    AnimalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animal',
            template: __webpack_require__(/*! raw-loader!./animal.component.html */ "./node_modules/raw-loader/index.js!./src/app/animal/animal.component.html"),
            styles: [__webpack_require__(/*! ./animal.component.css */ "./src/app/animal/animal.component.css")]
        })
    ], AnimalComponent);
    return AnimalComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _animal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animal.service */ "./src/app/animal.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(aniService, formBuilder) {
        var _this = this;
        this.aniService = aniService;
        this.formBuilder = formBuilder;
        this.title = 'All about animals';
        this.addBtn = "Add Animal";
        this.editBtn = "Edit";
        this.delBtn = "Delete";
        this.confirmBtn = "Confirm";
        this.cancelBtn = "Cancel";
        this.aniService.getAnimals().subscribe(function (result) { _this.animals = result; });
        this.openEdit = false;
        this.animalForm = this.formBuilder.group({
            animalName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            addButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            animalColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            animalSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            animalDOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.editForm = this.formBuilder.group({
            editName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            editColor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            editSize: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            editDOB: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
        });
        this.colors = ['Red', 'Blue', 'Green', 'Yellow'];
        this.sizes = ['Small', 'Medium', 'Large', 'Super-sized'];
    }
    AppComponent.prototype.ngOnInit = function () {
        //   this.aniService.getAnimals().subscribe(result => {this.animals = result;
        //     this.editForm = this.formBuilder.group({
        //     animalDetails: this.formBuilder.array([
        //       this.animals.map(x => this.formBuilder.group({
        //         editName: [x.animalName, [Validators.required, Validators.minLength(2)]],
        //         editColor: [x.animalColor, [Validators.required, Validators.minLength(2)]],
        //         editSize: [x.animalSize, [Validators.required, Validators.minLength(2)]],
        //         editDOB: [x.animalDOB, [Validators.required, Validators.minLength(2)]],
        //         confirmButton: new FormControl(''),
        //       }))
        //     ])
        //   })
        // });
    };
    AppComponent.prototype.getControls = function () {
        return this.editForm.get('animalDetails');
    };
    AppComponent.prototype.addAnimal = function (animalData) {
        var _this = this;
        var animal = JSON.stringify({ color: animalData.animalColor, dob: animalData.animalDOB, name: animalData.animalName, size: animalData.animalSize });
        this.aniService.addAnimal(animal).subscribe(function (response) {
            _this.animals.push(response);
            _this.animals[_this.animals.length - 1].display = false;
            console.log(_this.animals[_this.animals.length - 1]);
        }, function (err) { return console.log(err); });
    };
    AppComponent.prototype.deleteAnimal = function (animalData) {
        var _this = this;
        this.aniService.deleteAnimal(animalData._id).subscribe(function (response) { _this.delFromArray(animalData); }, function (err) { return console.log(err); });
    };
    AppComponent.prototype.editAnimal = function (animal, animalData) {
        var _this = this;
        console.log(animal);
        console.log(animalData);
        var newAnimal = JSON.stringify({ color: animalData.editColor, dob: animalData.editDOB, name: animalData.editName, size: animalData.editSize });
        this.aniService.editAnimal(animal, newAnimal).subscribe(function (response) { return _this.editFromArray(animal, newAnimal); }, function (err) { return console.log(err); });
    };
    AppComponent.prototype.editFromArray = function (animal, newAnimal) {
        var parsed = JSON.parse(newAnimal);
        for (var currAnimal in this.animals) {
            if (this.animals[parseInt(currAnimal)]._id == animal._id) {
                this.animals[parseInt(currAnimal)].color = parsed.color;
                this.animals[parseInt(currAnimal)].dob = parsed.dob;
                this.animals[parseInt(currAnimal)].name = parsed.name;
                this.animals[parseInt(currAnimal)].size = parsed.size;
                this.animals[parseInt(currAnimal)].display = false;
            }
        }
    };
    AppComponent.prototype.delFromArray = function (animalData) {
        for (var animal in this.animals) {
            if (this.animals[parseInt(animal)]._id == animalData._id) {
                this.animals.splice(parseInt(animal), 1);
            }
        }
    };
    AppComponent.prototype.onClickOpenForm = function (id) {
        console.log(id);
        for (var currAnimal in this.animals) {
            if (this.animals[parseInt(currAnimal)]._id == id) {
                this.animals[parseInt(currAnimal)].display = true;
            }
        }
    };
    AppComponent.prototype.onClickCloseForm = function (id) {
        for (var currAnimal in this.animals) {
            if (this.animals[parseInt(currAnimal)]._id == id) {
                this.animals[parseInt(currAnimal)].display = false;
            }
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _animal_service__WEBPACK_IMPORTED_MODULE_3__["AnimalService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _animal_animal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animal/animal.component */ "./src/app/animal/animal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _animal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animal.service */ "./src/app/animal.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _animal_animal_component__WEBPACK_IMPORTED_MODULE_5__["AnimalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [_animal_service__WEBPACK_IMPORTED_MODULE_8__["AnimalService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dinakarchappa/Documents/CAproject/animal-angular/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map