/**
 * Created by stephencampbell on 10/01/2016.
 */



Template.header.events({

    // set the category session variable to what category is chosen
    // Session variable is reactive so the postList will auto update

    'click #all': function(e) {
        Session.set('category', '');

    },

    'click #tech': function(e) {
        Session.set('category', 'Tech');

    },

    'click #business': function(e) {
        Session.set('category', 'Business');

    },

    'click #health': function(e) {
        Session.set('category', 'Health');

    },

    'click #culture': function(e) {
        Session.set('category', 'Culture');
    },

    'click #sport': function(e) {
        Session.set('category', 'Sport');

    },

    'click #random': function(e) {
        Session.set('category', 'Random');
    },

    'click #Hottest': function(e) {
        Session.set('sort', 'Hottest');
    },

    'click #Latest': function(e) {
        Session.set('sort', 'Latest');
    },

    'click #T': function(e) {
        var filterDate = 1000*60*60*24;
        Session.set('filter', filterDate);
    },

    'click #TW': function(e) {
        var filterDate = 1000*60*60*24*7;
        Session.set('filter', filterDate);
    },

    'click #TM': function(e) {
        var filterDate = 1000*60*60*24*31;
        Session.set('filter', filterDate);
    },

    'click #TY': function(e) {
        var filterDate = 1000*60*60*24*365;
        Session.set('filter', filterDate);
    },

    'click #AT': function(e) {
        var filterDate = 0;
        Session.set('filter', filterDate);
    }
});




