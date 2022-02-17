import React, {useState} from 'react';

const BottomButton = () => {
    const [apparait, setApparait] = useState(false);
    const [leftMargin, setLeftMargin] = useState();
    // Initialisation du bottom_button__up à 100px du bas de la page
    const [bottomMargin, setBottomMargin] = useState(100);

    const calculLeftArrow = ()=>{
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

    window.onscroll = () => {
        setApparait (document.documentElement.scrollTop > 400? true : false);
        
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
        if (calc < 0) setBottomMargin(-calc + 20);

        calculLeftArrow();
    }
    return (
        <div className='bottom_button'>
            <div className='bottom_button__more'>
                <button onClick={() => {}}>Charger d'autres Pokémons</button>
            </div>
            <div className={apparait? 'bottom_button__up' : 'bottom_button__up__no'} style={{left:leftMargin + 'px', bottom: bottomMargin + "px"}}>
                <img src='./assets/fleche_haut.png' alt='Fleche'></img>
            </div>
        </div>
    );
};

export default BottomButton;