import React, { useEffect } from 'react'

interface IModalProps {
    img: string;
    alt: string;
    onClose: () => void;
}

export const ImageModal: React.FC<IModalProps> = ({ img, alt, onClose }) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onClose();
    };

    const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={handleBackgroundClick}>
            <div className="relative h-[90%] z-60 flex items-center">
                <img src={img} alt={alt} className="max-w-full max-h-full" onClick={handleImageClick}/>
                <button
                    onClick={onClose}
                    className="absolute -top-7 left-[50%] md:-top-5 md:-right-5 md:left-auto text-white text-2xl hover:cursor-pointer"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};
