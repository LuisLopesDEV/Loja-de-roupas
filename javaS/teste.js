const form = document.getElementById('searchMenu');
const search = document.getElementById('search');

search.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const searchValue = search.value
        form.submit();
        console.log(searchValue);
    }
})

