// AnimatedBackground.js

import React from 'react';
import './AnimatedBackground.css'; // Import the CSS file with the animation styles

const AnimatedBackground = () => {
    return (
        <div className="animated-background">
            <div className="stars">
                {[...Array(50)].map((_, index) => (
                    <div key={index} className="star"></div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedBackground;
