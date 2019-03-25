const functions = require('firebase-functions');


exports.addLogOnChantierNameChange = functions.firestore
    .document('ISIGE/{chantierId}')
    .onUpdate((change, context) => {

        const newValue = change.after.data();

        const previousValue = change.before.data();

        // const name = newValue.name;

        console.log(newValue);
        console.log(previousValue);

    });