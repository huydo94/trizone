import { Meteor } from 'meteor/meteor';
import '../imports/api/fooditems.js';
import '../imports/api/messages.js';
import '../imports/api/pixels.js';
import {
    fooditems
} from '../imports/api/fooditems.js';
import { Email } from 'meteor/email'

var curtime = 0;
setInterval(function() {
    curtime += 1;
    if(curtime > 235){
      curtime = 0;
    }
}, 1000);

var curtimeVid1 = 0;
setInterval(function() {
    curtime += 1;
}, 1000);
var curtimeVid2 = 0;
setInterval(function() {
    curtime += 1;
}, 1000);
var curtimeVid3 = 0;
setInterval(function() {
    curtimeVid3 += 1;
}, 1000);

Meteor.methods({
  sendEmail(to, from, subject, text) {
    // Make sure that all arguments are strings.
    check([to, from, subject, text], [String]);
    // Let other method calls from the same client start running, without
    // waiting for the email sending to complete.
    this.unblock();
    Email.send({ to, from, subject, text });
  },
  'get3foods' (){
    return fooditems.aggregate({
                    $sample: {
                        size: 3
                    }
                });
  },
  timeofsong(){
  	console.log(curtime);
  	return curtime;
  }
});

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL = "smtps://postmaster%40sandbox02aa77513abf48d7b8145ec0b38dedb7.mailgun.org:822a485c348ee9e2933784658cbdafe5@smtp.mailgun.org:465";


});
