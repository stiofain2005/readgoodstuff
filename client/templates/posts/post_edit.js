Template.postEdit.events({
    // if the form is submitted with Enter or click submit
    'submit form': function(e) {
        // prevent the default action
        e.preventDefault();

        // if user chooses to publish the post or unpublish using dropdown
        var publishVar;
        if($(e.target).find('[id=publishGroup]').val() === 'Publish'){
            publishVar = true;
        }
        else{
            publishVar = false;
        }


        // get the current post id
        var currentPostId = this._id;

        // object of the current posts attributes
        var postProperties = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            category: $(e.target).find('[id=category]').val(),
            publish:publishVar
        };

        // call postUpdate defined in posts.js
        Meteor.call('postUpdate', postProperties, function(error, result){
            if (error) {
                return alert(error.reason);
            }
            if(result.postExists) {
                alert('This link has already been posted');
            }
            // go the postList route which is the main page
            Router.go('postList');
        });
    },

    // if delete is clicked
    'click .delete': function(e) {
        e.preventDefault();
        if (confirm("Delete this post?")) {
            var currentPostId = this._id;

            // remove the post from the database
            Posts.remove(currentPostId);

            // go the postList route which is the main page
            Router.go('postList');
        }
    }
});
