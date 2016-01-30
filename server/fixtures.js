if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/',
        category:'tech',
        clicks:0
    });
    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com',
        category:'tech',
        clicks:0
    });
    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',
        category:'tech',
        clicks:0
    });
}