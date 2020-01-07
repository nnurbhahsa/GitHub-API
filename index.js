function retrieveData () {
    let link1 = "https://api.github.com/users/";
    let link2 = "/repos";
    let username = $('#userName').val();
    const url = link1 + username + link2;

    fetch(url)
    .then(( (response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }))
    .then(responseJson => displayData(responseJson))
    .catch(err => $('#errorMsg').text(`Something went wrong: ${err.message}`));
}

function displayData(responseJson) {
    
    $('.results').empty();
    for(let idx = 0; idx < responseJson.length; idx++) {
        $('.results').append(
            `<li>${responseJson[idx].name}
            <a href="${responseJson[idx].url}">Repo</a>
            </li>`
        )
    }

}

function formSubmit() {
    $('form').submit(function (event) {
        event.preventDefault();
        retrieveData();
    })
}

formSubmit();