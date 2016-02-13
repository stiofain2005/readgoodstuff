Template.postSubmit.events({


    /* submit form : this is listening for the submit event of the form css-selector. Anytime
    // enter is pressed within the form it will run this event
    // the event has an argument called event(e). Event.target is the form */

    'submit form': function(e) {


        e.preventDefault();
        var publishVar;
        if(document.getElementById('publishBox').checked){
            publishVar = true;
        }
        else{
            publishVar = false;
        }

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            category: $(e.target).find('[id=category]').val(),
            clicks:0,
            userId: Meteor.userId(),
            user:Meteor.user().username,
            publish:publishVar
        };
        // call the postInsert method and either returns a new post id or postexists object
        Meteor.call('postInsert', post, function(error, result){
            if (error)
                return alert(error.reason);

            if(result.postExists)
                alert('This link has already been posted')

            Router.go('postList');
        });

    }
});
