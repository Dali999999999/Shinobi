const consignes = [
    {
        id: 1,
        texte: "Vas prendre un bon bol de ramens chez Ichiraku, ça t'aidera à prendre des forces",
        images: [
            { back: "ishiraku/deidara.jpeg", points: 15, commentaire: "Une explosion pour commencer😂😂😂...!!!", correct: false},
            { back: "ishiraku/ishiraku.jpeg", points: 0, commentaire: "Bravo bonne chance...!!!", correct: true},
            { back: "ishiraku/sasori.jpeg", points: 15, commentaire: "Ah, un peu de poison de Sasori...!!!", correct: false}
        ]
    },
    {
        id: 2,
        texte: "Vas rencontrer Kakashi à l'ère d'entraînement pour une petite séance",
        images: [
            { back: "kakashi/gai.jpeg", points: 30, commentaire: "Ah là c'est pas bon pour toi unh...!!!", correct: false},
            { back: "kakashi/hiruzen.jpeg", points: 20, commentaire: "Oh le vieux papy😅...!!!", correct: false},
            { back: "kakashi/kakashi.jpeg", points: 0, commentaire: "Bravo, une bonne dose d'entrainement c'est bien...!!!", correct: true}
        ]
    },
    {
        id: 3,
        texte: "Vas rencontrer Jiraya pour apprendre le Rasengan",
        images: [
            { back: "jiraya/jiraya.jpeg", points: 0, commentaire: "Wouah,😱 t'es chanceux toi...!!!", correct: true},
            { back: "jiraya/minato.jpeg", points: 20, commentaire: "OUPS, DANGER!!!", correct: false},
            { back: "jiraya/orochimaru.jpeg", points: 15, commentaire: "oh là là...!!!", correct: false}
        ]
    },
    {
        id: 4,
        texte: "Vas retrouver Itachi pour qu'il t'enseigne le Katon c'est quand même la base",
        images: [
            { back: "itachi/itachi.jpeg", points: 0, commentaire: "Bingo 😎...!!!", correct: true},
            { back: "itachi/shisui.jpeg", points: 25, commentaire: "Ah là tu t'es fais rasé...!!!", correct: false},
            { back: "itachi/pain.jpeg", points: 20, commentaire: "SHINRA TENSEI 😂😂😂...!!!", correct: false}
        ]
    },
    {
        id: 5,
        texte: "Vas voir Sasuke pour qu'il t'enseigne le Chidori",
        images: [
            { back: "sasuke/fugaku.jpeg", points: 30, commentaire: "La mort assuré...!!!", correct: false},
            { back: "sasuke/indra.jpeg", points: 60, commentaire: "Et zut tu t'es fait grillé...!!!", correct: false},
            { back: "sasuke/sasuke.jpeg", points: 0, commentaire: "Hum, très bien...!!!", correct: true}
        ]
    },
    {
        id: 9,
        texte: "Élimine Danzo",
        images: [
            { back: "danzo/danzo.jpeg", points: 0, commentaire: "Danzo éliminé 🫠...!!!", correct: true},
            { back: "danzo/fu.jpeg", points: 10, commentaire: "OUPS ERREUR...!!!", correct: false},
            { back: "danzo/torune.jpeg", points: 10, commentaire: "Ah du poison...!!!", correct: false}
        ]
    },
    {
        id: 7,
        texte: "Vas rencontrer Roshi à Iwa",
        images: [
            { back: "roshi/han.jpeg", points: 15, commentaire: "Un peu de fumé...!!!", correct: false},
            { back: "roshi/kisame.jpeg", points: 20, commentaire: "Et voilà comment tu te fais bouffer par un requin😂😂😂...!!!", correct: false},
            { back: "roshi/roshi.jpeg", points: 0, commentaire: "Très bien...!!!", correct: true}
        ]
    },
    {
        id: 8,
        texte: "Élimine Kabuto",
        images: [
            { back: "kabuto/kabuto.jpeg", points: 0, commentaire: "Très bien, mission accomplie...!!!", correct: true},
            { back: "kabuto/madara.jpeg", points: 50, commentaire: "OUPS, t'es enterré unh 😂😂😂😂😂😂...!!!", correct: false},
            { back: "kabuto/obito.jpeg", points: 30, commentaire: "Hum...!!!", correct: false}
        ]
    },
    {
        id: 6,
        texte: "Vas rencontrer Naruto pour apprendre le mode ermite et le rasenshuriken...!!!",
        images: [
            { back: "naruto/ashura.jpeg", points: 50, commentaire: "Ah t'es foutu unh 😂😂😂...!!!", correct: false},
            { back: "naruto/hashirama.jpeg", points: 40, commentaire: "MORT SUBITE...!!!", correct: false},
            { back: "naruto/naruto.jpeg", points: 0, commentaire: "Bien joué😎...!!!", correct: true}
        ]
    },
    {
        id: 10,
        texte: "Élimine Sakura",
        images: [
            { back: "sakura/narutob.jpeg", points: 60, commentaire: "Toi t'es un cadavre mort 😂😂😂😂😂😂😂😂😂😂😂...!!!", correct: false},
            { back: "sakura/sasukef.jpeg", points: 40, commentaire: "Abandonne😂😂😂😂😂😂😂😂😂...!!!", correct: false},
            { back: "sakura/sakura.jpeg", points: 0, commentaire: "T'es passé à deux doigts de finir en brochette😂😂😂...!!!", correct: true}
        ]
    }
];
let life = 100; 
const img1 = document.querySelector('#image1');
const img2 = document.querySelector('#image2');
const img3 = document.querySelector('#image3');
let decompte = 0;

function mettreAJourBarreDeVieImmédiatement(points) {
  life -= points;
  mettreAJourBarreDeVie(life);
}

const musique = document.getElementById('musique');

function empecherClicsSurImages() {
  // Sélectionner toutes les images
  const images = document.querySelectorAll('img');

  // Ajouter un événement pour empêcher les clics sur les images
  images.forEach(img => {
    img.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
    });
  });
}

function feliciterJoueur() {
  // Créer une div pour la fenêtre de félicitations
  const felicitationDiv = document.createElement('div');
  felicitationDiv.classList.add('felicitation');

  // Ajouter du contenu à la fenêtre de félicitations
  felicitationDiv.innerHTML = `
    <h2> WoW Félicitations...!!!</h2>
    <p>Donc comme çà t'as de lavenir dans le monde des Shinobis...<br>
    Hmph...<br>Je suis... très très impressionne<br>Estime toi heureux d'avoir gagner cette partie<br>Et puis en attendant d'autres défis...<br>Portes toi bien...!!!<br>Ciao👌👋...!!!</p>
    <button id="fermer-felicitation">Fermer</button>
  `;

  // Ajouter la fenêtre de félicitations au milieu de la page
  document.body.appendChild(felicitationDiv);
  felicitationDiv.style.position = 'absolute';
  felicitationDiv.style.top = '50%';
  felicitationDiv.style.left = '50%';
  felicitationDiv.style.transform = 'translate(-50%, -50%)';

  // Ajouter du mouvement bref à la fenêtre de félicitations
  felicitationDiv.style.animation = 'felicitation 2s ease-in-out';

  // Ajouter un événement pour fermer la fenêtre de félicitations
  document.getElementById('fermer-felicitation').addEventListener('click', function() {
    felicitationDiv.remove();
  });
}

// Ajouter la fonction à votre code


function perte() {
  musique.pause();  
  const dialog = document.createElement('div');
  dialog.classList.add('dialog');
  dialog.innerHTML = `
    <h2>Tu as perdu...!!!</h2>
    <p>Et Voilà comment se termine ta life dans l'univers des Shinobis.😂😂😂😂
    Décidement, t'auras pas fais long feu...
    Mais tu peu toujours réessayer si tu veux. 
    Qui sais ? 
    La prochaine fois sera peut être la bonne 🫠😂...!!!</p>
    <button id="retry-button">Réessayer</button>
  `;
  document.body.appendChild(dialog);
  const retryButton = document.getElementById('retry-button');
  retryButton.addEventListener('click', () => {
    // Réactualiser la page et recommencer le jeu
    location.reload();
  });

  // Bloquer les clics sur les images et sur le bouton
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.pointerEvents = 'none';
  });
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    if (button !== retryButton) {
      button.style.pointerEvents = 'none';
    }
  });
}
function retour(){
    img1.setAttribute ("src", "background.jpeg");
    img2.setAttribute ("src", "background.jpeg");
    img3.setAttribute ("src", "background.jpeg");
}

function regulationimg(){
    // Empêcher d'autres clics sur les images
                    document.querySelectorAll('.responsive-image').forEach(img => {
                        img.style.pointerEvents = 'none';
                    });
}

function handleImageClick() {
  const images = document.querySelectorAll('.responsive-image');
  images.forEach(img => {
    img.classList.toggle('flipped');
  });
}
let point = 0;
function enableClicksimg() {
    // Réactiver les clics sur les images
    document.querySelectorAll('.responsive-image').forEach(img => {
        img.style.pointerEvents = 'auto';
    });
}

function mettreAJourLife(points) {
  life -= points;
  if (life < 0) {
    life = 0;
  }
  mettreAJourBarreDeVie(life);
}

function mettreAJourBarreDeVie(nouvelleVie) {
  // Vérifiez que la nouvelleVie est entre 0 et 100
  nouvelleVie = Math.max(0, Math.min(100, nouvelleVie));

  // Mettez à jour la hauteur de la barre de vie
  const progressBar = document.getElementById('vertical-progress-bar');
  progressBar.style.height = nouvelleVie + '%';

  // Changez la couleur de la barre en fonction de la valeur de vie
  if (nouvelleVie > 75) {
    progressBar.style.background = 'linear-gradient(to bottom, #4CAF50, #4CAF50)'; // Vert
  } else if (nouvelleVie > 50) {
    progressBar.style.background = 'linear-gradient(to bottom, #FFFF00, #FFFF00)'; // Jaune
  } else if (nouvelleVie > 25) {
    progressBar.style.background = 'linear-gradient(to bottom, #FFA500, #FFA500)'; // Orange
  } else {
    progressBar.style.background = 'linear-gradient(to bottom, #FF0000, #FF0000)'; // Rouge
  }
}
// Fonction pour afficher un message en fonction de l'ID de l'image
function afficherMessage(message) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = message;
    messageContainer.style.display = 'block';
}


function autoriserClickBouton() {
  const bouton = document.getElementById('bt');
  bouton.disabled = false;
}

function empecherClickBouton() {
  const bouton = document.getElementById('bt');
  bouton.disabled = true;
}


function melangerTableau(tableau) {
    for (let i = tableau.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    return tableau;
}

function updateProgressBar(pourcentage) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = pourcentage + '%';
}
//#
let clbut = 0;
const bouton = document.querySelector('#bt');
bouton.addEventListener('click', function(){
    musique.play();
    
    clbut++;
    
    if (clbut >= 1 && clbut <= 11) {
        document.getElementById('titre').innerText = consignes[clbut - 1].texte;
        updateProgressBar(clbut * 10);
        // Changer le texte du bouton
        const bouton = document.getElementById('bt');
        bouton.innerText = 'Continuer';
        // Faire apparaître le conteneur des images
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.visibility = 'visible';
    imageContainer.style.opacity = '1';
        const images = document.querySelectorAll('.responsive-image');
        images.forEach(img => {
            empecherClickBouton();
            enableClicksimg();
            img.addEventListener('click', handleImageClick);
            img.addEventListener('click', function(){
            const tableaumelanger = melangerTableau([...consignes[clbut - 1].images]);
            
            img1.setAttribute ("src", tableaumelanger[0].back);
            img2.setAttribute ("src", tableaumelanger[1].back);
            img3.setAttribute ("src", tableaumelanger[2].back);
            
                
                
        let imgclique = true;
        // Obtenez l'ID de l'image cliquée
        const imageId = this.id;
                
                if(imageId ==='image1'){
                    point = tableaumelanger[0].points;
                }else if(imageId === 'image2'){
                    point = tableaumelanger[1].points;
                }else if(imageId === 'image3'){
                    point = tableaumelanger[2].points;
                }
    
            
    // Définir un message spécifique pour chaque image
        let message;
        switch (imageId) {
            case 'image1':
                message = tableaumelanger[0].commentaire;
                break;
            case 'image2':
                message = tableaumelanger[1].commentaire;
                break;
            case 'image3':
                message = tableaumelanger[2].commentaire;
                break;
            // Ajoutez d'autres cas pour plus d'images
            default:
                message = 'Image non reconnue.';
                break;
        }
            afficherMessage(message);
                
        if(life > 0 && clbut === 11 && point === 0){
        empecherClickBouton();
        feliciterJoueur();
        empecherClicsSurImages();
    }
            
             if(life > 0 && clbut === 11){
        empecherClickBouton();
        feliciterJoueur();
    }   
                    
                
                
                

                
                
            regulationimg();
            autoriserClickBouton();
        });
            bouton.addEventListener('click',handleImageClick);
            bouton.addEventListener('click', retour);
            
        
            // Masquer le message lorsque le bouton Continuer est cliqué
            document.getElementById('bt').addEventListener('click', function() {
        const messageContainer = document.getElementById('message-container');
        messageContainer.style.display = 'none';
});

            
                    

            
    });
        
               
        mettreAJourLife(point);
        
            if ((life === 0 && clbut === 11) || (life === 0)){
                 perte();
            }
                point = 0 ;  
    }
    
       
});

bouton.addEventListener('click', function(){
    
});
  