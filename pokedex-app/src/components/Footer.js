import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__medaille'>
                <img src='./assets/footer/medaille.png'></img>
                <p>Created By PAPA, ANGIE, VINCE & 42.</p>
            </div>
            <div className='footer__media'>
                <div className='footer__media__liens'>
                    <a href='https://fr-fr.facebook.com/PokemonGO' target='_blank'>
                        <img src="./assets/footer/facebook.png" className='footer__media__facebook'></img>
                    </a>
                    <p>Facebook</p>
                </div>
                <div className='footer__media__liens'>
                <a href='https://twitter.com/Pokemon' target='_blank'>
                        <img src="./assets/footer/twitter.png"></img>
                    </a>
                    <p>Twitter</p>
                </div>
                <div className='footer__media__liens'>
                <a href='https://www.instagram/pokemon' target='_blank'>
                        <img src="./assets/footer/instagram.png"></img>
                    </a>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;