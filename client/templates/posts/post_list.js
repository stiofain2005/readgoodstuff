/**
 * Created by stephencampbell on 09/01/2016.
 */

// set the initial default value of 'category' equal to blank
Session.setDefault('category', '');
//Session.setDefault('skip',0);
Session.setDefault('sort','Latest');
Session.setDefault('filter',0);

Template.postList.helpers({
    posts:function(){
        if(Session.get('category') === ''){
            if(Session.get('sort') === 'Latest'){
                if(Session.get('filter')===0){
                    console.log("1Category " + Session.get('category'));
                    console.log("Sort " + Session.get('sort'));
                    console.log("Filter " + Session.get('filter'));
                    return Posts.find({publish:true}, {sort: {submitted:-1}});
                }
                else{
                    console.log("2Category " + Session.get('category'));
                    console.log("Sort " + Session.get('sort'));
                    console.log("Filter " + Session.get('filter'));
                    return Posts.find({publish:true, submitted : {$gte : new Date((new Date()).getTime() - Session.get('filter'))}}, {sort: {submitted:-1}});
                }

            }
            else{
                if(Session.get('filter')===0){
                    console.log("3Category " + Session.get('category'));
                    console.log("Sort " + Session.get('sort'));
                    console.log("Filter " + Session.get('filter'));
                    return Posts.find({publish:true}, {sort: {clicks:-1}});
                }
                else{
                    console.log("4Category " + Session.get('category'));
                    console.log("Sort " + Session.get('sort'));
                    console.log("Filter " + Session.get('filter'));
                    return Posts.find({publish:true, submitted : {$gte : new Date((new Date()).getTime() - Session.get('filter'))}}, {sort: {clicks:-1}});
                }
            }

             //, limit:7, skip:Session.get('skip')});
        }
        else{
            if(Session.get('sort') === 'Latest'){
                if(Session.get('filter')===0){
                    console.log("1Category " + Session.get('category'));
                    console.log("Sort " + Session.get('sort'));
                    console.log("Filter " + Session.get('filter'));
                    return Posts.find({publish:true, category:Session.get('category')}, {sort: {submitted:-1}});
                }
                else{
                    console.log("2Category " + Session.get('category'));
                    console.log("Sort " + Session.get('sort'));
                    console.log("Filter " + Session.get('filter'));
                    return Posts.find({publish:true, category:Session.get('category'), submitted : {$gte : new Date((new Date()).getTime() - Session.get('filter'))}}, {sort: {submitted:-1}});
                }

            }
            else{
                if(Session.get('filter')===0){
                    console.log("3Category " + Session.get('category'));
                    console.log("Sort " + Session.get('sort'));
                    console.log("Filter " + Session.get('filter'));
                    return Posts.find({publish:true, category:Session.get('category')}, {sort: {clicks:-1}});
                }
                else{
                    console.log("4Category " + Session.get('category'));
                    console.log("Sort " + Session.get('sort'));
                    console.log("Filter " + Session.get('filter'));
                    return Posts.find({publish:true, category:Session.get('category'), submitted : {$gte : new Date((new Date()).getTime() - Session.get('filter'))}}, {sort: {clicks:-1}});
                }
            }
            //return Posts.find({category:Session.get('category')}, {sort: {submitted:-1}});//, limit:7,
            // skip:Session.get('skip')});
        }

    },
    // posts object finds all posts or the category that is selected
});

Template.postList.events({

    'click #Hottest': function(e) {
        Session.set('sort', 'Hottest');
        console.log("Hottest set");
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


