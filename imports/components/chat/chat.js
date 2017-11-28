import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './chat.html';
import { messages } from '../../api/messages.js';

 
class chatCtrl {

  constructor($scope) {
    $scope.viewModel(this);
    
    this.helpers({
      messages() {
        return messages.find({});
      }
    })
  }

  addMsg(newMsg) {
    // Insert a task into the collection
    messages.insert({
      text:newMsg,
      user: Meteor.user().username,
      createdAt: new Date
    });
 
    // Clear form
    this.newMsg = '';
  }

}
 
export default angular.module('chat', [
  angularMeteor
])
  .component('chat', {
    templateUrl: 'imports/components/chat/chat.html',
    controller: ['$scope', chatCtrl]
  });