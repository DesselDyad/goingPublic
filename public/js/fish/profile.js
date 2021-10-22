window.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('success_msg')) {
        if(document.querySelector('#operations_master')) {
            let myDiv = document.createElement('DIV');
            myDiv.classList.add('alert');
            myDiv.classList.add('alert-success');
            let myNode = document.createTextNode(localStorage.getItem('success_msg'));
            myDiv.appendChild(myNode);
            document.querySelector('#operations_master').insertAdjacentElement('beforebegin', myDiv);
            localStorage.removeItem('success_msg');
        }
        else if(document.querySelector('.overview_h1')) {
            if(localStorage.getItem('success_msg')) {
                let myDiv = document.createElement('DIV');
                myDiv.classList.add('alert');
                myDiv.classList.add('alert-success');
                let myNode = document.createTextNode(localStorage.getItem('success_msg'));
                myDiv.appendChild(myNode);
                document.querySelector('.overview_h1').insertAdjacentElement('afterend', myDiv);
                localStorage.removeItem('success_msg');
            }
        }
        else {
            let myDiv = document.createElement('DIV');
            myDiv.classList.add('alert');
            myDiv.classList.add('alert-success');
            let myNode = document.createTextNode(localStorage.getItem('success_msg'));
            myDiv.appendChild(myNode);
            document.querySelector('header').insertAdjacentElement('afterend', myDiv);
            localStorage.removeItem('success_msg');
        }
    }
    if(document.querySelector('#submit_old_pw_btn')) {
        const btn = document.querySelector('#submit_old_pw_btn');
        //stringify event form
        btn.addEventListener('click', event => {
            event.preventDefault();
                if(document.querySelector('.password_form').old_password.value != '') {
                    let data = JSON.stringify({
                        'old_password': document.querySelector('.password_form').old_password.value
                    });
                    //fetch stringified old password
                    fetch(`http://localhost:3000/user/validate_old_password`, {
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
                        if(response.response == 'valid') {
                            document.querySelector('#old_pw_span').innerHTML = '';
                            if(document.querySelector('.password_form').new_password.value == document.querySelector('.password_form').rep_new_password.value && document.querySelector('.password_form').new_password.value != '' &&  document.querySelector('.password_form').rep_new_password.value != '') {
                                document.querySelector('#new_pw_span').innerHTML = '';
                                let data = JSON.stringify({
                                    'new_password': document.querySelector('.password_form').new_password.value
                                });
                                fetch(`http://localhost:3000/user/change_password`, {
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
                                    //DO SOMETHING (probably change token in localstorage, this is like re-login without the login i assume)
                                    localStorage.setItem('success_msg', "Password changed succesfully!");
                                    window.location.reload("http://localhost:3000/profile");
                                })
                                .catch(e => {
                                    console.log(e);
                                })
                            }
                            else {
                                if(document.querySelector('.password_form').new_password.value != document.querySelector('.password_form').rep_new_password.value) {
                                    document.querySelector('#new_pw_span').innerHTML = 'The passwords must match!';
                                }
                                else if(document.querySelector('.password_form').new_password.value == '') {
                                    document.querySelector('#new_pw_span').innerHTML = 'Neither password field can be empty!';
                                }
                                else if(document.querySelector('.password_form').rep_new_password.value == ''){
                                    document.querySelector('#new_pw_span').innerHTML = 'Neither password field can be empty!';
                                }
                            }  
                        }
                        else if(response.response == 'invalid') {
                            document.querySelector('#old_pw_span').innerHTML = 'The password enetered is invalid!';
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                }
                else {
                    document.querySelector('#old_pw_span').innerHTML = 'The password enetered cant be empty!';
                }
        })
    }

    if(document.querySelector('#theme_selector')) {
        fetch('http://localhost:3000/user/getSingle')
        .then(result => {return result.json()})
        .then(user => {
            console.log('does get here');
            console.log($);
            $.getJSON('../json/styles.json', styles => {
                console.log('doesnt get here');
                styles.styles.forEach(style => {
                    console.log(style);
                    document.querySelector('#theme_selector').innerHTML += `
                        <option data-link="${style.link}" value="${style.link}">${style.name}</option>
                    `;
                })
                document.querySelector('#theme_selector').querySelectorAll('option').forEach(option => {
                    if(option.value == user.local.preferences.theme) {
                        option.selected = true;
                    }
                })
                document.querySelector('#theme_selector').style.color = "black";
                document.querySelector('#theme_selector').addEventListener('change', (e) => {
                    let options = document.querySelector('#theme_selector').querySelectorAll('option');
                    document.querySelector('#dyn_sheet').href = '/css/user_specific_sheets/' + options[document.querySelector('#theme_selector').selectedIndex].dataset.link;
                    fetch('http://localhost:3000/user/updateUserTheme/' + options[document.querySelector('#theme_selector').selectedIndex].value)
                    .then(result => {
                        localStorage.setItem('success_msg', 'Theme updated!');
                        window.location.assign(window.location.href);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                })
            });
    
            let selector = document.querySelector('input[name=profile_private]');
            if(user.local.preferences.profile_searchable) {
                selector.checked = true;
            }
            selector.addEventListener('change', event => {
                if (selector.checked) {
                    fetch('http://localhost:3000/user/makeProfilePublic')
                    .then(result => {
                        localStorage.setItem('success_msg', 'Your profile is now public!');
                        window.location.assign(window.location.href);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                } else {
                    fetch('http://localhost:3000/user/makeProfilePrivate')
                    .then(result => {
                        localStorage.setItem('success_msg', 'Your profile is now private!');
                        window.location.assign(window.location.href);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }
            })
        })
        .catch(e => {
            console.log(e);
        })
    }
})

/**
 * @module User
 */

if(document.querySelector('#userImage')) {
    //profile image review snippet, uses base64 and FileReader
    document.querySelector('#userImage').addEventListener('change', () => {
        var reader = new FileReader();
        let file = document.querySelector('#userImage').files[0];
        reader.addEventListener("load", function () {
            document.querySelector('#preview').src = reader.result;
            localStorage.setItem("imgData", reader.result);
        })
        if (file) {
            reader.readAsDataURL(file);
        }
    });
}


if(document.querySelector('#userImage')) {
    //profile image review snippet, uses base64 and FileReader
    document.querySelector('#userImage').addEventListener('change', () => {
        var reader = new FileReader();
        let file = document.querySelector('#userImage').files[0];
        reader.addEventListener("load", function () {
            document.querySelector('#preview').src = reader.result;
            localStorage.setItem("imgData", reader.result);
        })
        if (file) {
            reader.readAsDataURL(file);
        }
    });
}
/**
 * delete_user
 * function for deleting a user
 */
function delete_user() {
    if(confirm('are you sure you want to delete this user?')) {
        fetch('http://localhost:3000/user/deleteUser', {
            'method': 'post',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'mode': 'cors',
            'cache': 'default'
        })
        .then(result => {
            window.location.reload(window.location.href);
        })
        .catch(err => {
            console.log(err);
        })
    }
}
