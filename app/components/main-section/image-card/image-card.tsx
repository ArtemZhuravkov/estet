import React from 'react'
import { IMaterialCard } from '../interface';


interface IImageCardProps {
    card: IMaterialCard;
    onImageClick: (img: string, alt: string) => void;
}
export const ImageCard: React.FC<IImageCardProps> = ({ card, onImageClick }) => {
    return (
      <div
        className="group relative w-full sm:w-[31%] h-[300px] overflow-hidden rounded-lg shadow-lg cursor-pointer"
        key={card.id}
        onClick={() => onImageClick(card.img, card.alt)}
      >
        <img
          src={card.img}
          alt={card.alt}
          title={card.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      </div>
    );
  };
