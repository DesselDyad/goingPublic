const mailer = require('./mailer');

/**
 * @module Newsletter
 */
module.exports = {
    /**
     * Sends an email to the user requesting his validation to verify that he actually wanted to subscribe
     * @param {string} name - the request name
     * @param {string} email - the request email
     */
    requestUserValidation: (name, email) => {
        return new Promise(async (resolve, reject) => {
            try {
                let recipient = email,
                    subject = 'Subscription requested, confirmation required',
                    content = `
                            <b>You have requested a subscription to a newsletter!</b>
                            If you DIDN'T SEND THIS E-MAIL you can unsubscribe by clicking the link below: 
                            <a href="http://localhost:3000/newsletter/unsubscribe/${email}" >Unsubscribe!</a>
                            Otherwise, if you did in fact request a subscription, verify this by clicking the link below: 
                            <a href="http://localhost:3000/newsletter/subscribe?name=${name}&email=${email}" >Subscribe!</a>
                        `;
                let rows = await mailer.send_email(recipient, subject, content);
                resolve(rows);
            }
            catch {e => {
                reject(e);
            }}
        })
    },
    /**
     * Subscribes a user to a newsletter using the name and email as a key/value pair
     * @param {string} name - the subscribers name
     * @param {string} email - the subscribers email
     */
    subscribe: (name,email) => {
        return new Promise(async (resolve, reject) => {
            try {
                let recipient = email,
                    subject = 'Subscribe!',
                    content = `
                                Hello ${name}
                                <b>You have now successfully subscribed to a newsletter!</b>
                                If you regret this decision, you can unsubscribe here: 
                                <a href="http://localhost:3000/newsletter/unsubscribe/${email}">Unsubscribe!</a>
                            `;
                let rows = await mailer.send_email(recipient, subject, content);
                resolve(rows);
            }
            catch {e => {
                reject(e);
            }}
        })
    },
    /**
     * Unsubscribes a user from a newsletter using the subscribers email
     * @param {string} email - the subscribers email
     */
    unsubscribe: (email) => {
        return new Promise(async (resolve, reject) => {
            try {
                let recipient = email,
                    subject = 'Unsubscribe!',
                    content = `
                                <p>You have now successfully unsubscribed!</p>
                            `;
                let rows = await mailer.send_email(recipient, subject, content);
                resolve(rows);
            }
            catch {e => {
                reject(e);
            }}
        })
    },
    /**
     * Informs a subscriber that he has been subscribed to a newsletter by admin/moderator and provides him with the possibility to unsubscribe again
     * @param {string} name - the subscribers name
     * @param {string} email - the subscribers email
     */
    subscriberAdded: (name, email) => {
        return new Promise(async (resolve, reject) => {
            try {
                let recipient = email,
                    subject = 'Unsubscribe!',
                    content = `
                                <p>
                                    Dear <strong>${name}</strong>
                                    You have been subscribed to our newsletter!
                                    If you wish to undo this, click the link below to unsubscribe!
                                </p>
                                <p>
                                    <a href="http://localhost:3000/newsletter/unsubscribe/${email}">
                                        Unsubscribe!
                                    </a>
                                </p>
                            `;
                let rows = await mailer.send_email(recipient, subject, content);
                resolve(rows);
            }
            catch {e => {
                reject(e);
            }}
        })
    },
    remove_subscriber: (body) => {
        //send some kind of feedback to the client, verifying that the call was successfull
    }
}