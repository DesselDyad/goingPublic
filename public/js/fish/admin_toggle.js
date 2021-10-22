//this beautiful piece of code takes care of toggleing visibility for the different containers on the admin pages overview
//as well as toggleing css classes on the buttons, indicating which entity is being looked at
Array.from(document.getElementsByClassName('admin_btn')).forEach(btn => {
    //add eventlisteners to all buttons
    btn.addEventListener('click', e => {
        e.preventDefault();
        //populate a second array with the same buttons, for dynamic comparison
        Array.from(document.getElementsByClassName('admin_btn')).forEach(button => {
            //remove site location indication
            button.classList.remove('btn_clicked');
            //essentially, if the button is not the one being clicked, hide the corresponding container
            if(btn.dataset.container != button.dataset.container) {
                if(document.querySelector('.' + button.dataset.container)) {
                    document.querySelector('.' + button.dataset.container).classList.add('hidden');
                }
            } else {
                //if the button is the one being clicked, show the container
                button.classList.add('btn_clicked');
                if(document.querySelector('.' + button.dataset.container)) {
                    document.querySelector('.' + button.dataset.container).classList.remove('hidden');
                }
            }
        })
    })
})

if(document.querySelector('.add_fish_species_btn')) {
    document.querySelector('.add_fish_species_btn').addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.add_fish_species_div').classList.toggle('hidden');
    })
}

if(document.querySelector('.add_fish_btn')) {
    document.querySelector('.add_fish_btn').addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.add_fish_div').classList.toggle('hidden');
    })
}

if(document.querySelector('.add_location_btn')) {
    document.querySelector('.add_location_btn').addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.add_location_div').classList.toggle('hidden');
    })
}

if(document.querySelector('.add_subscriber_btn')) {
    document.querySelector('.add_subscriber_btn').addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.add_subscriber_div').classList.toggle('hidden');
    })
}

if(document.querySelector('.add_user_btn')) {
    document.querySelector('.add_user_btn').addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.add_user_div').classList.toggle('hidden');
    })
}

function toggle_new_user() {
    document.querySelector('.add_user_div').classList.toggle('hidden');
}