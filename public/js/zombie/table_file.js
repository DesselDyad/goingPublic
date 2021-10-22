/* document.addEventListener('DOMContentLoaded', () => {
    // console.log('gets here ')
    let table = document.querySelector('.zombie_parse_table');
    let rows = Array.from(table.getElementsByTagName('tr'));
    let myArr = [];
    for (let i = 2; i < rows.length; i++) {
        // console.log(rows[i]);
        let tds = Array.from(rows[i].getElementsByTagName('td'));
        fetch('/zombieMovies', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(
                {
                    name: tds[0].innerHTML.trim(),
                    director: tds[1].innerHTML.trim(),
                    year: tds[2].innerHTML.trim(),
                    notes: tds[3].innerHTML.trim()
                }),
            'mode': 'cors',
            'cache': 'default'
        })
        .then(result => {
            console.log(result)
            return result.json();
        })
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.log(e);
        })
    }
}) */