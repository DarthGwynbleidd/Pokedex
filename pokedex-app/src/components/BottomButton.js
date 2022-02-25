import React, { useState } from 'react';

const BottomButton = (props) => {
    const [apparaitUp, setApparaitUp] = useState(false);
    const [apparaitMore, setApparaitMore] = useState(true);
    const [leftMargin, setLeftMargin] = useState();
    // Initialisation du bottom_button__up à 100px du bas de la page
    const [bottomMargin, setBottomMargin] = useState(100);

    const calculLeftArrow = () => {
        /*
        offsetWidth = largeur du navigateur
        .cardsPage.offsetWidth = la largeur du contenu principal
        Différence navigateur et contenu => ça me donne l'espace libre de contenu
        Division par 2, car j'ai à gauche comme à droite la meme marge
        Rajouter de la largeur du contenu pour me placer à droite
        ex :    Navigateur = 1280px
                Contenu = 980px
                Différence = 300px / 2(pour la marge de gauche)
                150px + 980px => 1130px de la gauche de mon écran
        */
        setLeftMargin(((+document.documentElement.offsetWidth - +document.querySelector('.cardsPage').offsetWidth) / 2) + +document.querySelector('.cardsPage').offsetWidth - 60);
    }

    window.addEventListener('resize', () => {
        calculLeftArrow();
    })
    let memoire = 0;

    window.onscroll = () => {
        // Fait apparaitre la flêche dès que le scroll atteint 400
        setApparaitUp(document.documentElement.scrollTop > 400 ? true : false);
        // Fait disparaitre le bouton 'charger plus de pokémons' dès que la page dépasse
        // les 2200 px (ce qui correspond à 24 pokémons d'affichés)
        setApparaitMore(document.documentElement.offsetHeight < 2200 ? true : false);
 
        // Envoie une requête pour charger 12 pokémons supplémentaires dès que le scroll
        // arrive à moins de 1000px du bas le la page.
        if (!apparaitMore) {
            if (+document.documentElement.offsetHeight !== memoire) {
                const position = document.documentElement.offsetHeight - document.documentElement.scrollTop;
                if ( position < 1000) {
                    // remonte le scroll au dessus de 1100px avant de charger les nouveaux pokémons
                    // afin de ne pas plusieurs requêtes en même temps
                    document.documentElement.scrollTop = document.documentElement.offsetHeight - 1300;
                    memoire = document.documentElement.offsetHeight;
                    props.setGroup(prevGroup => prevGroup + 12);
                }
            }
        }

        // Hauteur de la div footer
        const heightFooter = document.querySelector('.footer').offsetHeight;
        // Hauteur de la page web complète
        const heightComplete = document.documentElement.offsetHeight;
        // Top du scroll dès un scroll
        const topScroll = document.documentElement.scrollTop;
        // Hauteur du navigateur
        const heightNav = document.documentElement.clientHeight;
        // Calcul pour déterminer au scroll lorsque j'arrive juste avant
        // le footer pour bloquer le bottom_button__up
        const calc = (heightComplete - heightFooter) - (topScroll + heightNav);

        // condition pour garder à 100px la flèche tant que je ne suis pas arrivé
        // juste au dessus du footer.
        // le résultat étant une différence, j'inverse le signe pour qu'il reste positif
        // ex calc = -20 => 20 + 20 = 40 => bottom: 40px
        // ex calc = 1278 => bottom: 100px(initialisé dans le useState)
        setBottomMargin(calc < 0? -calc + 20 : 50);

        calculLeftArrow();
    }

    // remet le scroll à 300 afin de voir la barre de recherche
    const backTop = () => {
        document.documentElement.scrollTop = 300;
    }

    return (
        <div className='bottom_button'>
            <div className={apparaitMore ? 'bottom_button__more' : 'bottom_button__more__no'}>
                <button onClick={() => { props.setGroup(prevGroup => prevGroup + 12) }}>Charger d'autres Pokémons</button>
            </div>
            <div className={apparaitUp ? 'bottom_button__up' : 'bottom_button__up__no'} style={{ left: leftMargin + 'px', bottom: bottomMargin + "px" }}>
                <img src='./assets/fleche_haut.png' alt='Fleche' onClick={backTop}></img>
            </div>
        </div>
    );
};

export default BottomButton;