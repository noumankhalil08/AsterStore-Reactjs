
import React from 'react';
import logo1 from '../PICTURES/Tribal pride/ERG-003-BLU-2.webp';
import logo2 from '../PICTURES/Tribal pride/ERG-003-BLU-1.webp';
import logo3 from '../PICTURES/Lumus lush/NES-001-BLK-1.webp';
import logo4 from '../PICTURES/Lumus lush/NES-001-GRN-1.webp';
import logo5 from '../PICTURES/Celestrial band/NKC-005-AAA-2.webp';
import logo6 from '../PICTURES/Celestrial band/NKC-005-AAA-1.webp';
import logo7 from '../PICTURES/Reflection/BRT-001-PNK.webp';
import logo8 from '../PICTURES/Reflection/BRT-001-BRN.webp';
import logo9 from '../PICTURES/Color burst/NKC-007-2.webp';
import logo10 from '../PICTURES/Color burst/NKC-007-1.webp';
import logo11 from '../PICTURES/Harmony/RNG-002-BLK-1.webp';
import logo12 from '../PICTURES/Harmony/RNG-002.webp';
import logo13 from '../PICTURES/Free spirit/RNG-004-1.webp';
import logo14 from '../PICTURES/Free spirit/RNG-004-2.webp';
import logo15 from '../PICTURES/Purify leaf/BRT-004-BLK-1.webp';
import logo16 from '../PICTURES/Purify leaf/BRT-004-BLK-2.webp';
import Card from './Card'; 

const ShoppingCards = () => {
  
  const products = [
    {
      images: [logo1, logo2],
      title: 'Tribal Pride',
      price: '1380.0',
      sale: true
    },
    {
      images: [logo3, logo4],
      title: 'Luminous Lush',
      price: '880.00',
      sale: true
    },
    {
      images: [logo5, logo6],
      title: 'Celestial Band',
      price: '880.00',
      sale: true
    },
    {
      images: [logo7, logo8],
      title: 'Reflection',
      price: '880.00',
      sale: true
    },
    {
      images: [logo9, logo10],
      title: 'Color Burst',
      price: '880.00',
      sale: true
    },
    {
      images: [logo11, logo12],
      title: 'Harmony',
      price: '880.00',
      sale: true
    },
    {
      images: [logo13, logo14],
      title: 'Free Spirit',
      price: '880.00',
      sale: true
    },
    {
      images: [logo15, logo16],
      title: 'Purity Leaf',
      price: '880.00',
      sale: true
    }
    
  ];

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#eff0f5' }}>
      <div className="shopping-cards">
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCards;

// import React from 'react';
// import logo1 from '../PICTURES/Tribal pride/ERG-003-BLU-2.webp';
// import logo2 from '../PICTURES/Tribal pride/ERG-003-BLU-1.webp';
// import logo3 from '../PICTURES/Lumus lush/NES-001-BLK-1.webp';
// import logo4 from '../PICTURES/Lumus lush/NES-001-GRN-1.webp';
// import logo5 from '../PICTURES/Celestrial band/NKC-005-AAA-2.webp';
// import logo6 from '../PICTURES/Celestrial band/NKC-005-AAA-1.webp';
// import logo7 from '../PICTURES/Reflection/BRT-001-PNK.webp';
// import logo8 from '../PICTURES/Reflection/BRT-001-BRN.webp';
// import logo9 from '../PICTURES/Color burst/NKC-007-2.webp';
// import logo10 from '../PICTURES/Color burst/NKC-007-1.webp';
// import logo11 from '../PICTURES/Harmony/RNG-002-BLK-1.webp';
// import logo12 from '../PICTURES/Harmony/RNG-002.webp';
// import logo13 from '../PICTURES/Free spirit/RNG-004-1.webp';
// import logo14 from '../PICTURES/Free spirit/RNG-004-2.webp';
// import logo15 from '../PICTURES/Purify leaf/BRT-004-BLK-1.webp';
// import logo16 from '../PICTURES/Purify leaf/BRT-004-BLK-2.webp';
// import Card from './Card'; 

// const ShoppingCards = ({ minPrice, maxPrice }) => {
//   const products = [
//     { images: [logo1, logo2], title: 'Tribal Pride', price: 1380.0, sale: true },
//     { images: [logo3, logo4], title: 'Luminous Lush', price: 880.0, sale: true },
//     { images: [logo5, logo6], title: 'Celestial Band', price: 880.0, sale: true },
//     { images: [logo7, logo8], title: 'Reflection', price: 880.0, sale: true },
//     { images: [logo9, logo10], title: 'Color Burst', price: 880.0, sale: true },
//     { images: [logo11, logo12], title: 'Harmony', price: 880.0, sale: true },
//     { images: [logo13, logo14], title: 'Free Spirit', price: 880.0, sale: true },
//     { images: [logo15, logo16], title: 'Purity Leaf', price: 880.0, sale: true }
//   ];

//   const filteredProducts = products.filter(
//     (product) => product.price >= minPrice && product.price <= maxPrice
//   );

//   return (
//     <div className="container-fluid p-0" style={{ backgroundColor: '#eff0f5' }}>
//       <div className="shopping-cards">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product, index) => (
//             <Card key={index} product={product} />
//           ))
//         ) : (
//           <p>No products found within this price range.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShoppingCards;
