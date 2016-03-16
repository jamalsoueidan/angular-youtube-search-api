import angular from 'angular'
import searchController from './controllers/searchController';
import listController from './controllers/listController';
import playerController from './controllers/playerController';
import youtubeService from './services/youtubeService';
import youtubeFactory from './factories/youtubeFactory';

const myApp = angular.module("myApp", []);
myApp.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});
myApp.factory("youtubeFactory", youtubeFactory);
myApp.service("youtubeService", youtubeService);
myApp.controller("searchController", searchController);
myApp.controller("playerController", playerController);
myApp.controller("listController", listController);
