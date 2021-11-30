let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let userText = searchUser.value;
    if (userText != '') {

        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => {
                if (data.message == 'Not Found') {
                    ui.showAlert('User is not Found!', 'alert red');
                } else {
                    //Sho Profile
                    ui.showProfile(data);
                }
            })
    } else {
        //Cleare Profile
        ui.cleareProfile();
    }

});