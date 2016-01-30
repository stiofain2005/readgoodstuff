/**
 * Created by stephencampbell on 09/01/2016.
 */

// set the initial default value of 'category' equal to blank
Session.setDefault('category', '');
Session.setDefault('skip',0);

Template.postList.helpers({
    // posts object finds all posts or the category that is selected
    posts:function(){
        if(Session.get('category') === ''){
            return Posts.find({}, {sort: {submitted:-1}}); //, limit:7, skip:Session.get('skip')});
        }
        else{
            return Posts.find({category:Session.get('category')}, {sort: {submitted:-1}});//, limit:7,
            // skip:Session.get('skip')});
        }

    }
});

Template.postList.events({

    // set the category session variable to what category is chosen
    // Session variable is reactive so the postList will auto update

    /*'click #navbar-right-arrow': function(e) {
        var skipTemp = Session.get('skip') ;
        Session.set('skip', skipTemp+7);
    },

    'click #navbar-left-arrow': function(e) {
        var skipTemp = Session.get('skip');
        if(skipTemp === 0) {
            skipTemp = 0;
        }
        else {
            skipTemp = skipTemp - 7;
        }

        Session.set('skip', skipTemp);
    }*/

});


