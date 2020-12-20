import React from 'react';
import '../../styles/Main.css'
import couchImage from '../../assets/photo-couch.jpg';

const Main = () => {
    return (
        <div className="main_wrapper">
            <img src={couchImage} width={'100%'} alt={'Couch background'} />
        </div>
    )
}

export default Main;