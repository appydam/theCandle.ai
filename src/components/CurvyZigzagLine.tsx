import React from 'react';

interface CurvyZigzagLineProps {
    width: number;
    height: number;
    waveLength: number;
    waveHeight: number;
}

const CurvyZigzagLine: React.FC<CurvyZigzagLineProps> = ({ width, height, waveLength, waveHeight }) => {
    const points: string[] = [];
    let x: number = 0;
    let y: number = height / 2;

    // Generate points for the zigzag line
    for (let i = 0; x <= width; i++) {
        points.push(`${x},${y}`);
        x += waveLength / 2;
        y = i % 2 === 0 ? height - waveHeight : height / 2;
    }

    // Construct the path string
    const path: string = `M${points[0]} C${points.slice(1).join(' ')}`;

    return (
        <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <path d={path} fill="none" stroke="black" strokeWidth="2" />
        </svg>
    );
};

export default CurvyZigzagLine;
