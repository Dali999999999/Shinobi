let currentStep = 0;
let life = 100; 

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.responsive-image');
    
    images.forEach(img => {
        img.addEventListener('click', handleImageClick);
    });
    
    const bouton = document.getElementById('bt');
    bouton.addEventListener('click', handleContinueClick);
});

function retour(){
    img1.setAttribute ("src", "background.jpeg");
    img2.setAttribute ("src", "background.jpeg");
    img3.setAttribute ("src", "background.jpeg");
}

function updateProgressBar(pourcentage) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = pourcentage + '%';
}

const colorScale = [
    // ... (tes couleurs)
];

const reversedColorScale = colorScale.reverse();

function updateLifeBar(life) {
    for (let i = 0; i <= 99; i++){
        if (life === i){
            const progressBar = document.getElementById('vertical-progress-bar');
            progressBar.style.backgroundColor = reversedColorScale[i];
        }
    }
}

function flipImages() {
    const images = document.querySelectorAll('.responsive-image');
    images.forEach(img => {
        img.classList.add('flipped');
    });
}

function handleImageClick() {
    const images = document.querySelectorAll('.responsive-image');
    images.forEach(img => {
        img.classList.add('flipped');
    });

    const imageId = this.id;
    const consigne = consignes[currentStep];
    let message;

    switch (imageId) {
        case 'image1':
            message = consigne.images[0].commentaire;
            updateLifeBar(life - consigne.images[0].points);
            break;
        case 'image2':
            message = consigne.images[1].commentaire;
            updateLifeBar(life - consigne.images[1].points);
            break;
        case 'image3':
            message = consigne.images[2].commentaire;
            updateLifeBar(life - consigne.images[2].points);
            break;
        default:
            message = 'Image non reconnue.';
            break;
    }

    afficherMessage(message);
    regulationimg();
}

function afficherMessage(message) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = message;
    messageContainer.style.display = 'block';
}

function regulationimg(){
    document.querySelectorAll('.responsive-image').forEach(img => {
        img.style.pointerEvents = 'none';
    });
}

function enableClicksimg() {
    document.querySelectorAll('.responsive-image').forEach(img => {
        img.style.pointerEvents = 'auto';
    });
}

function melangerTableau(tableau) {
    for (let i = tableau.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    return tableau;
}

function mettreAJourBarreDeVie(nouvelleVie) {
    nouvelleVie = Math.max(0, Math.min(100, nouvelleVie));
    const progressBar = document.getElementById('vertical-progress-bar');
    progressBar.style.height = `${nouvelleVie}%`;
    life = nouvelleVie;
}

function demarrer() {
    updateProgressBar((currentStep + 1) * 10);
    document.getElementById('titre').innerText = consignes[currentStep].texte;

    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.visibility = 'visible';
    imageContainer.style.opacity = '1';

    const bouton = document.getElementById('bt');
    bouton.innerText = 'Continuer';

    loadImagesForCurrentStep();
}

function loadImagesForCurrentStep() {
    const consigne = consignes[currentStep];
    const melange = melangerTableau([...consigne.images]);

    img1.setAttribute ("src", melange[0].back);
    img2.setAttribute ("src", melange[1].back);
    img3.setAttribute ("src", melange[2].back);

    document.querySelectorAll('.responsive-image').forEach((img, index) => {
        img.onclick = function() {
            handleImageClick.apply({id: `image${index + 1}`});
        };
    });
}

function handleContinueClick() {
    const messageContainer = document.getElementById('message-container');
    messageContainer.style.display = 'none';
    retour();
    enableClicksimg();

    currentStep++;
    if (currentStep < consignes.length) {
        demarrer();
    } else {
        // Fin du jeu
        alert('Félicitations, vous avez terminé le jeu !');
    }
}

// Fonction pour démarrer le jeu au clic du bouton
function deb(){
    const boutonCommencer = document.getElementById('bt');
    boutonCommencer.addEventListener('click', demarrer);
}

deb();













//___________________________________________________________________________________
























const img1 = document.querySelector('#image1');
const img2 = document.querySelector('#image2');
const img3 = document.querySelector('#image3');


function retour(){
    img1.setAttribute ("src", "background.jpeg");
    img2.setAttribute ("src", "background.jpeg");
    img3.setAttribute ("src", "background.jpeg");
}
// Fonction pour mettre à jour la barre de progression
function updateProgressBar(pourcentage) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = pourcentage + '%';
}

const olorScale = [
    "#00FF00", "#00FF00", "#00FF00", "#00FF00", "#00FF00", // Green
    "#66FF00", "#66FF00", "#66FF00", "#66FF00", "#66FF00", 
    "#CCFF00", "#CCFF00", "#CCFF00", "#CCFF00", "#CCFF00",
    "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00", // Yellow
    "#FFCC00", "#FFCC00", "#FFCC00", "#FFCC00", "#FFCC00", 
    "#FF9900", "#FF9900", "#FF9900", "#FF9900", "#FF9900", 
    "#FF6600", "#FF6600", "#FF6600", "#FF6600", "#FF6600",
    "#FF3300", "#FF3300", "#FF3300", "#FF3300", "#FF3300",
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", // Red
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", 
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", 
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", 
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", 
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", 
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", 
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", 
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", 
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", 
    "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"
];

// Inverser le tableau
const eversedColorScale = colorScale.reverse();

for (let i = 0; i <= 99; i++){
    if (life === i){
        const progressBar = document.getElementById('vertical-progress-bar');
        progressBar.style.backgroundColor = reversedColorScale[i];
    }
}

function flipImages() {
    const images = document.querySelectorAll('.responsive-image');
    images.forEach(img => {
        img.classList.add('flipped');
    });
}

function flipAllImages() {
    const images = document.querySelectorAll('.responsive-image');
    
    images.forEach(img => {
        img.classList.add('flipped');
    });
}


const images = document.querySelectorAll('.responsive-image');

function handleImageClick() {
    images.forEach(img => {
        img.classList.add('flipped');
    });
}

// Fonction pour démarrer le processus lors du clic sur "Commencer"
function demarrer() {
    // Mettre à jour la barre de progression
    updateProgressBar(10);

    // Changer le titre de la page
    document.getElementById('titre').innerText = consignes[0].texte;

    // Faire apparaître le conteneur des images
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.visibility = 'visible';
    imageContainer.style.opacity = '1';

    // Changer le texte du bouton
    const bouton = document.getElementById('bt');
    bouton.innerText = 'Continuer';
    
    //Mélange des images...!!!
const tableau1 = [...consignes[0].images];
const melange1 = melangerTableau([...tableau1]);
// changement des sources des images au clique...!!!
document.querySelectorAll('.responsive-image').forEach(img => {
    img.addEventListener('click', function(){
        
        img1.setAttribute ("src", melange1[0].back);
        img2.setAttribute ("src", melange1[1].back);
        img3.setAttribute ("src", melange1[2].back);
    });
    });





// determiner quel message sera afficher à partir de l'ID de l'image cliquée
         // Écouteurs d'événements pour chaque image
document.querySelectorAll('.responsive-image').forEach(img => {
    img.addEventListener('click', function() {
        let imgclique = true;
        // Obtenez l'ID de l'image cliquée
        const imageId = this.id;
        
    // Définir un message spécifique pour chaque image
        let message;
        switch (imageId) {
            case 'image1':
                message = melange1[0].commentaire;
                mettreAJourBarreDeVie(life - melange1[0].points);
                break;
            case 'image2':
                message = melange1[1].commentaire;
                mettreAJourBarreDeVie(life - melange1[1].points);
                break;
            case 'image3':
                message = melange1[2].commentaire;
                mettreAJourBarreDeVie(life - melange1[2].points);
                break;
            // Ajoutez d'autres cas pour plus d'images
            default:
                message = 'Image non reconnue.';
                break;
        }
        
        
            afficherMessage(message);
    
        regulationimg();
        
    });
         

     
 });





}
// Fonction pour afficher un message en fonction de l'ID de l'image
function afficherMessage(message) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = message;
    messageContainer.style.display = 'block';
}




function regulationimg(){
    // Empêcher d'autres clics sur les images
                    document.querySelectorAll('.responsive-image').forEach(img => {
                        img.style.pointerEvents = 'none';
                    });
}

function enableClicksimg() {
    // Réactiver les clics sur les images
    document.querySelectorAll('.responsive-image').forEach(img => {
        img.style.pointerEvents = 'auto';
    });
}


function melangerTableau(tableau) {
    for (let i = tableau.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    return tableau;
}

// Fonction pour mettre à jour la barre de vie
function mettreAJourBarreDeVie(nouvelleVie) {
    // Vérifiez que la nouvelleVie est entre 0 et 100
    nouvelleVie = Math.max(0, Math.min(100, nouvelleVie));
    
    // Mettez à jour la hauteur de la barre de vie
    const progressBar = document.getElementById('vertical-progress-bar');
    progressBar.style.height = `${nouvelleVie}%`;
    
    // Mettez à jour la variable life
    life = nouvelleVie;
}


//_______________________Déblut du jeu________________________________________
       // PREMIER MOUVEMENT_________________________
// Ajouter un gestionnaire d'événement de clic au bouton "Commencer
function deb(){
    const boutonCommencer = document.getElementById('bt');
    boutonCommencer.addEventListener('click', demarrer);
    
    //Retournement des images...!!!

    document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.responsive-image');
    
    images.forEach(img => {
        img.addEventListener('click', handleImageClick);
    });
});

}
function deb2(){
    document.getElementById('bt').addEventListener('click', function(){
        document.getElementById('titre').innerText = consignes[1].texte;
        retour();
        enableClicksimg();
        //Mélange des images...!!!
const tableau2 = [...consignes[1].images];
const melange2 = melangerTableau([...tableau2]);
// changement des sources des images au clique...!!!
document.querySelectorAll('.responsive-image').forEach(img => {
    img.addEventListener('click', function(){
        
        img1.setAttribute ("src", melange2[0].back);
        img2.setAttribute ("src", melange2[1].back);
        img3.setAttribute ("src", melange2[2].back);
    });
    });

        
    });
    
    
    // determiner quel message sera afficher à partir de l'ID de l'image cliquée
         // Écouteurs d'événements pour chaque image
document.querySelectorAll('.responsive-image').forEach(img => {
    img.addEventListener('click', function() {
        let imgclique = true;
        // Obtenez l'ID de l'image cliquée
        const imageId = this.id;
        
    // Définir un message spécifique pour chaque image
        let message;
        switch (imageId) {
            case 'image1':
                message = melange1[0].commentaire;
                mettreAJourBarreDeVie(life - melange1[0].points);
                break;
            case 'image2':
                message = melange1[1].commentaire;
                mettreAJourBarreDeVie(life - melange1[1].points);
                break;
            case 'image3':
                message = melange1[2].commentaire;
                mettreAJourBarreDeVie(life - melange1[2].points);
                break;
            // Ajoutez d'autres cas pour plus d'images
            default:
                message = 'Image non reconnue.';
                break;
        }
        
        
            afficherMessage(message);
    
        regulationimg();
        
    });
         

     
 });

}
deb();
// Masquer le message lorsque le bouton Continuer est cliqué
document.getElementById('bt').addEventListener('click', function() {
    const messageContainer = document.getElementById('message-container');
    messageContainer.style.display = 'none';
    
});

deb2();







image1.addEventListener('click', function(){
    message = 
});
image2.addEventListener('click', () => handleImageClick(consignes[0].images[1]));
image3.addEventListener('click', () => handleImageClick(consignes[0].images[2]));























    