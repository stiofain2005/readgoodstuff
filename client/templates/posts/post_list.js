/**
 * Created by stephencampbell on 09/01/2016.
 */

// set the initial default value of 'category' equal to blank
Session.setDefault('category', '');

Template.postList.helpers({
    // posts object finds all posts or the category that is selected
    posts:function(){
        if(Session.get('category') === ''){
            return Posts.find({}, {sort: {submitted:-1}});
        }
        else{
            return Posts.find({category:Session.get('category')}, {sort: {submitted:-1}});
        }

    }
});

