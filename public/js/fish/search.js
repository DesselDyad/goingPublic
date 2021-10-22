window.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('#users_search_title')) {
        document.querySelector('#users_search_title').addEventListener('click', () => {
            document.querySelector('#users_search_title').classList.remove('glyphicon-chevron-down');
            document.querySelector('#users_search_title').classList.remove('glyphicon-chevron-up');
            document.querySelector('.users_search_section').classList.toggle('hidden');
            document.querySelector('.locations_search_section').classList.add('hidden');
            document.querySelector('.fish_search_section').classList.add('hidden');
            document.querySelector('.fish_species_search_section').classList.add('hidden');
        })
    }
    if(document.querySelector('#locations_search_title')) {
        document.querySelector('#locations_search_title').addEventListener('click', () => {
            document.querySelector('#locations_search_title').classList.remove('glyphicon-chevron-down');
            document.querySelector('#locations_search_title').classList.remove('glyphicon-chevron-up');
            document.querySelector('.locations_search_section').classList.toggle('hidden');
            document.querySelector('.users_search_section').classList.add('hidden');
            document.querySelector('.fish_search_section').classList.add('hidden');
            document.querySelector('.fish_species_search_section').classList.add('hidden');
        })
    }
    if(document.querySelector('#fish_search_title')) {
        document.querySelector('#fish_search_title').addEventListener('click', () => {
            document.querySelector('#fish_search_title').classList.remove('glyphicon-chevron-down');
            document.querySelector('#fish_search_title').classList.remove('glyphicon-chevron-up');
            document.querySelector('.fish_search_section').classList.toggle('hidden');
            document.querySelector('.users_search_section').classList.add('hidden');
            document.querySelector('.locations_search_section').classList.add('hidden');
            document.querySelector('.fish_species_search_section').classList.add('hidden');
        })
    }
    if(document.querySelector('#fish_species_search_title')) {
        document.querySelector('#fish_species_search_title').addEventListener('click', () => {
            document.querySelector('#fish_species_search_title').classList.remove('glyphicon-chevron-down');
            document.querySelector('#fish_species_search_title').classList.remove('glyphicon-chevron-up');
            document.querySelector('.fish_species_search_section').classList.toggle('hidden');
            document.querySelector('.locations_search_section').classList.add('hidden');
            document.querySelector('.users_search_section').classList.add('hidden');
            document.querySelector('.fish_search_section').classList.add('hidden');
        })
    }
});