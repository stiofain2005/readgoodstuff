Posts = new Mongo.Collection('posts');



Posts.allow({
    update: function(userId, post) {
        return ownsDocument(userId, post);
    },
    remove: function(userId, post) {
        return ownsDocument(userId, post);
    }
});

Posts.deny({
    update: function (userId, post, fieldNames) {
        return (_.without(fieldNames,'url','title','category').length > 0);
    }
});

Meteor.methods({
    // function takes post as an argument
    postInsert: function(postAttributes){

        // this is using the audit-arguments-checks package which ensures that all
        // methods check their arguments
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            url:String,
            category:String
        });

        var postWithSameLink = Posts.findOne({url: postAttributes.url});
        if (postWithSameLink) {
            return {
                postExists:true,
                _id:postWithSameLink._id
            }
        }

        var user = Meteor.user();
        // this is underscore library
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });

        var postId = Posts.insert(post);

        return {
            _id: postId
        };
    }
});