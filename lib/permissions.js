ownsDocument = function(userId, doc){
    // return if doc is truthy and post.userId is equal to current user id
    return doc && doc.userId === userId || Meteor.user().username === 'steve' || Meteor.user().username === 'mark';
}