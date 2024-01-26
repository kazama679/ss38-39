document.getElementById('searchIcon').addEventListener('click', function() {
    var searchBar = document.getElementById('searchBar');
    
    if(searchBar.style.display === 'none') {
        searchBar.style.display = 'inline-block';
    } else {
        searchBar.style.display = 'none';
    }
});