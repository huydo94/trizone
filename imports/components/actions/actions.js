import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './actions.html';


 
class actionsCtrl {
  chose(actionchose){
    this.action = actionchose;
    this.foodview = false;
    this.watchview = false;
    this.listenview = false;
    if(actionchose == 'Eat'){
    	this.foodview = true;
    } else if(actionchose == 'Watch'){
    	this.watchview = true;
    } else{
    	this.listenview = true;
    }
  }
  showFood(){
  	return this.foodview;
  }
  showWatch(){
  	return this.watchview;
  }
  showListen(){
  	return this.listenview;
  }
}
 
export default angular.module('actions', [
  angularMeteor
])
  .component('actions', {
    templateUrl: 'imports/components/actions/actions.html',
    controller: ['$scope', actionsCtrl]

      });