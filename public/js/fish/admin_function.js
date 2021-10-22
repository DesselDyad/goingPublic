document.addEventListener('DOMContentLoaded', () => {
    var selected_images = [];
    
    window.remove_image = (img, location_id, calling_button) => {
        console.log(calling_button);
        calling_button.classList.toggle('red');
        if(selected_images.indexOf(img) <= -1) {
            selected_images.push(img);
            console.log(selected_images);
        } else {
            console.log('already in array');
        }
    }

    window.deleteFishSpeciesImages = id => {
        const data = JSON.stringify({images: selected_images});

        fetch('/admin/fish_species/deleteImages/' + id, {
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
        .then(() => {
            localStorage.setItem('success_msg', 'Fish species successfully deleted!');
            window.location.reload('http://localhost:3000/admin');
        })
        .catch((err) => {
            console.log(err);
        });
    }

    window.deleteFishImages = id => {
        const data = JSON.stringify({images: selected_images});

        fetch('/admin/fish/deleteImages/' + id, {
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
        .then(() => {
            localStorage.setItem('success_msg', 'Fish successfully deleted!');
            window.location.reload('http://localhost:3000/admin');
        })
        .catch((err) => {
            console.log(err);
        });
    }

    window.deleteLocationImages = id => {
        const data = JSON.stringify({images: selected_images});

        fetch('/admin/location/deleteImages/' + id, {
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
        .then(() => {
            localStorage.setItem('success_msg', 'Location successfully deleted!');
            window.location.reload('http://localhost:3000/admin');
        })
        .catch((err) => {
            console.log(err);
        });
    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////// FISH FUNCTIONALITY ////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function edit_fish(id) {
    fetch('/fish/getSingleFish/' + id)
    .then(result =>  {
        return result.json()
    })
    .then(fish => {
        let div = document.querySelector('#edit_div');
        console.log(fish);
        div.innerHTML = '';
        div.classList.remove('hidden');
        div.innerHTML += `
            <form class="edit_fish_form" method="post" action="/admin/fish/updateFish/${id}" novalidate enctype="multipart/form-data">
            <h2>Edit Fish</h2>
            <hr>
                <div class="row">
                    <div class="col-xs-6">
                        <p class="form-group">
                            <label for="species">Fish Species: </label>
                            <select name="species" type="text" id="fish_update_species_select" placeholder="Species"  value='${fish[0].species._id}'required>
                            </select>
                        </p>
                        <p class="form-group">
                            <label for="location">Location: </label>
                            <select name="location" type="text" id="fish_update_location_select" placeholder="Location" value='${fish[0].location._id}' required>
                            </select>
                        </p>
                        <p class="form-group">
                            <label for="caught_by">Caught By: </label>
                            <select name="caught_by" type="text" id="fish_update_caught_by_select" placeholder="Caught by" value='${fish[0].caught_by._id}' required>
                            </select>
                        </p>
                    </div>
                    <div class="col-xs-6">
                        <p>
                            <label for="date_caught">Date Caught: </label>
                            <input type="date" name="date_caught" id="date_caught" value='${fish[0].date_caught}' required>
                        </p>
                        <p>
                            <label for="weight">Weight (kg): </label>
                            <input name="weight" type="number" id="weight" placeholder="Weight" minlength="1" maxlength="5" value='${fish[0].weight}' required>
                        </p>
                        <p>
                            <label for="fish_description">Description: </label>
                            <input name="description" type="text" id="fish_description" placeholder="Description" minlength="5" maxlength="50" value='${fish[0].description}' required>
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <div id="update_fish_preview"></div>
                </div>
                <button type="submit">Update</button>
            </form>
        `;
        return fish;
    })
    .then(fish => {
        fish[0].images.forEach(img => {
            document.querySelector('#update_fish_preview').innerHTML += `
                <img src="/img/fish/${img}" alt="/img/fish/${img}" title="/img/fish/${img}">
            `;
        })
        return fish;
    })
    //species
    .then(fish => {
        fetch('/fish_species/getAllFishSpecies')
        .then(result =>  {
            return result.json()
        })
        .then(fish_species => {
            console.log('fish species', fish_species);
            fish_species.forEach(species => {
                document.querySelector('#fish_update_species_select').innerHTML += `
                    <option value="${species._id}">
                        ${species.name}
                    </option>
                `;
            })
            Array.from(document.querySelector('#fish_update_species_select').getElementsByTagName('option')).forEach(option => {
                if(option.value == fish[0].species._id) {
                    // option.selected = true;
                    option.setAttribute('selected', true);
                }
            })
        })
        .catch(e => {
            console.log(e);
        })
        return fish;
    })
    //locations
    .then(fish => {
        fetch('/location/getAllLocations')
        .then(result =>  {
            return result.json()
        })
        .then(locations => {
            console.log('locations', locations);
            locations.forEach(location => {
                document.querySelector('#fish_update_location_select').innerHTML += `
                    <option value="${location._id}">
                        ${location.name}
                    </option>
                `;
                Array.from(document.querySelector('#fish_update_location_select').getElementsByTagName('option')).forEach(option => {
                    if(option.value == fish[0].location._id) {
                        // option.selected = true;
                        option.setAttribute('selected', true);
                    }
                })
            })
        })
        .catch(e => {
            console.log(e);
        })
        return fish;
    })
    //users
    .then(fish => {
        fetch('/user/getAllUsers')
        .then(result =>  {
            return result.json()
        })
        .then(users => {
            console.log('users', users);
            users.forEach(user => {
                document.querySelector('#fish_update_caught_by_select').innerHTML += `
                    <option value="${user._id}">
                        ${user.local.account.username}
                    </option>
                `;
                Array.from(document.querySelector('#fish_update_caught_by_select').getElementsByTagName('option')).forEach(option => {
                    if(option.value == fish[0].caught_by._id) {
                        // option.selected = true;
                        option.setAttribute('selected', true);
                    }
                })
            })
        })
        .catch(e => {
            console.log(e);
        })
    })
    .then(() => {
        window.location.href = window.location.href + '#edit_div';
    })
    .catch(e => {
        console.log(e)
    })
}

function edit_fish_images(id) {
    fetch('/fish/getSingleFish/' + id)
    .then(result =>  {
        return result.json()
    })
    .then(fish => {
        let div = document.querySelector('#edit_div');
        console.log(fish);
        div.innerHTML = '';
        div.classList.remove('hidden');
        div.innerHTML += `
            <div>
                <h2>Edit Fish: <strong>${fish[0].name}</strong></h2>
                <p>
                    ${fish[0].description}
                </p>
                <p>
                    ${fish[0].external_ref}
                </p>
            </div>
            <div class="images_master">
                <div class="remove_images_div">
                    <h2>Current Images</h2>
                </div>
                <div class="add_images_div">
                    <form method="post" action="/admin/fish/addFishImages/${id}" enctype="multipart/form-data">
                        <h2>Add New Images to the Fish</h2>
                        <input type="file" id="previewNewFish" name="add_fish_images" onchange="previewNewFishImages()" accept="image/gif, image/jpeg, image/png" multiple>
                        <div id="previewNewFishDiv"></div>
                        <button type="submit">Add Images</button>
                    </form>
                </div>
            </div>
        `;
        return fish;
    })
    .then(fish => {
        fish[0].images.forEach(img => {
            document.querySelector('.remove_images_div').innerHTML += `
                <div>
                    <button onclick="remove_image('${img}', '${fish[0]._id}', this)">
                        <img src="/img/fish/${img}" alt="/img/fish/${img}" title="/img/fish/${img}">
                    </button>
                </div>
            `;
        })
        document.querySelector('.remove_images_div').innerHTML += `
            <p>
                <button onclick="deleteFishImages('${fish[0]._id}')">Delete Images</button>
            </p>
        `;
    })
    .then(() => {
        window.location.href = window.location.href + '#edit_div';
    })
    .catch(e => {
        console.log(e)
    })
}

function delete_fish(id) {
    if(confirm('Are you sure you want to delete this fish??')) {
        fetch('/admin/fish/deleteFish/' + id)
        .then(response => {
            localStorage.setItem('success_msg', 'Fish successfully deleted!');
            window.location.reload('http://localhost:3000/admin');
        })
        .catch(err => {
            console.log(err);
        })
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////// FISH SPECIES STUFF /////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function edit_fish_species(id) {
    fetch('/fish_species/getSingleFishSpecies/' + id)
    .then(result =>  {
        return result.json()
    })
    .then(fish_species => {
        let div = document.querySelector('#edit_div');
        console.log(fish_species);
        div.innerHTML = '';
        div.classList.remove('hidden');
        div.innerHTML += `
            <form class="edit_fish_species_form" method="post" action="/admin/fish_species/updateFishSpecies/${id}" novalidate enctype="multipart/form-data">
                <h2>Edit fish_species</h2>
                <p>
                    <label for="name">Name: </label>
                    <input name="name" type="text" id="name" placeholder="Name" minlength="5" maxlength="50" value='${fish_species[0].name}' required autofocus>
                </p>
                <p>
                    <label for="fish_species_description">Description: </label>
                    <input name="description" type="text" id="fish_species_description" placeholder="Description" minlength="5" maxlength="50" value='${fish_species[0].description}' required>
                </p>
                <p>
                    <label for="fish_species_external_ref">External reference: </label>
                    <input name="external_ref" type="text" id="fish_species_external_ref" placeholder="External reference" minlength="5" maxlength="50" value='${fish_species[0].external_ref}'>
                </p>
                <div class="form-group">
                    <div id="update_fish_species_preview"></div>
                </div>
                <button type="submit">Update</button>
            </form>
        `;
        return fish_species;
    })
    .then(fish_species => {
        fish_species[0].images.forEach(img => {
            document.querySelector('#update_fish_species_preview').innerHTML += `
                <img src="/img/fish_species/${img}" alt="/img/fish_species/${img}" title="/img/fish_species/${img}">
            `;
        })
    })
    .then(() => {
        window.location.href = window.location.href + '#edit_div';
    })
    .catch(e => {
        console.log(e)
    })
}

function edit_fish_species_images(id) {
    fetch('/fish_species/getSingleFishSpecies/' + id)
    .then(result =>  {
        return result.json()
    })
    .then(fish_species => {
        let div = document.querySelector('#edit_div');
        console.log(fish_species);
        div.innerHTML = '';
        div.classList.remove('hidden');
        div.innerHTML += `
            <div>
                <h2>Edit Fish Species: <strong>${fish_species[0].name}</strong></h2>
                <p>
                    ${fish_species[0].description}
                </p>
                <p>
                    ${fish_species[0].external_ref}
                </p>
            </div>
            <div class="images_master">
                <div class="remove_images_div">
                    <h2>Current Images</h2>
                </div>
                <div class="add_images_div">
                    <form method="post" action="/admin/fish_species/addFishSpeciesImages/${id}" enctype="multipart/form-data">
                        <h2>Add New Images to the Fish Species</h2>
                        <input type="file" id="previewNewFishSpecies" name="add_fish_species_images" onchange="previewNewFishSpeciesImages()" accept="image/gif, image/jpeg, image/png" multiple>
                        <div id="previewNewFishSpeciesDiv"></div>
                        <button type="submit">Add Images</button>
                    </form>
                </div>
            </div>
        `;
        return fish_species;
    })
    .then(fish_species => {
        fish_species[0].images.forEach(img => {
            document.querySelector('.remove_images_div').innerHTML += `
                <div>
                    <button onclick="remove_image('${img}', '${fish_species[0]._id}', this)">
                        <img src="/img/fish_species/${img}" alt="/img/fish_species/${img}" title="/img/fish_species/${img}">
                    </button>
                </div>
            `;
        })
        document.querySelector('.remove_images_div').innerHTML += `
            <p>
                <button onclick="deleteFishSpeciesImages('${fish_species[0]._id}')">Delete Images</button>
            </p>
        `;
    })
    .then(() => {
        window.location.href = window.location.href + '#edit_div';
    })
    .catch(e => {
        console.log(e)
    })
}

function delete_fish_species(id) {
    if(confirm('Are you sure you want to delete this species??')) {
        fetch('/admin/fish_species/deleteFishSpecies/' + id)
        .then(response => {
            localStorage.setItem('success_msg', 'Fish species successfully deleted!');
            window.location.reload('http://localhost:3000/admin');
        })
        .catch(err => {
            console.log(err);
        })
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// USER STUFF /////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function edit_user(id) {
    fetch('/user/getSingle/' + id)
    .then(result => {
        return result.json()
    })
    .then(user => {
        console.log(user);
        let div = document.querySelector('#edit_div');
        div.innerHTML = '';
        div.classList.remove('hidden');
        div.innerHTML += `
            <form class="update_user_form" method="post" action="/admin/user/updateUser/${id}" enctype="multipart/form-data" novalidate>
                <h2>Rediger Bruger</h2>
                <div class="form-group">
                    <label for="name">Navn: </label>
                    <input class="form-control" type="text" id="name" name="name" value="${user[0].name}" required>
                </div>
                <div class="form-group">
                    <label for="name">Brugernavn: </label>
                    <input class="form-control" type="text" id="username" name="username" value="${user[0].username}" required>
                </div>
                <div class="form-group">
                    <label for="text">Profil tekst: </label>
                    <input class="form-control" type="text" id="text" name="text" value="${user[0].profile_text}" required>
                </div>
                <div class="form-group">
                    <label for="email">E-mail adresse: </label>
                    <input class="form-control" type="text" id="email" name="email" value="${user[0].email}" required>
                </div>
                <div class="form-group pick_cat_div">
                    <label for="category">Vælg kategori: </label>
                </div>
                <div class="form-group">
                    <label for="role">Vælg bruger rolle: </label>
                    <select class="form-control" id="role_select" name="role" value="${user[0].role._id}"></select>
                </div>
                <div class="form-group">
                    <label>Gammelt Billede: </label>
                    <img src="/img/editorial/${user[0].img}" title"/img/editorial/${user[0].img}" alt="/img/editorial/${user[0].img}" class="img-responsive">
                    <input type="text" name="oldImage" id="oldImage" value="${user[0].img}" class="hidden">

                    <label>Upload Nyt Billede</label>
                    
                    <input form-control type="file" name="userImage" id="userImage" value="${user[0].img}" accept="image/gif, image/jpeg, image/png">
                    <img id="user_preview" class="img-responsive hidden" width="200">
                </div>
                <button type="submit" class="admin_submit_btn">Opdater</button>
            </form>
        `;
        document.querySelector('#userImage').addEventListener('change', () => {
            var reader = new FileReader();
            document.querySelector('#user_preview').classList.remove('hidden');
            let file = document.querySelector('#userImage').files[0];
            reader.addEventListener("load", function () {
                document.querySelector('#user_preview').src = reader.result;
                localStorage.setItem("imgData", reader.result);
            })
            if (file) {
                reader.readAsDataURL(file);
            }
        })
        return user;
    })
    .then(user => {
        fetch('/category/getAll')
        .then(result => {
            return result.json();
        })
        .then(categories => {
            categories.forEach(category => {
                document.querySelector('.pick_cat_div').innerHTML += `
                    <p>
                        <label>${category.editor_name}</label>
                        <input type="checkbox" value="${category._id}" name="category">
                    </p>
                `;
            })
        })
        .then(() => {
            if(user[0].category) {
                document.querySelector('.pick_cat_div').querySelectorAll('input[type=checkbox]').forEach(checkbox => {
                    user[0].category.forEach(category => {
                        if(category._id == checkbox.value) {
                            checkbox.checked = true;
                        }
                    })
                })
            }
        })
        .catch(e => {
            console.log(e);
        })
    })
    .then(() => {
        fetch('/roles/getAll')
        .then(result => {
            return result.json();
        })
        .then(roles => {
            roles.forEach(role => {
                document.querySelector('#role_select').innerHTML += `
                    <option value="${role._id}">
                        ${role.display_name}
                    </option>
                `;
            })
        })
        .catch(e => {
            console.log(e);
        })
    })
    .then(() => {
        window.location.href = window.location.href + '#edit_div';
    })
    .catch(e => {
        console.log(e);
    })
}

function delete_user(id) {
    if(confirm('Er du sikker på du vil slette denne bruger?? ADVARSEL: DETTE VIL PERMANENT SLETTE DET TILHØRENDE BILLEDE !!!!!!!!!')) {
        fetch('/admin/user/deleteUser/' + id)
        .then(response => {
            localStorage.setItem('success_msg', 'Bruger succesfuldt slettet!');
            window.location.reload('http://localhost:3000/admin');
        })
        .catch(err => {
            console.log(err);
        })
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////// LOCATION STUFF ////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function edit_location(id) {
    fetch('/location/getSingleLocation/' + id)
    .then(result =>  {
        return result.json()
    })
    .then(location => {
        let div = document.querySelector('#edit_div');
        console.log(location);
        div.innerHTML = '';
        div.classList.remove('hidden');
        div.innerHTML += `
            <form class="edit_location_form" method="post" action="/admin/location/updateLocation/${id}" novalidate enctype="multipart/form-data">
                <h2>Edit Location</h2>
                <p>
                    <label for="name">Name: </label>
                    <input name="name" type="text" id="name" placeholder="Name" minlength="5" maxlength="50" value='${location[0].name}' required autofocus>
                </p>
                <p>
                    <label for="location_description">Description: </label>
                    <input name="description" type="text" id="location_description" placeholder="Description" minlength="5" maxlength="50" value='${location[0].description}' required>
                </p>
                <p>
                    <label for="location_external_ref">External reference: </label>
                    <input name="external_ref" type="text" id="location_external_ref" placeholder="External reference" minlength="5" maxlength="50" value='${location[0].external_ref}'>
                </p>
                <div class="form-group">
                    <label class="location_img_label" >Upload Picture</label>
                    <input id="location_images" name="location_images" type="file" onchange="previewLocationFiles()" accept="image/gif, image/jpeg, image/png" multiple>
                    <div id="update_location_preview"></div>
                </div>
                <button type="submit">Update</button>
            </form>
        `;
        return location;
    })
    .then(location => {
        location[0].images.forEach(img => {
            document.querySelector('#update_location_preview').innerHTML += `
                <img src="/img/locations/${img}" alt="/img/locations/${img}" title="/img/locations/${img}">
            `;
        })
    })
    .then(() => {
        window.location.href = window.location.href + '#edit_div';
    })
    .catch(e => {
        console.log(e)
    })
}

function edit_location_images(id) {
    fetch('/location/getSingleLocation/' + id)
    .then(result =>  {
        return result.json()
    })
    .then(location => {
        let div = document.querySelector('#edit_div');
        console.log(location);
        div.innerHTML = '';
        div.classList.remove('hidden');
        div.innerHTML += `
            <div>
                <h2>Edit Location: <strong>${location[0].name}</strong></h2>
                <p>
                    ${location[0].description}
                </p>
                <p>
                    ${location[0].external_ref}
                </p>
            </div>
            <div class="images_master">
                <div class="remove_images_div">
                    <h2>Current Images</h2>
                </div>
                <div class="add_images_div">
                    <form method="post" action="/admin/location/addLocationImages/${id}" enctype="multipart/form-data">
                        <h2>Add New Images to the Location</h2>
                        <input type="file" id="previewNewLocations" name="add_location_images" onchange="previewNewLocationImages()" accept="image/gif, image/jpeg, image/png" multiple>
                        <div id="previewNewLocationDiv"></div>
                        <button type="submit">Add Images</button>
                    </form>
                </div>
            </div>
        `;
        return location;
    })
    .then(location => {
        location[0].images.forEach(img => {
            document.querySelector('.remove_images_div').innerHTML += `
                <div>
                    <button onclick="remove_image('${img}', '${location[0]._id}', this)">
                        <img src="/img/locations/${img}" alt="/img/locations/${img}" title="/img/locations/${img}">
                    </button>
                </div>
            `;
        })
        document.querySelector('.remove_images_div').innerHTML += `
            <p>
                <button onclick="deleteLocationImages('${location[0]._id}')">Delete Images</button>
            </p>
        `;
    })
    .then(() => {
        window.location.href = window.location.href + '#edit_div';
    })
    .catch(e => {
        console.log(e)
    })
}

function delete_location(id) {
    if(confirm('Are you sure you want to delete this location??')) {
        fetch('/admin/location/deleteLocation/' + id)
        .then(response => {
            localStorage.setItem('success_msg', 'Location successfully deleted!');
            window.location.reload('http://localhost:3000/admin');
        })
        .catch(err => {
            console.log(err);
        })
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////// IMAGE STUFF ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

