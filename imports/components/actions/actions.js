import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './actions.html';


 
class actionsCtrl {

}
 
export default angular.module('actions', [
  angularMeteor
])
  .component('actions', {
    templateUrl: 'imports/components/actions/actions.html',
    controller: ['$scope', actionsCtrl]

      });