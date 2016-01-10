Template.postItem.helpers({
    // ownPost object returns if the current user is equal to the posts userID
    ownPost:function(){
        return this.userId === Meteor.userId();
    },

    // domain object returns the host name of the url
    domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
    }
});
