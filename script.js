let main = document.querySelector('#main');
const API_URL = 'https://api.github.com/users/';
let searchBox = document.querySelector('#search-box');
let fetchData = function(username){
        let card = document.createElement('div');
    card.id = 'card';


    const requestUrl = API_URL+username;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', requestUrl);
    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState);

        if(xhr.readyState === 4){
            const data = JSON.parse(this.responseText);
            // console.log(data);
            // console.log(typeof data);
            console.log(data.name);
            card.innerHTML = `<div id="left-div">
            <img
              id="img"
              src="${data.avatar_url}"
              alt="Profile Image"
            />
          </div>
          <div id="right-div">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>
            <div id="row">
              <p>${data.following}<strong> Following</strong></p>
              <p>${data.followers}<strong> Followers</strong></p>
              <p>${data.public_repos}<strong> Repositories</strong></p>
            </div>
          </div>`;
            main.appendChild(card)
        }
    }

    xhr.send();


   

}


searchBox.addEventListener('keyup', function(event){

    if(event.key === 'Enter'){
        
        fetchData(this.value);
        this.value = ''
    }


}, false)




/**
<script>
    const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            console.log(typeof data);
            console.log(data.followers);
        }
    }
    xhr.send();
</script>
 * 
 * 
 */
// readyState  
// 0	        UNSENT	Client has been created. open() not called yet.
// 1	        OPENED	open() has been called.
// 2	        HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	        LOADING	Downloading; responseText holds partial data.
// 4	        DONE	The operation is complete.