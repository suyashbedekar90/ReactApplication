import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import '../../styles/AppRoot.css'

const AppRoot = () => {
    return (
        <div className="app_root_wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default AppRoot;
