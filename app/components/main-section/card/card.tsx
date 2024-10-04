import React from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
            <button className="mt-4 bg-[#F5F5F5] text-gray-800 py-2 px-4 rounded hover:bg-gray-200">
                Read More
            </button>
        </div>
    );
};

export default Card;