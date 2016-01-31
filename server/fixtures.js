if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/',
        category:'Tech',
        clicks:0,
        userId:"1sdsdc",
        user:"Test1",
        submitted:new Date()
    });
    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com',
        category:'Tech',
        clicks:0,
        userId:"1sddsgfc",
        user:"Test2",
        submitted:new Date((new Date()).getTime() - 1000*60*60*24*366)
    });
    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',
        category:'Tech',
        clicks:0,
        userId:"1sdsfc",
        user:"Test3",
        submitted:new Date((new Date()).getTime() - 1000*60*60*24*8)
    });
}