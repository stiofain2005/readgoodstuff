Template.postItem.helpers({

    // ownPost object returns if the current user is equal to the posts userID or if Mark or Steve
    ownPost:function(){
        return this.userId === Meteor.userId() || Meteor.user().username === "steve" || Meteor.user().username === "mark";
    },

    shortTitle:function(){
        if(this.title.length > 80) {
            var st = this.title.substr(0, 80);
            st = st + "...";
        }
        else{
            st = this.title;
        }
        return st;
    },



    // domain object returns the host name of the url
    domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
    }
});

Template.postItem.events({

    // if the link is clicked call method in post.js that updates the clicks
    'click a.tracked': function(e) {
        var href = $(e.currentTarget).attr('href');

        ga('send', 'event', 'outbound', 'click', href, {
            'transport': 'beacon'
        });

        var clickPost = Posts.findOne({url:href});
        Meteor.call('postUpdateClick', clickPost , function(error, result){
            if (error)
                return alert(error.reason);
        });

    }


});

