import React from 'react';

const Evolutions = () => {
    return (
        <div className='containerevolution'>
            <div className='containerevolution__title'>
                <p>Evolutions</p>
            </div>

            <div className='containerevolution__mainboxcard'>
                <div className='containerevolution__mainboxcard__cardevo1'>
                    <div className='card_evo'>
                        <figure className='card_evo_picture'>
                            <img src="" alt="" />
                        </figure>
                        <div className='card_evo_desc'>
                            <p><span>No. { }</span></p>
                            <h5>{translateName()}</h5>
                            <div className='card_evo_desc_abilities'>
                                <span className={`pill ${translateType()}`}>{translateType()}</span>
                            </div>
                            <div className='card_evo_desc_abilities'>
                                <span className={`pill ${translateType()}`}>{translateType()}</span>
                            </div>
                        </div>
                    </div>

                    <div className='containerevolution__mainboxcard__chevron1'></div>

                    <div className='containerevolution__mainboxcard__cardevo2'>
                        <div className='card_evo'>
                            <figure className='card_evo_picture'>
                                <img src={ } alt={ } />
                            </figure>
                            <div className='card_evo_desc'>
                                <p><span>No. { }</span></p>
                                <h5>{translateName()}</h5>
                                <div className='card_evo_desc_abilities'>
                                    <span className={`pill ${translateType()}`}>{translateType()}</span>
                                </div>
                                <div className='card_evo_desc_abilities'>
                                    <span className={`pill ${translateType()}`}>{translateType()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='containerevolution__mainboxcard__chevron2'></div>

                    <div className='containerevolution__mainboxcard__cardevo3'>
                        <div className='card_evo'>
                            <figure className='card_evo_picture'>
                                <img src={ } alt={ } />
                            </figure>
                            <div className='card_evo_desc'>
                                <p><span>No. { }</span></p>
                                <h5>{translateName()}</h5>
                                <div className='card_evo_desc_abilities'>
                                    <span className={`pill ${translateType()}`}>{translateType()}</span>
                                </div>
                                <div className='card_evo_desc_abilities'>
                                    <span className={`pill ${translateType()}`}>{translateType()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Evolutions;