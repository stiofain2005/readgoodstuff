Posts = new Mongo.Collection('posts');



Posts.allow({
    // allow users to update if they are the user and it is a post and also if mark/steve
    update: function(userId, post) {
        return ownsDocument(userId, post);
    },
    // allow users to delete if they are the user and it is a post and also if mark/steve
    remove: function(userId, post) {
        return ownsDocument(userId, post);
    }
});

// stop people updating fields that they cant
Posts.deny({
    update: function (userId, post, fieldNames) {
        return (_.without(fieldNames,'url','title','category','publish').length > 0);
    }
});

Meteor.methods({
    // function takes post as an argument
    postInsert: function(postAttributes){
        // this is using the audit-arguments-checks package which ensures that all
        // methods check their arguments
        check(postAttributes, {
            title: String,
            url:String,
            category:String,
            clicks:Number,
            userId:String,
            user:String,
            publish:Boolean
        });

        // look up if the post is already published and exit method if so
        if(postAttributes.publish) {
            var postWithSameLink = Posts.findOne({url: postAttributes.url, publish:true});
            if (postWithSameLink && postWithSameLink.publish) {
                return {
                    postExists: true,
                    _id: postWithSameLink._id
                }
            }
        }
        // add date for post
        var post = _.extend(postAttributes, {
            submitted: new Date()
        });

        // insert the posts
        var postId = Posts.insert(post);

        return {
            _id: postId
        };
    },

    postUpdate:function(postAttributes){
        check(postAttributes, {
            title: String,
            url:String,
            category:String,
            publish:Boolean
        });

        // look up if the post is already published and exit method if so
        if(postAttributes.publish) {
            var postWithSameLink = Posts.findOne({url: postAttributes.url, publish:true});
            if (postWithSameLink && postWithSameLink.publish) {
                return {
                    postExists: true,
                    _id: postWithSameLink._id
                }
            }
        }

        // update the post with the attributes passed
        Posts.update(postAttributes,{$set: postAttributes});

    },

    // this method is for updating the clicks per post
    postUpdateClick:function(postAttributes){
        check(postAttributes, {
            _id:String,
            title: String,
            url:String,
            category:String,
            clicks:Number,
            userId:String,
            user:String,
            publish:Boolean,
            submitted:Date
        });

        var clickInc;
        if(postAttributes.clicks === undefined){
            clickInc = 1;
        }
        else {
            clickInc = postAttributes.clicks + 1;
        }

        Posts.update(postAttributes,{$set: {clicks:clickInc}});

    }
});