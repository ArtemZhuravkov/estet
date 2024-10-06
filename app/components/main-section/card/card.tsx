import React from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5 border-t border-l border-r border-gray-400 h-[100%]">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600 text-start text-base">{description}</p>
        </div>
    );
};

export default Card;