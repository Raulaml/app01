const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');


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
    "ocicat cat breed",
    "siberian cat breed",
    "bengal cat",
    "chartreux cat",
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
}


/*dogList.forEach(dog =>{
       categories.dogs.innerHTML += `<li>${dog}<li>`;
});

catList.forEach(cat =>{
    categories.cats.innerHTML += `<li>${cat}<li>`
});

}*/
