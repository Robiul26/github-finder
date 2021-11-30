class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <aside>
        <img src="${user.avatar_url}" alt="User Avatar">
        <a href="${user.html_url}">View Profile</a>
    </aside>
    <article>
        <div class="buttons-wrapper">
            <div class="blue">Public Repos: ${user.public_repos}</div>
            <div class="gray">Public Gists: ${user.public_gists}</div>
            <div class="green">Followers: ${user.followers}</div>
            <div class="gray">Follwing: ${user.following}</div>
        </div>
        <div class="detais">
            <ul>
                <li>Company: ${user.company}</li>
                <li>Website/Blog: ${user.blog}</li>
                <li>Location: ${user.location}</li>
                <li>Member Since: ${user.created_at}</li>
            </ul>
        </div>
    </article>
        
        `;
    }

    cleareProfile() {
        this.clearAlert();
        this.profile.innerHTML = "";
    }

    showAlert(message, className) {
        this.clearAlert();
        this.cleareProfile();
        let alertBox = document.createElement('p');
        alertBox.className = className;
        alertBox.innerText = message;
        // alertBox.appendChild(document.createTextNode(message));

        let container = document.querySelector('.searchContainer');
        let formHead = document.querySelector('#form-head');
        container.insertBefore(alertBox, formHead);
        // console.log(alertBox);
    }

    clearAlert() {
        let currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}