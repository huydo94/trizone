import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './watch.html';
import { Session } from 'meteor/session'

class watchCtrl {
  vid1() {
    $('#roompic').hide();
    Meteor.call('getVid1', function (error,result) {
      video1.src = result.src;
      video1.currentTime = result.time;
      video2.pause();
      video3.pause();
      Session.set('currentRoom',1);
    });
  }
  vid2() {
    $('#roompic').hide();
    Meteor.call('getVid2', function (error,result) {
      video2.src = result.src;
      video2.currentTime = result.time;
      video1.pause();
      video3.pause();
      Session.set('currentRoom',2);
    });
  }
  vid3() {
    $('#roompic').hide();
    Meteor.call('getVid3', function (error,result) {
      video3.src = result.src;
      video3.currentTime = result.time;
      video1.pause();
      video2.pause();
      Session.set('currentRoom',3);
    });
  }
}

$(function() {
  $('#video1').on('ended', function(){
    setTimeout(function() {
     Meteor.call('getVid1', function (error,result) {
      video1.src = result.src;
      video1.currentTime = result.time;
    });
  }, 1000);
  });
  $('#video2').on('ended', function(){
    setTimeout(function() {
      Meteor.call('getVid2', function (error,result) {
        video2.src = result.src;
        video2.currentTime = result.time;
      });
    }, 1000);

  });
  $('#video3').on('ended', function(){
    setTimeout(function() {
      Meteor.call('getVid3', function (error,result) {
        video3.src = result.src;
        video3.currentTime = result.time;
      });
    }, 1000);

  });
});

export default angular.module('watch', [
  angularMeteor
  ])
.component('watch', {
  templateUrl: 'imports/components/watch/watch.html',
  controller: ['$scope', watchCtrl]
});
