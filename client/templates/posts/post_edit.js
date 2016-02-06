Template.postEdit.events({
    // if the form is submitted with Enter or click submit
    'submit form': function(e) {
        // prevent the default action
        e.preventDefault();

        var publishVar;
        if(document.getElementById('publishBox').checked){
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

        // update the current post and use mongo set equal to the new attributes
        Posts.update(currentPostId, {$set: postProperties}, function(error) {
            if (error) {
                // display the error to the user
                console.log(Meteor.user());
                alert(error.reason);
            }
            else {
                // go to the discussion page of the post after update
                Router.go('postPage', {_id: currentPostId});
            }
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
