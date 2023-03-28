const BASE_URL = "https://api.thecatapi.com/v1/images/search";
const catButton = document.getElementById('change-cat')
const section = document.querySelector('.container')

catButton.addEventListener('click', getRandomCats)

randomCatPhoto = (json) =>{

    let photo = json[0].url
    section.classList.add('cat')

    let image = document.createElement('img');
    image.src = photo
    section.appendChild(image)

}

async function getRandomCats(){
    section.innerHTML = ''
    try{
        const response = await fetch(BASE_URL)
        const json = await response.json()
        
        return randomCatPhoto(json)

    }catch(e){
        console.log('deu erro')
        console.log(e)
    }

}