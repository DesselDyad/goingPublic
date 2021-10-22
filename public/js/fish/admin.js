window.onload = () => {
    if (localStorage.getItem('success_msg')) {
        if (document.querySelector('#operations_master')) {
            let myDiv = document.createElement('DIV');
            myDiv.classList.add('alert');
            myDiv.classList.add('alert-success');
            let myNode = document.createTextNode(localStorage.getItem('success_msg'));
            myDiv.appendChild(myNode);
            document.querySelector('#operations_master').insertAdjacentElement('beforebegin', myDiv);
            localStorage.removeItem('success_msg');
        }
        else if (document.querySelector('.overview_h1')) {
            if (localStorage.getItem('success_msg')) {
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
            document.querySelector('.user_cont').insertAdjacentElement('beforebegin', myDiv);
            localStorage.removeItem('success_msg');
        }
    }
}
/**
 * @module Admin
 */

/**
* getUrlParameter
* tool for extracting URL parameters from the adress bar (not originally my own)
* extracts a parameter from the adress bar
* @param {string} sParam - the string variable to check againsr
*/
function getUrlParameter(sParam) {
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

if (document.querySelector('#categoryImage')) {
    //profile image review snippet, uses base64 and FileReader
    document.querySelector('#categoryImage').addEventListener('change', () => {
        var reader = new FileReader();
        let file = document.querySelector('#categoryImage').files[0];
        reader.addEventListener("load", function () {
            document.querySelector('#category_preview').src = reader.result;
            localStorage.setItem("imgData", reader.result);
        })
        if (file) {
            reader.readAsDataURL(file);
        }
    });
}

function previewFishFiles() {

    var preview = document.querySelector('#fish_preview');
    var files   = document.querySelector('#fish_images').files;
    console.log(files);
  
    function readAndPreview(file) {
  
      // Make sure `file.name` matches our extensions criteria
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        var reader = new FileReader();
  
        reader.addEventListener("load", function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.padding = 100;
          image.src = this.result;
          preview.appendChild( image );
        }, false);
  
        reader.readAsDataURL(file);
      }
  
    }
  
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  
}

function previewNewFishImages() {

    var preview = document.querySelector('#previewNewFishDiv');
    var files   = document.querySelector('#previewNewFish').files;
    console.log(files,'files');
  
    function readAndPreview(file) {
  
      // Make sure `file.name` matches our extensions criteria
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        var reader = new FileReader();
  
        reader.addEventListener("load", function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.padding = 100;
          image.src = this.result;
          preview.appendChild( image );
        }, false);
  
        reader.readAsDataURL(file);
      }
  
    }
  
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  
}
// function previewFishFiles() {
    
//     var preview = document.querySelector('#fish_preview');
//     var files   = document.querySelector('#fish_images').files;
//     console.log(files);
    
//     function readAndPreview(file) {
        
//         // Make sure `file.name` matches our extensions criteria
//       if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
//           var reader = new FileReader();
          
//           reader.addEventListener("load", function () {
//           var image = new Image();
//           image.height = 100;
//           image.title = file.name;
//           image.padding = 100;
//           image.src = this.result;
//           preview.appendChild( image );
//         }, false);
        
//         reader.readAsDataURL(file);
//       }
      
//     }
    
//     if (files) {
//       [].forEach.call(files, readAndPreview);
//     }
  
// }

function previewFishSpeciesFiles() {

    var preview = document.querySelector('#fish_species_preview');
    var files   = document.querySelector('#fish_species_images').files;
    console.log(files);
  
    function readAndPreview(file) {
  
      // Make sure `file.name` matches our extensions criteria
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        var reader = new FileReader();
  
        reader.addEventListener("load", function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.padding = 100;
          image.src = this.result;
          preview.appendChild( image );
        }, false);
  
        reader.readAsDataURL(file);
      }
  
    }
  
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  
}

function previewNewFishSpeciesImages() {

    var preview = document.querySelector('#previewNewFishSpeciesDiv');
    var files   = document.querySelector('#previewNewFishSpecies').files;
    console.log(files,'files');
  
    function readAndPreview(file) {
  
      // Make sure `file.name` matches our extensions criteria
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        var reader = new FileReader();
  
        reader.addEventListener("load", function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.padding = 100;
          image.src = this.result;
          preview.appendChild( image );
        }, false);
  
        reader.readAsDataURL(file);
      }
  
    }
  
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  
}
    
function previewLocationFiles() {

    var preview = document.querySelector('#location_preview');
    var files   = document.querySelector('#location_images').files;
    console.log(files,'files');
  
    function readAndPreview(file) {
  
      // Make sure `file.name` matches our extensions criteria
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        var reader = new FileReader();
  
        reader.addEventListener("load", function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.padding = 100;
          image.src = this.result;
          preview.appendChild( image );
        }, false);
  
        reader.readAsDataURL(file);
      }
  
    }
  
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  
}

function previewNewLocationImages() {

    var preview = document.querySelector('#previewNewLocationDiv');
    var files   = document.querySelector('#previewNewLocations').files;
    console.log(files,'files');
  
    function readAndPreview(file) {
  
      // Make sure `file.name` matches our extensions criteria
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        var reader = new FileReader();
  
        reader.addEventListener("load", function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.padding = 100;
          image.src = this.result;
          preview.appendChild( image );
        }, false);
  
        reader.readAsDataURL(file);
      }
  
    }
  
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  
}

//eventlistener for the user button on admin page
//toggles css classes on the pages dynamic elements
// if (document.getElementById('users_btn')) {
//     document.getElementById('users_btn').addEventListener('click', () => {
//         document.querySelector('#edit_div').innerHTML = '';
//         document.getElementById('users_btn').classList.toggle('btn_clicked');
//         if (document.getElementById('subscribers_btn').classList.contains('btn_clicked')) {
//             document.getElementById('subscribers_btn').classList.toggle('btn_clicked');
//         }
//         document.querySelector('#subscribers_div').classList.add('hidden');
//         document.querySelector('#users_div').classList.remove('hidden');
//         document.querySelector('#users_title').classList.remove('hidden');
//         document.querySelector('#add_user_h1').classList.remove('hidden');
//         document.querySelectorAll('table').forEach(table => {
//             table.classList.add('hidden');
//         })
//     })
// }
//eventlistener for the subscruber button on the admin page
//toggles css classes on the pages dynamic elements
// if (document.getElementById('subscribers_btn')) {
//     document.getElementById('subscribers_btn').addEventListener('click', () => {
//         document.querySelector('#edit_div').innerHTML = '';
//         if (document.getElementById('users_btn').classList.contains('btn_clicked')) {
//             document.getElementById('users_btn').classList.toggle('btn_clicked');
//         }
//         document.getElementById('subscribers_btn').classList.toggle('btn_clicked');
//         document.querySelector('#users_div').classList.add('hidden');
//         document.querySelector('#subscribers_div').classList.remove('hidden');
//         document.querySelector('#subscribers_title').classList.remove('hidden');
//         document.querySelector('#add_subscriber_h1').classList.remove('hidden');
//         document.querySelectorAll('table').forEach(table => {
//             table.classList.add('hidden');
//         })
//     })
// }
/**
 * edit_user
 * function for editing a user
 * @param {object} target_id - points to the user to edit
 */
function edit_user(target_id) {
    fetch('http://localhost:3000/admin/getSingle/' + target_id)
        .then(result => {
            return result.json();
        })
        .then(users => {
            let div = document.querySelector('#edit_div');
            div.classList.toggle('hidden');
            div.innerHTML = `
            <form id="user_form" method="post" action="/admin/updateUser/${target_id}" enctype="multipart/form-data">
                <h1>Edit User </h1>
                <div>
                    <label class="old_img_label" >Gammelt billede: </label>
                    <img src="../img/${users.local.profile_img}" alt="profile image" title="profile image" class="profile_img img-responsive">
                </div>
                <div>
                    <label class="profile_img_label" >Upload Nyt Billede</label>
                    <input type="file" name="userImage" id="userImage" value="${users.local.profile_img}" accept="image/gif, image/jpeg, image/png">
                    <input type="text" name="oldImage" id="oldImage" value="${users.local.profile_img}" class="hidden">
                    <img src="" id="preview" class="img-responsive hidden">
                </div>
                <div>
                    <label for="username">Username: </label>
                    <input name="username" type="text" id="username" value="${users.local.account.username}" minlength="5" maxlength="50" required>
                </div>
                <div>
                    <label for="name">Name: </label>
                    <input name="name" type="text" id="name" value="${users.local.contact_info.name}" minlength="5" maxlength="50" required autofocus>
                </div>
                <div>
                    <label for="email">E-mail Adress: </label>
                    <input name="email" type="text" id="email" value="${users.local.contact_info.email}" required>
                </div>
                <div>
                    <label for="email2">E-mail Adress: </label>
                    <input name="email2" type="text" id="email2" value="${users.local.contact_info.email}" required>
                </div>
                <div>
                    <label for="role">User Role: </label>
                    <select name="role" type="text" id="role" value="${users.local.role}" min="5" max="11"></select>
                </div>
                    <button type="submit" id="${users._id}">Update</button>
            </form>
        `;
            document.querySelector('#userImage').addEventListener('change', () => {
                var reader = new FileReader();
                let file = document.querySelector('#userImage').files[0];
                reader.addEventListener("load", function () {
                    document.querySelector('#preview').classList.toggle('hidden');
                    document.querySelector('#preview').src = reader.result;
                    localStorage.setItem("imgData", reader.result);
                })
                if (file) {
                    reader.readAsDataURL(file);
                }
            });
            return users;
        })
        .then(users => {
            fetch('http://localhost:3000/role/getAll')
                .then(result => {
                    return result.json();
                })
                .then(response => {
                    response.forEach(role => {
                        document.querySelector('#role').innerHTML += `
                    <option value="${role.name}">${role.name}</option>
                `;
                    })
                    return users;
                })
                .then(users => {
                    document.querySelector('#role').querySelectorAll('option').forEach(option => {
                        if (option.value == users.local.role) {
                            option.selected = true;
                        }
                    })
                })
                .catch(e => {
                    console.log(e);
                })
        })
        .catch(err => {
            console.log(err);
        })
}
/**
 * delete_user
 * function for deleting a user
 * @param {object} target_id - points to the user to delete
 */
function delete_user_admin(target_id) {
    if(confirm('are you sure you want to delete this user?')) {
        fetch('http://localhost:3000/admin/deleteUser/' + target_id)
        .then(response => {
            localStorage.setItem('success_msg', 'User removed succesfully!');
            window.location.reload(window.location.href);
        })
        .catch(err => {
            console.log(err);
        })
    }
}
/**
 * delete_subscriber
 * function for deleting a user
 * @param {object} target_id - points to the subscriber to delete
 */
function delete_subscriber(target_id) {
    if(confirm('are you sure you want to delete this user?')) {
        fetch('http://localhost:3000/newsletter/removeSubscriber/' + target_id)
        .then(response => {
            localStorage.setItem('success_msg', 'Subscriber removed succesfully!');
            window.location.reload(window.location.href);
        })
        .catch(err => {
            console.log(err);
        })
    }
}
/**
 * hide_add_user
 * function for toggleing add user form viisbility
 */
if (document.querySelector('#add_user_h1')) {
    document.querySelector('#add_user_h1').addEventListener('click', () => {
        document.querySelector('.add_user_section').classList.toggle('hidden');
        document.querySelector('#role').querySelectorAll('option').forEach(option => {
            if (option.value == 'member') {
                option.selected = true;
            }
        })
        if (document.querySelector('#add_user_h1').classList.contains('glyphicon-chevron-down')) {
            document.querySelector('#add_user_h1').classList.replace('glyphicon-chevron-down', 'glyphicon-chevron-up');
        }
        else if (document.querySelector('#add_user_h1').classList.contains('glyphicon-chevron-up')) {
            document.querySelector('#add_user_h1').classList.replace('glyphicon-chevron-up', 'glyphicon-chevron-down');
        }
    })
}

/**
 * hide_add_user
 * function for toggleing add user form viisbility
 */
if (document.querySelector('#users_title')) {
    document.querySelector('#users_title').addEventListener('click', () => {
        document.querySelector('#users_table').classList.toggle('hidden');
        if (document.querySelector('#users_title').classList.contains('glyphicon-chevron-down')) {
            document.querySelector('#users_title').classList.replace('glyphicon-chevron-down', 'glyphicon-chevron-up');
        }
        else if (document.querySelector('#users_title').classList.contains('glyphicon-chevron-up')) {
            document.querySelector('#users_title').classList.replace('glyphicon-chevron-up', 'glyphicon-chevron-down');
        }
    })
}
/**
 * hide_add_user
 * function for toggleing add subscriber form viisbility
 */
if (document.querySelector('#add_subscriber_h1')) {
    document.querySelector('#add_subscriber_h1').addEventListener('click', () => {
        document.querySelector('.add_subscriber_section').classList.toggle('hidden');
        if (document.querySelector('#add_subscriber_h1').classList.contains('glyphicon-chevron-down')) {
            document.querySelector('#add_subscriber_h1').classList.replace('glyphicon-chevron-down', 'glyphicon-chevron-up');
        }
        else if (document.querySelector('#add_subscriber_h1').classList.contains('glyphicon-chevron-up')) {
            document.querySelector('#add_subscriber_h1').classList.replace('glyphicon-chevron-up', 'glyphicon-chevron-down');
        }
    })
}

/**
 * hide_add_user
 * function for toggleing add subscriber form viisbility
 */
if (document.querySelector('#subscribers_title')) {
    document.querySelector('#subscribers_title').addEventListener('click', () => {
        document.querySelector('#subscribers_table').classList.toggle('hidden');
        if (document.querySelector('#subscribers_title').classList.contains('glyphicon-chevron-down')) {
            document.querySelector('#subscribers_title').classList.replace('glyphicon-chevron-down', 'glyphicon-chevron-up');
        }
        else if (document.querySelector('#subscribers_title').classList.contains('glyphicon-chevron-up')) {
            document.querySelector('#subscribers_title').classList.replace('glyphicon-chevron-up', 'glyphicon-chevron-down');
        }
    })
}