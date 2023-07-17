// Consegna:

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Organizzare i singoli membri in card/schede

// Procedimento:

// MILESTONE 0: 

// Definire la variabile che conterrà l'array di oggetti
// Inserire all'interno di questo array i dati forniti(N.B. Inserisci la virgola dopo ogni valore e ricordati di formattare per una corretta visualizzazione dei dati)

const teamList = [
    {
        firstName: "Wayne",
        lastName: "Barnett",
        role: "Founder & CEO",
        img: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Caroll",
        role: "Chief Editor",
        img: "img/angela-caroll-chief-editor.jpg",
    },
    {
        firstName: "Walter",
        lastName: "Gordon",
        role: "Office Manage",
        img: "img/walter-gordon-office-manager.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Lopez",
        role: "Social Media Manager",
        img: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        firstName: "Scott",
        lastName: "Estrada",
        role: "Developer",
        img: "img/scott-estrada-developer.jpg",
    },
    {
        firstName: "Barbara",
        lastName: "Ramos",
        role: "Graphic Designer",
        img: "img/barbara-ramos-graphic-designer.jpg",
    },
];

// Procedimento:

// MILESTONE 1:

// Stampo attraverso la funzione console.log(nome variabile[key]) le chiavi e i valori di ogni singolo oggetto

for (let key in teamList) {
    console.log(teamList[key]);
}

// Procedimento:

// MILESTONE 2:

//Creo le cards


for (let i = 0; i <= teamList.length; i++) {
    
    const cards = document.getElementById("cards-container");
    const memberCard = teamList[i];

    //Stampo le cards all'interno del div con id ("cards-container") in html

    cards.innerHTML +=
    <img src="img/${memberCard.img}" class="card-img-top" alt="Member image">
    <div class="card-body text-center">
    <h3 class="card-title">${memberCard.firstName + " " + memberCard.lastName}</h3>
    <h4 class="card-text">${memberCard.role}</h4>
    </div>

}



