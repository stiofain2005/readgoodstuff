Template.postItem.helpers({

    // ownPost object returns if the current user is equal to the posts userID or if Mark or Steve
    ownPost:function(){
        return this.userId === Meteor.userId() || Meteor.user().username === "steve" || Meteor.user().username === "mark";
    },

    // domain object returns the host name of the url
    domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
    },

    colour:function(){
        if(this.category === 'Tech'){
            return '#ccd9ff';
        }
        else if(this.category === 'Business'){
            return '#f2e6d9'
        }
        else if(this.category === 'Health'){
            return '#ccffff'
        }
        else if(this.category === 'Culture'){
            return '#ffcccc'
        }
        else if(this.category === 'Sport'){
            return '#d9ffcc'
        }
        else if(this.category === 'Random'){
            return '#ffccf2'
        }
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