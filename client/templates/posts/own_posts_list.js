/**
 * Created by stephencampbell on 05/02/2016.
 */
Template.ownPostsList.helpers({
    // ownPost object returns if the current user is equal to the posts userID
    myPost:function(){
        //console.log(this.userId);
        //console.log(Meteor.userId());
        return this.userId === Meteor.userId();
    },

    posts:function(){
        return Posts.find({}, {sort: {submitted:-1}});
    }
});

