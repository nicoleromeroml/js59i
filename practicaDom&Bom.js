function publicar(event) {
    event.preventDefault()

const tweet = document.getElementById('tweet');
const tweetText = tweet.value;
const newTweet = document.createElement('div');
const id = new Date().getTime();
console.log(id)
newTweet.id = id; 
newTweet.innerHTML = `
<p>${tweetText}</p>
<button class="btn btn-danger d-block ms-auto" onclick="eliminarTweet(${id})">Eliminar tweet</button>
`
newTweet.classList.add('text-light', 'bg-dark', 'p-5', 'my-2');
const tweetContainer = document.querySelector('.contenedor-tweet');
tweetContainer.appendChild(newTweet);
document.querySelector('form').reset()


}



function eliminarTweet (id) {
    const tweetToDelete = document.getElementById(id);
    tweetToDelete.remove()

}