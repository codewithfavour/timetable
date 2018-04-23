webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speaker_list_speaker_list__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* SchedulePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/tabs-page/tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference" >\n  <ion-tab [root]="tab1Root" tabTitle="Schedule" tabIcon="calendar" tabUrlPath="conference-schedule"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Classes" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/tabs-page/tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_detail_session_detail__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_filter_schedule_filter__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';





var SchedulePage = (function () {
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, confData, user, socialSharing) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.user = user;
        this.socialSharing = socialSharing;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Schedule');
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        this.scheduleList && this.scheduleList.closeSlidingItems();
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.updateSchedule();
            }
        });
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: sessionData.id, name: sessionData.name });
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.user.hasFavorite(sessionData.name)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
        }
        else {
            // remember this session as a user favorite
            this.user.addFavorite(sessionData.name);
            // create an alert instance
            var alert_1 = this.alertCtrl.create({
                title: 'Favorite Added',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert_1.present();
        }
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Would you like to remove this session from your favorites?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.user.removeFavorite(sessionData.name);
                        _this.updateSchedule();
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        if ("" + network == "Whatsapp") {
            this.socialSharing.shareViaWhatsApp("Check out the Favcode54 TimeTable App", "", "https://favcode54.org/timetable").then(function () {
                // Success!
            }).catch(function () {
                // Error!
            });
        }
        if ("" + network == "Facebook") {
            this.socialSharing.shareViaFacebook("Check out the Favcode54 TimeTable App", "", "https://favcode54.org/timetable").then(function () {
                // Success!
            }).catch(function () {
                // Error!
            });
        }
        if ("" + network == "Instagram") {
            this.socialSharing.shareViaInstagram("Check out the Favcode54 TimeTable App @ https://favcode54.org/timetable", "assets/img/appicon.png").then(function () {
                // Success!
            }).catch(function () {
                // Error!
            });
        }
        if ("" + network == "Twitter") {
            this.socialSharing.shareViaTwitter("Check out the Favcode54 TimeTable App", "", "https://favcode54.org/timetable").then(function () {
                // Success!
            }).catch(function () {
                // Error!
            });
        }
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    SchedulePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.updateSchedule();
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
            // simulate a network request that would take longer
            // than just pulling from out local json file
            setTimeout(function () {
                refresher.complete();
                var toast = _this.toastCtrl.create({
                    message: 'conference has been updated.',
                    duration: 3000
                });
                toast.present();
            }, 1000);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */])
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()">\n      <ion-segment-button value="all">\n        All\n      </ion-segment-button>\n      <ion-segment-button value="favorites">\n        Favorites\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="updateSchedule()"\n                   placeholder="Search">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list #scheduleList [hidden]="shownSessions === 0">\n\n    <ion-item-group *ngFor="let group of groups" [hidden]="group.hide">\n\n      <ion-item-divider sticky>\n        <ion-label>\n          {{group.time}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor="let session of group.sessions" #slidingItem [attr.track]="session.tracks[0] | lowercase" [hidden]="session.hide">\n\n        <button ion-item (click)="goToSessionDetail(session)">\n          <h3>{{session.name}}</h3>\n          <p>\n            {{session.timeStart}} &mdash;\n            {{session.timeEnd}}:\n            {{session.location}}\n          </p>\n        </button>\n\n        <ion-item-options>\n          <button ion-button color="favorite" (click)="addFavorite(slidingItem, session)" *ngIf="segment === \'all\'">\n            Favorite\n          </button>\n          <button ion-button color="danger" (click)="removeFavorite(slidingItem, session, \'Remove Favorite\')" *ngIf="segment === \'favorites\'">\n            Remove\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-item-group>\n\n  </ion-list>\n\n  <ion-list-header centre [hidden]="shownSessions > 0">\n      Loading conference\n  </ion-list-header>\n  <ion-spinner [hidden]="shownSessions > 0" >\n\n  </ion-spinner>\n\n  <ion-fab bottom right #fab>\n    <button ion-fab><ion-icon name="share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="whatsapp" (click)="openSocial(\'Whatsapp\', fab) "><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab color="instagram" (click)="openSocial(\'Instagram\', fab)"><ion-icon name="logo-instagram"></ion-icon></button>\n      <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* conferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionDetailPage = (function () {
    function SessionDetailPage(dataProvider, loadingCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
    }
    SessionDetailPage.prototype.openSocial = function (network, fab) {
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    SessionDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data &&
                data.schedule &&
                data.schedule[0] &&
                data.schedule[0].groups) {
                for (var _i = 0, _a = data.schedule[0].groups; _i < _a.length; _i++) {
                    var group = _a[_i];
                    if (group && group.sessions) {
                        for (var _b = 0, _c = group.sessions; _b < _c.length; _b++) {
                            var session = _c[_b];
                            if (session && session.id === _this.navParams.data.sessionId) {
                                _this.session = session;
                                break;
                            }
                        }
                    }
                }
            }
        });
    };
    SessionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-session-detail',template:/*ion-inline-start:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/session-detail/session-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="session">{{session.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="session">\n    <h1>{{session.name}}</h1>\n    <h4 *ngFor="let speaker of session?.speakers">\n    {{speaker.name}}\n  </h4>\n    <p>\n      {{session.timeStart}} - {{session.timeEnd}}\n    </p>\n    <p>{{session.location}}</p>\n    <p>{{session.description}}</p>\n  </div>\n  <ion-fab bottom right #fab>\n    <button ion-fab><ion-icon name="share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="whatsapp" (click)="openSocial(\'Whatsapp\', fab)"><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab color="instagram" (click)="openSocial(\'Instagram\', fab)"><ion-icon name="logo-instagram"></ion-icon></button>\n      <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/session-detail/session-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* conferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SessionDetailPage);
    return SessionDetailPage;
}());

//# sourceMappingURL=session-detail.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var SpeakerListPage = (function () {
    function SpeakerListPage(actionSheetCtrl, navCtrl, confData, config, inAppBrowser) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.speakers = [];
    }
    SpeakerListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getSpeakers().subscribe(function (speakers) {
            _this.speakers = speakers;
        });
    };
    SpeakerListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: session.id });
    };
    SpeakerListPage.prototype.goToSpeakerDetail = function (speaker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], { speakerId: speaker.id });
    };
    SpeakerListPage.prototype.goToSpeakerTwitter = function (speaker) {
        this.inAppBrowser.create("https://twitter.com/" + speaker.twitter, '_blank');
    };
    SpeakerListPage.prototype.openSpeakerShare = function (speaker) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share ' + speaker.name,
            buttons: [
                {
                    text: 'Copy Link',
                    handler: function () {
                        console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                        if (window['cordova'] && window['cordova'].plugins.clipboard) {
                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                        }
                    }
                },
                {
                    text: 'Share via ...'
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage.prototype.openContact = function (speaker) {
        var mode = this.config.get('mode');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact ' + speaker.name,
            buttons: [
                {
                    text: "WebPage: " + speaker.email,
                    icon: mode !== 'ios' ? 'mail' : null,
                    handler: function () {
                        window.open(speaker.email);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-list',template:/*ion-inline-start:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/speaker-list/speaker-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Classes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content speaker-list">\n  <ion-list [virtualScroll]="speakers">\n    <ion-grid>\n      <ion-row >\n        <ion-col col-12 col-lg-6 *virtualItem="let speaker">\n\n          <ion-card class="speaker-card">\n            <ion-card-header>\n              <button ion-item detail-none (click)="goToSpeakerDetail(speaker)">\n                <ion-avatar item-start>\n                  <img [src]="speaker.profilePic" alt="Speaker profile pic">\n                </ion-avatar>\n                {{speaker.name}}\n              </button>\n            </ion-card-header>\n\n            <ion-card-content class="outer-content">\n              <ion-list>\n                <button ion-item *ngFor="let session of speaker.sessions" (click)="goToSessionDetail(session)">\n                  <h3>{{session.name}}</h3>\n                </button>\n\n                <button ion-item (click)="goToSpeakerDetail(speaker)">\n                  <h3>About {{speaker.name}}</h3>\n                </button>\n              </ion-list>\n            </ion-card-content>\n\n            <ion-row no-padding>\n              <ion-col col-12 col-lg-auto text-center text-lg-left>\n                <button ion-button clear small color="primary" icon-start (click)="goToSpeakerTwitter(speaker)">\n                  <ion-icon name="logo-twitter"></ion-icon>\n                  Tweet\n                </button>\n              </ion-col>\n              <ion-col col-12 col-lg-auto text-center>\n                <button ion-button clear small color="primary" icon-start (click)="openSpeakerShare(speaker)">\n                  <ion-icon name=\'share-alt\'></ion-icon>\n                  Share\n                </button>\n              </ion-col>\n              <ion-col col-12 col-lg-auto text-center text-lg-right>\n                <button ion-button clear small color="primary" icon-start (click)="openContact(speaker)">\n                  <ion-icon name=\'chatboxes\'></ion-icon>\n                  Contact\n                </button>\n              </ion-col>\n            </ion-row>\n\n          </ion-card>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/speaker-list/speaker-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* conferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], SpeakerListPage);
    return SpeakerListPage;
}());

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="about-header">\n    <img src="assets/img/ionic-logo-white.png" alt="ionic logo">\n  </div>\n  <div padding class="about-info">\n    <h4>Favcode54 Time Table</h4>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY" max="2056" [(ngModel)]="conferenceDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pin" item-start></ion-icon>\n        <ion-label>Location</ion-label>\n        <ion-select>\n          <ion-option value="madison" selected>Madison, WI</ion-option>\n          <ion-option value="austin">Austin, TX</ion-option>\n          <ion-option value="chicago">Chicago, IL</ion-option>\n          <ion-option value="seattle">Seattle, WA</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <p>\n      The Favcode54 Time Table App helps to keep you, upto date with Favcode54 Cources and Dates.\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2/getting-started')\">Learn Ionic</button>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2')\">Documentation</button>\n      <button ion-item (click)=\"close('http://showcase.ionicframework.com')\">Showcase</button>\n      <button ion-item (click)=\"close('https://github.com/ionic-team/ionic')\">GitHub Repo</button>\n      <button ion-item (click)=\"support()\">Support</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = (function () {
    function ScheduleFilterPage(confData, navParams, viewCtrl) {
        var _this = this;
        this.confData = confData;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = this.navParams.data;
        this.confData.getTracks().subscribe(function (trackNames) {
            trackNames.forEach(function (trackName) {
                _this.tracks.push({
                    name: trackName,
                    isChecked: (excludedTrackNames.indexOf(trackName) === -1)
                });
            });
        });
    }
    ScheduleFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    ScheduleFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule-filter',template:/*ion-inline-start:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/schedule-filter/schedule-filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cancel</button>\n    </ion-buttons>\n\n    <ion-title>\n      Filter Sessions\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>Tracks</ion-list-header>\n\n    <ion-item *ngFor="let track of tracks" [attr.track]="track.name | lowercase">\n      <span item-start class="dot"></span>\n      <ion-label>{{track.name}}</ion-label>\n      <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n      Reset All Filters\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/schedule-filter/schedule-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* conferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());

//# sourceMappingURL=schedule-filter.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpeakerDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data && data.speakers) {
                for (var _i = 0, _a = data.speakers; _i < _a.length; _i++) {
                    var speaker = _a[_i];
                    if (speaker && speaker.id === _this.navParams.data.speakerId) {
                        _this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    };
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push('SessionDetailPage', { sessionId: session.id });
    };
    SpeakerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-detail',template:/*ion-inline-start:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/speaker-detail/speaker-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{speaker?.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="speaker-detail">\n  <div text-center *ngIf="speaker">\n    <img [src]="speaker.profilePic" [alt]="speaker.name"><br>\n\n    <button ion-button icon-only clear small color="twitter">\n      <ion-icon name="logo-twitter"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="github">\n      <ion-icon name="logo-github"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="instagram">\n      <ion-icon name="logo-instagram"></ion-icon>\n    </button>\n  </div>\n\n  <p>{{speaker?.about}}</p>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/speaker-detail/speaker-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* conferenceData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SpeakerDetailPage);
    return SpeakerDetailPage;
}());

//# sourceMappingURL=speaker-detail.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide >\n      <img src="assets/img/appicon.png" class="slide-image"/>\n      <h1 class="slide-title">\n        Welcome to Favcode54 conferences\n      </h1>\n      <p class="p">\n        Access Up-to date conferences for Favcode54 Classes\'  </p>\n    </ion-slide>\n\n    <ion-slide class="body">\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n      <h1 class="slide-title">Ready?</h1>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Downloads/ionic-conference-app-master 2/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_popover_about_popover__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_schedule_schedule__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_schedule_filter_schedule_filter__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_session_detail_session_detail__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_speaker_detail_speaker_detail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_speaker_list_speaker_list__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_page_tabs_page__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_conference_data__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_data__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* conferenceApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial__["a" /* TutorialPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* conferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_schedule_schedule__["a" /* SchedulePage */], name: 'Schedule', segment: 'schedule' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_session_detail_session_detail__["a" /* SessionDetailPage */], name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], name: 'ScheduleFilter', segment: 'scheduleFilter' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], name: 'SpeakerList', segment: 'speakerList' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
                        { component: __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* conferenceApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial__["a" /* TutorialPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_conference_data__["a" /* conferenceData */],
                __WEBPACK_IMPORTED_MODULE_18__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return conferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_page_tabs_page__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tutorial_tutorial__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_speaker_list_speaker_list__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_conference_data__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_data__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var conferenceApp = (function () {
    function conferenceApp(events, userData, menu, platform, confData, storage) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Schedule', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_3__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_5__pages_schedule_schedule__["a" /* SchedulePage */], index: 0, icon: 'calendar' },
            { title: 'Courses', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_3__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], index: 1, icon: 'contacts' },
        ];
        this.loggedInPages = [
            { title: 'Logout', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_3__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [];
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_tabs_page_tabs_page__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
    }
    conferenceApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
        }
    };
    conferenceApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    conferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    conferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    conferenceApp.prototype.platformReady = function () {
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
        });
    };
    conferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], conferenceApp.prototype, "nav", void 0);
    conferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mac/Downloads/ionic-conference-app-master 2/src/app/app.template.html"*/'<ion-card>\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-card>\n'/*ion-inline-end:"/Users/mac/Downloads/ionic-conference-app-master 2/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__providers_conference_data__["a" /* conferenceData */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], conferenceApp);
    return conferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return conferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var conferenceData = (function () {
    function conferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    conferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('./data.json')
                .map(this.processData, this);
        }
    };
    conferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    conferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    conferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    conferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    conferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    conferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    conferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], conferenceData);
    return conferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map