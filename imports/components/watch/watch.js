import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './watch.html';

class watchCtrl {
  vid1() {
    Meteor.call('getVid1', function (error,result) {
      console.log(result);
      video1.src = result.src;
      video1.currentTime = result.time;
      video2.pause();
      video3.pause();
    });
  }
  vid2() {
    Meteor.call('getVid2', function (error,result) {
      console.log(result);
      video2.src = result.src;
      video2.currentTime = result.time;
      video1.pause();
      video3.pause();
    });
  }
  vid3() {
    Meteor.call('getVid3', function (error,result) {
      console.log(result);
      video3.src = result.src;
      video3.currentTime = result.time;
      video1.pause();
      video2.pause();
    });
  }
}

$(function() {
  $('#video1').on('ended', function(){
      Meteor.call('getVid1', function (error,result) {
        console.log(result);
        video1.src = result.src;
        video1.currentTime = result.time;
      });
  });
  // $('#video2').on('ended', function(){
  //   Meteor.call('getVid2', function (error,result) {
  //     console.log(result);
  //     video2.src = result.src;
  //   });
  // });
  // $('#video3').on('ended', function(){
  //   Meteor.call('getVid3', function (error,result) {
  //     console.log(result);
  //     video3.src = result.src;
  //   });
  // });
});

export default angular.module('watch', [
  angularMeteor
])
  .component('watch', {
    templateUrl: 'imports/components/watch/watch.html',
    controller: ['$scope', watchCtrl]
  });
