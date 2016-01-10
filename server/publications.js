/**
 * Created by stephencampbell on 30/12/2015.
 */

Meteor.publish('posts', function() {
    return Posts.find();
});