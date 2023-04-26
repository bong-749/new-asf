//CLICK ON SERACH ICON ACTION

document.getElementById('submit').onclick = function() {
    let searched = document.getElementById('search').value
    if (searched.length <= 0) {
        console.log('non')
    } else {
        let google = 'https://www.google.com/search?q=' + searched
        window.open(google, '_blank');
    } 
}

//PRESS ENTER ACTION
document.getElementById('search').addEventListener('keypress', (action) => {
    if (action.key === 'Enter') {
        let searched = document.getElementById('search').value
        if (searched.length <= 0) {
            console.log('non')
        } else {
            let google = 'https://www.google.com/search?q=' + searched
            window.open(google, '_blank');
        }
    }
})
