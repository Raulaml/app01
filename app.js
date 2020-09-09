const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');

const meme = {
    image: document.getElementById('meme-image'),
    title: document.getElementById('meme-image'),
    author: document.getElementById('meme-author')
}


const categories = {
    dogs:{
        button: document.getElementById('dogs-link'),
        content: document.getElementById('dogs')
    },
    cats: document.getElementById('cats'),
    mices: document.getElementById('mices')
}

let dogList = [
    {
        name: "chihuahua",
        region: "Mexico",
        description: "A tiny noisy dog"
    },
    {
        name: "beagle",
        region: "England",
        description: "A medium hunting dog"
    },
    {
        name: "german shepherd",
        region: "Germany",
        description: "Big dog for farms"
    },
    {
        name: "husky",
        region: "Siberia",
        description: "Big dog for rescue work"
    },
];

let catList = [
    {
        name: "ocicat cat breed",
        region: "USA",
        description: "gato feo"
    },
    {
        name: "siberian cat breed",
        region: "Rusia",
        description: "gato feo"
    },
    {
        name: "bengal cat",
        region: "USA",
        description: "gato bonito"
    },
    {
        name: "charteaux cat breed",
        region: "Francia",
        description: "gato gordo"
    },
];



categories.dogs.button.onclick = ()=> {
    if(categories.dogs.content.innerHTML){
        categories.dogs.content.innerHTML = '';

        return;
    }
    dogList.forEach(dog =>{
        categories.dogs.innerHTML += `<li>
            <span>${dog.name}</span>
            <div>region: ${dog.region}</div>
            <div>description:${dog.description}</div>
        </li>`;
    });

    categories.cats.button.onclick = ()=> {
        if(categories.cats.content.innerHTML){
            categories.cats.content.innerHTML = '';
    
            return;
        }
        dogList.forEach(cat =>{
            categories.cats.innerHTML += `<li>
                <span>${cat.name}</span>
                <div>region: ${cat.region}</div>
                <div>description:${cat.description}</div>
            </li>`;
        });
    }
}

const GetMemes = async ()=>{
    const data = await fetch('https://meme-api.herokuapp.com/gimme')
    const josonData = await data.json();
    
    const {url, author, nsfw, postLink, spoiler, rubreddit, title} = josonData; //desestructuracion del json
    meme.title.innerHTML = `title: ${title}`;
    meme.author.innerHTML = `author: ${author}`;
    meme.image.src = url;
}

GetMemes();