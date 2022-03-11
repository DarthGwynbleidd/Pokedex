import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import BackUpContext from '../contexts/BackupContext'

const NotFound = () => {
    const { setBackUp } = useContext(BackUpContext)
    return (
        <div className='notFound'>
            <div className='notFound__navigbar'>
                <div className='notFound__navigbar__bottom'>
                    <div className='notFound__navigbar__bottom__blocLeft'>
                        <div className='notFound__navigbar__bottom__blocLeft__leftSup'></div>
                        <div className='notFound__navigbar__bottom__blocLeft__leftInf'></div>
                    </div>
                    {/* <div className='notFound__navigbar__bottom__center'>RETOUR</div> */}
                    <NavLink onClick={setBackUp(prevBackUp => prevBackUp = true)} to="/" className='notFound__navigbar__bottom__center'>
                    Retour
                </NavLink>
                    <div className='notFound__navigbar__bottom__blocRight'>
                        <div className='notFound__navigbar__bottom__blocRight__rightSup'></div>
                        <div className='notFound__navigbar__bottom__blocRight__rightInf'></div>
                    </div>
                </div>
            </div>

            <div className='notFound__haut'>
                <div className='notFound__haut__first4'>4</div>
                <img className='notFound__haut__picture' src='./assets/404/pikachu_2.gif'></img>
                <div className='notFound__haut__second4'>4</div>
            </div>
            <div className='notFound__bas'>
                <div className='notFound__text'>Oups.. Il semblerait que
                    <span> PIKACHU</span> ne trouve pas réponse à ta requête</div>
            </div>
        </div>
    );
};

export default NotFound;