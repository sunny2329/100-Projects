const searchGithub = async() => {
    const username = document.querySelector('#searchInput').value;
    const response = await fetch(`https://api.github.com/users/${username}`);

    const details = document.querySelector('.details');
    const data = await response.json();
    if(response.ok){
        details.style.display = "flex";
        document.getElementById('results').innerHTML = `
        <div class = "profile">
            <div class = "profile-image">
                <img src="${data.avatar_url}" > 
            </div>
        </div>    
        `
    }
}