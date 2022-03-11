import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__medaille'>
                <img src='./assets/footer/medaille.png' alt=""></img>
                <p>Created By ANGIE, VINCE, PAPA & 42.</p>
            </div>
            <div className='footer__media'>
                <div className='footer__media__liens'>
                    <a href='https://fr-fr.facebook.com/PokemonGO' rel="noreferrer" target='_blank'>
                        <img src="./assets/footer/facebook.png" alt='' className='footer__media__facebook'></img>
                    </a>
                    <p>Facebook</p>
                </div>
                <div className='footer__media__liens'>
                    <a href='https://twitter.com/Pokemon' rel="noreferrer" target='_blank'>
                        <img src="./assets/footer/twitter.png" alt=""></img>
                    </a>
                    <p>Twitter</p>
                </div>
                <div className='footer__media__liens'>
                    <a href='https://www.instagram/pokemon' rel="noreferrer" target='_blank'>
                        <img src="./assets/footer/instagram.png" alt=""></img>
                    </a>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;