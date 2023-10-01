import React from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';

const CustomFab = () => {
    const handleShare = async () => {

        
        // Check if the Web Share API is available
        if (navigator.share) {
          try {
            // Web Share API call
            await navigator.share({
              title: "Portfolio of Mr. Akshay Manoj",
              text: "Check out this amazing portfolio",
              url:"https://stark-akshay.github.io/akshaymanoj.github.io/",
             
            });
            console.log("Content shared successfully!");
          } catch (err) {
            console.error("Failed to share:", err);
          }
        } else {
          console.log("Web Share API not supported.");
        }
      };
  return (
    <button
      className="bg-ascent hover:bg-second text-white py-4 px-4 rounded-full fixed bottom-10 right-4 shadow-lg"
      onClick={handleShare}
    >
      <AiOutlineShareAlt className="text-2xl text-text" />
    </button>
  );
};

export default CustomFab;
