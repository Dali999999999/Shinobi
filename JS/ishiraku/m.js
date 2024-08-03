function main(consignes){
    // Mettre à jour la barre de progression
    updateProgressBar(10);
    // Changer le titre de la page
    document.getElementById('titre').innerText = consignes.texte;
    
    // Faire apparaître le conteneur des images
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.visibility = 'visible';
    imageContainer.style.opacity = '1';
    // Changer le texte du bouton
    const bouton = document.getElementById('bt');
    bouton.innerText = 'Continuer';
    // Retirer l'écouteur d'événement pour empêcher les actions de se répéter
    bouton.removeEventListener('click', demarrer);

}



function melangeur(consignes){
    const tableau1 = [consignes.images[0], consignes.images[1], consignes.images[2]];
    const melange1 = melangerTableau([...tableau1]);
    
    document.querySelectorAll('.responsive-image').forEach(img => {
    img.addEventListener('click', function(){
        img1.setAttribute ("src", melange1[0].back);
        img2.setAttribute ("src", melange1[1].back);
        img3.setAttribute ("src", melange1[2].back);
    });
    });

}