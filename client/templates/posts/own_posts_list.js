/**
 * Created by stephencampbell on 05/02/2016.
 */
Template.ownPostsList.helpers({
    // ownPost object returns if the current user is equal to the posts userID
    myPost:function(){
        return this.userId === Meteor.userId();
    },

    posts:function(){
        if(Session.get('category') === ''){
            if(Session.get('sort') === 'Latest'){
                if(Session.get('filter')===0){
                    //console.log("1Category " + Session.get('category'));
                    //console.log("Sort " + Session.get('sort'));
                    //console.log("Filter " + Session.get('filter'));
                    return Posts.find({}, {sort: {submitted:-1}});
                }
                else{
                    //console.log("2Category " + Session.get('category'));
                    //console.log("Sort " + Session.get('sort'));
                    //console.log("Filter " + Session.get('filter'));
                    return Posts.find({submitted : {$gte : new Date((new Date()).getTime() - Session.get('filter'))}}, {sort: {submitted:-1}});
                }

            }
            else{
                if(Session.get('filter')===0){
                    //console.log("3Category " + Session.get('category'));
                    //console.log("Sort " + Session.get('sort'));
                    //console.log("Filter " + Session.get('filter'));
                    return Posts.find({}, {sort: {clicks:-1}});
                }
                else{
                    //console.log("4Category " + Session.get('category'));
                    //console.log("Sort " + Session.get('sort'));
                    //console.log("Filter " + Session.get('filter'));
                    return Posts.find({submitted : {$gte : new Date((new Date()).getTime() - Session.get('filter'))}}, {sort: {clicks:-1}});
                }
            }

            //, limit:7, skip:Session.get('skip')});
        }
        else{
            if(Session.get('sort') === 'Latest'){
                if(Session.get('filter')===0){
                    //console.log("1Category " + Session.get('category'));
                    //console.log("Sort " + Session.get('sort'));
                    //console.log("Filter " + Session.get('filter'));
                    return Posts.find({category:Session.get('category')}, {sort: {submitted:-1}});
                }
                else{
                    //console.log("2Category " + Session.get('category'));
                    //console.log("Sort " + Session.get('sort'));
                    //console.log("Filter " + Session.get('filter'));
                    return Posts.find({category:Session.get('category'), submitted : {$gte : new Date((new Date()).getTime() - Session.get('filter'))}}, {sort: {submitted:-1}});
                }

            }
            else{
                if(Session.get('filter')===0){
                    //console.log("3Category " + Session.get('category'));
                    //console.log("Sort " + Session.get('sort'));
                    //console.log("Filter " + Session.get('filter'));
                    return Posts.find({category:Session.get('category')}, {sort: {clicks:-1}});
                }
                else{
                    //console.log("4Category " + Session.get('category'));
                    //console.log("Sort " + Session.get('sort'));
                    //console.log("Filter " + Session.get('filter'));
                    return Posts.find({category:Session.get('category'), submitted : {$gte : new Date((new Date()).getTime() - Session.get('filter'))}}, {sort: {clicks:-1}});
                }
            }
            //return Posts.find({category:Session.get('category')}, {sort: {submitted:-1}});//, limit:7,
            // skip:Session.get('skip')});
        }

    }
    // posts object finds all posts or the category that is selected
});

