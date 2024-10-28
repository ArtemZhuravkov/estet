"use client"
import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 bg-gray-500 opacity-50 text-white px-4 py-2 pt-3 rounded-full shadow-lg hover:opacity-100 transition duration-300"
            >
               <i className="fa-solid fa-up-long text-3xl"></i>
            </button>
        )
    );
}