function saveToFirebase(email) {

    firebase.database().ref('subscription-entries').push().set({email: email})
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase(email);
