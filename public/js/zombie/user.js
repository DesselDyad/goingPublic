/**
 * getUrlParameter
 * tool for extracting URL parameters from the adress bar (not originally my own)
 * extracts a parameter from the adress bar
 * @param {string} sParam - the string variable to check againsr
 */
function getUrlParameter (sParam) {
    const sPageURL = decodeURIComponent(window.location.search.substring(1));
    const sURLVariables = sPageURL.split('&');
    let sParameterName;
    for (let int = 0; int < sURLVariables.length; int = int + 1) {
        sParameterName = sURLVariables[int].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

/**
 * enter_pw_email
 * function for entering an email, to which the temporary password will be sent (after email is validated)
 */
function enter_pw_email() {
    document.querySelector('.user_cont').innerHTML = `
        <form class="pw_form">
            <p>
                <label for="e-mail">Indtast E-mail som passwordet skal sendes til: </label>
                <input type="text" id="email" name="email" min="6" max="100" placeholder="E-mail" autocomplete="off" required autofocus>
            </p>
            <p>
                <span class="e-mail_err_span"></span>
            </p>
            <button type="submit" class="email_submit_btn">Submit</button>
        </form>
    `;
    document.querySelector('.email_submit_btn').addEventListener('click', e => {
        e.preventDefault();
        if(document.querySelector('#email').value != '') {
            fetch('http://localhost:3000/validator/isEmailValid/' + document.querySelector('#email').value)
            .then(result => {
                return result.json();
            })
            .then(response => {
                if(response.response == "valid") {
                    fetch('http://localhost:3000/security/sendNewPassword/' + document.querySelector('#email').value)
                    .then(result => {
                        return result.json();
                    })
                    .then(response => {
                        localStorage.setItem('success_msg', 'An e-mail with a temporary password has been sent to the entered e-mail!');
                        window.location.reload(window.location.href);
                    })
                    .catch(e => {
                        console.log(e);
                    })
                }
                else if(response.response == "invalid") {
                    let myDiv = document.createElement('DIV');
                    myDiv.classList.add('alert');
                    myDiv.classList.add('alert-danger');
                    let myNode = document.createTextNode('The email entered is not affiliated with any account! Enter a different e-mail!');
                    myDiv.appendChild(myNode);
                    document.querySelector('.user_cont').insertAdjacentElement('beforebegin', myDiv);
                }
            })
            .catch(e => {
                console.log(e);
            })
        }
    })
}

if(getUrlParameter('recover')) {
    createNewPassword(getUrlParameter('recover'));
}
/**
 * createNewPassword
 * generates a password form, performs a series of checks for the validity of the temporary password,
 * checks for form and empty fields, and finally submits the whole form to the server
 * @param {string} email - the string variable to to match the new password with
 */
function createNewPassword(email) {
    //form the be worked with
    document.querySelector('.user_cont').innerHTML = `
        <form class="pw_form" method="post" action="/createNewPassword">
            <p>
                <label for="temporary_password">Temporary Password: </label>
                <input type="text" id="temporary_password" name="temporary_password" required autofocus>
            </p>
            <p>
                <span class="error_msg_span" id="temp_pw_span"></span>
            </p>
            <p>
                <label for="new_password">New Password: </label>
                <input type="text" id="new_password" name="new_password" min="5" max="10" required>
            </p>
            <p>
                <label for="rep_new_password">Repeat New Password: </label>
                <input type="text" id="rep_new_password" name="rep_new_password" min="5" max="10" required>
            </p>
            <p>
                <span class="error_msg_span" id="new_pw_span"></span>
            </p>
            <button class="submit_new_pw_btn">Submit New Password</button>
        </form>
    `;
    //event listener for the submit button
    document.querySelector('.submit_new_pw_btn').addEventListener('click', e => {
        e.preventDefault();
        if(document.querySelector('#temporary_password').value != '') {
            let data = JSON.stringify({
                'temp_password': document.querySelector('#temporary_password').value,
                'email': email
            });
            //fetch to validate the temporary password
            fetch(`http://localhost:3000/validator/validate_temporary_password`, {
                'method': 'POST',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                },
                'mode': 'cors',
                'cache': 'default',
                'body': data
            })
            .then(result => {
                return result.json();
            })
            .then(response => {
                //if the temporary password is indeed valid
                if(response.response == 'valid') {
                    document.querySelector('#temp_pw_span').innerHTML = '';
                    //make sure the new password(s) arent empty and also that they match each other
                    if(document.querySelector('#new_password').value == document.querySelector('#rep_new_password').value && document.querySelector('#new_password').value != '' &&  document.querySelector('#rep_new_password').value != '') {
                        //reset the error fields
                        document.querySelector('#new_pw_span').innerHTML = '';
                        let data = JSON.stringify({
                            'temporary_password': document.querySelector('#temporary_password').value,
                            'new_password': document.querySelector('#new_password').value
                        });
                        //actually fetch the whole thing and update the users password
                        fetch(`http://localhost:3000/security/updatePassword/` + getUrlParameter('recover'), {
                            'method': 'POST',
                            'headers': {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Content-Length': data.length
                            },
                            'mode': 'cors',
                            'cache': 'default',
                            'body': data
                        })
                        .then(result => {
                            return result.json();
                        })
                        .then(response => {
                            //do something, refresh or something
                            //inform the user that the password has been changed
                            document.querySelector('.user_cont').innerHTML = `<p class="center_p">Password updated!</p>`;
                        })
                        .catch(e => {
                            console.log(e);
                        })
                    }
                    else {
                        //error handling #3
                        //MISMATCH
                        //the new password and the repeated new password DONT MATCH
                                if(document.querySelector('#new_password').value != document.querySelector('#rep_new_password').value) {
                                    document.querySelector('#new_pw_span').innerHTML = 'The passwords must match!';
                                }
                                else if(document.querySelector('#new_password').value == '') {
                                    document.querySelector('#new_pw_span').innerHTML = 'Neither password field can be empty!';
                                }
                                else if(document.querySelector('#rep_new_password').value == ''){
                                    document.querySelector('#new_pw_span').innerHTML = 'Neither password field can be empty!';
                                }
                    }
                }
                else if(response.response == 'invalid') {
                    //error handling #2
                    //temp_pw IS NOT EMPTY but is simply invalid - either entered wrongly or user has taken too long
                    document.querySelector('#temp_pw_span').innerHTML = 'The temporary password entered is invalid - either you typed it incorrectly, or you took too long doing so!';
                    document.querySelector('#temp_pw_span').innerHTML += '<a class="resend_pw">Request A New Temporary Password</a>';
                    document.querySelector('.resend_pw').addEventListener('click', () => {
                        let data = JSON.stringify({
                            'email': email
                        });
                        //fetch to resend a temporary password to the user
                        fetch(`http://localhost:3000/security/resendPassword`, {
                            'method': 'POST',
                            'headers': {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Content-Length': data.length
                            },
                            'mode': 'cors',
                            'cache': 'default',
                            'body': data
                        })
                        .then(response => {
                            document.querySelector('.user_cont').innerHTML = `
                                <p class="center_p">A new temporary password has been sent!</p>
                            `;
                        })
                        .catch(e => {
                            console.log(e);
                        })
                    })
                }
            })
            .catch(e => {
                console.log(e);
            })
        }
        else {
            //error handling #1
            //temp_pw == ''
            document.querySelector('#temp_pw_span').innerHTML = 'This field cant be empty!';
        }
    })
}