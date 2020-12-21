import React from 'react';
import couchImage from '../../assets/photo-couch.jpg';

const Main = () => {
    return (
        <div>
            <img src={couchImage} width={'100%'} alt={'Couch background'} />
        </div>
    )
}

export default Main;