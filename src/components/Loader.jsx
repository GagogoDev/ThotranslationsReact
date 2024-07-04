// React
import React from 'react';

// Gif
import LoadingSimple from '/loading/Loading-Simple.gif';

export const Loader = () => {
    return (
        <div className="loader">
            <img src={ LoadingSimple } alt="" />
        </div>
    );
};
