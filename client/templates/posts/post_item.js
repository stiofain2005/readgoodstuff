Template.postItem.helpers({
    // ownPost object returns if the current user is equal to the posts userID
    ownPost:function(){
        return this.userId === Meteor.userId() || Meteor.user().username === "steve" || Meteor.user().username === "mark";
    },

    // domain object returns the host name of the url
    domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
    }
});

Template.postItem.events({

    // set the category session variable to what category is chosen
    // Session variable is reactive so the postList will auto update

    'click a.tracked': function(e) {
        var href = $(e.currentTarget).attr('href');
        var clickPost = Posts.findOne({url:href});
        Meteor.call('postUpdate', clickPost , function(error, result){
            if (error)
                return alert(error.reason);
        });

    }

});