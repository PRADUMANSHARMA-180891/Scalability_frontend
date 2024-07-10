import React from 'react';
import './loader.css';

function Loader() {
    return (
        <>
            <div className="loader-wrapper">
                <div className="loading-wave">
                    <div className="loading-bar" />
                    <div className="loading-bar" />
                    <div className="loading-bar" />
                    <div className="loading-bar" />
                </div>
            </div>


        </>

    );
}

export default Loader;
