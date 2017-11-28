import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './music.html';

 
class musicCtrl {
  tunein(){
  	Meteor.call("timeofsong",function(error,result){
  	song.currentTime = result;
  	song.play();
  	});
  }
}
 
export default angular.module('music', [
  angularMeteor
])
  .component('music', {
    templateUrl: 'imports/components/music/music.html',
    controller: ['$scope', musicCtrl]
  });