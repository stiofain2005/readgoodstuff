/**
 * Created by stephencampbell on 05/02/2016.
 */
Template.ownPostsList.helpers({
    // ownPost object returns if the current user is equal to the posts userID
    myPost:function(){
        return this.userId === Meteor.userId();
    },

    // return all posts
    posts:function(){
        return Posts.find({}, {sort: {submitted:-1}});
    }
});

