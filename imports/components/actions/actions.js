import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './actions.html';



class actionsCtrl {
  pauseVids() {
    video1.pause();
    video2.pause();
    video3.pause();
  }
  pauseAudio() {
    song.pause();
  }
}

export default angular.module('actions', [
  angularMeteor
])
  .component('actions', {
    templateUrl: 'imports/components/actions/actions.html',
    controller: ['$scope', actionsCtrl]

      });
