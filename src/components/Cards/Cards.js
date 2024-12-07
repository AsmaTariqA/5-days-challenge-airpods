import React, { useState } from 'react';

const museums = [
  {
    name: 'National Museum of Antiquities and Islamic Art',
    description: 'Located in Algeria, this museum houses a rich collection of Islamic art and artifacts from various eras, reflecting the history and culture of the region.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Mus%C3%A9e_national_des_antiquit%C3%A9s_et_des_arts_islamiques%2C_Alger.jpg/800px-Mus%C3%A9e_national_des_antiquit%C3%A9s_et_des_arts_islamiques%2C_Alger.jpg',
    icon: 'pencil-outline',
    color: 'text-emerald-500',
  },
  {
    name: 'Museum of Islamic Arts',
    description: 'Situated in Doha, Qatar, this museum features masterpieces of Islamic art, including ceramics, textiles, and manuscripts from across the Islamic world.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/14/b7/a6/caption.jpg?w=1200&h=-1&s=1&cx=1243&cy=1464&chk=v1_871e24301afcf61fb437',
    icon: 'shapes-outline',
    color: 'text-blue-500',
  },
  {
    name: 'Islamic Museum of Australia',
    description: 'Located in Melbourne, this museum celebrates the contributions of Muslims to Australia and showcases Islamic culture and history.',
    image: 'https://www.architectureanddesign.com.au/getmedia/6364b21d-0e0c-43b1-80f6-bdae4195976d/140414_Imas.aspx',
    icon: 'home-outline',
    color: 'text-yellow-500',
  },
  {
    name: 'Tunisian Bardo Museum',
    description: 'One of the oldest museums in Africa, the Bardo Museum in Tunis features an impressive collection of Islamic artifacts and mosaics.',
    image: 'https://cdn.thecollector.com/wp-content/uploads/2023/12/bardo-museum-phh.jpg',
    icon: 'book-outline',
    color: 'text-amber-500',
  },
  {
    name: 'Aga Khan Museum',
    description: 'Located in Toronto, Canada, this museum displays a vast collection of Islamic art and heritage, highlighting the diversity of Muslim cultures.',
    image: 'https://static.the.akdn/53832/1645797465-1643880410-akm-canada-janet_kimber-1.jpg',
    icon: 'color-palette-outline',
    color: 'text-teal-500',
  },
];

const ExpandingFlexCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#334a07] py-10 px-4 md:px-10 lg:px-20 font-rubik">
      {/* Heading Section */}
      <div className="text-center mb-10 text-white">
        <h1 className="text-3xl md:text-6xl font-lora font-bold">Explore Islamic Art Museums</h1>
        <p className="mt-2 text-sm md:text-base">
          Discover the beauty and history of Islamic art across the world.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center">
        <div className="flex space-x-4 overflow-x-scroll md:overflow-hidden ">
          {museums.map((museum, index) => (
            <div
              key={index}
              className={`relative transition-all duration-500 transform flex-shrink-0 ${
                activeIndex === index
                  ? 'w-[90vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] h-[450px]' // Expanded card
                  : 'w-40 sm:w-48 md:w-52 lg:w-56 h-[300px]' // Collapsed card
              } bg-cover bg-center rounded-xl overflow-hidden cursor-pointer`}
              style={{ backgroundImage: `url(${museum.image})` }}
              onClick={() => handleCardClick(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div
                  className={`flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg ${museum.color}`}
                >
                  <ion-icon name={museum.icon}></ion-icon>
                </div>
                <div className="mt-2 text-white">
                  <div className="font-bold text-sm sm:text-base md:text-lg">{museum.name}</div>
                  {activeIndex === index && (
                    <div className="mt-2 text-xs sm:text-sm">{museum.description}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandingFlexCards;
