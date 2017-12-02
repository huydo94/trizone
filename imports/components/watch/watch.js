import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './watch.html';

var vidSrc = ['Pikachu.mp4', 'RickMorty.mp4', 'Unicorn.mp4'];

class watchCtrl {

}

export default angular.module('watch', [
  angularMeteor
])
  .component('watch', {
    templateUrl: 'imports/components/watch/watch.html',
    controller: ['$scope', watchCtrl]
  });
