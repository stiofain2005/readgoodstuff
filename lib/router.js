/**
 * Created by stephencampbell on 31/12/2015.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name:'postList'});
Router.route('/myposts', {name:'ownPostsList'});
Router.route('/about', {name:'about'});
Router.route('posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id); }
});

Router.route('posts/:_id/edit', {
    name:'postEdit',
    data: function() { return Posts.findOne(this.params._id);}
});

Router.route('/submit', { name: 'postSubmit' });

var requireLogin = function() {
    if(! Meteor.user()) {
        if(Meteor.loggingIn()){
            this.render(this.loadingTemplate);
        }
        else {
            this.render('accessDenied');
        }
    }
    else {
        this.next();
    }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only:'postSubmit'});