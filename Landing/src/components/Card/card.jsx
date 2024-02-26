import React from 'react';

export function Card() {
    // Array de objetos con la información de cada tarjeta
    const cardsData = [
        {
            id: 1,
            title: "Sweatpants",
            description: "Keep it casual with our sweatpants collection. Whether lounging at home or running errands, these soft, breathable bottoms offer the perfect blend of relaxation and style.",
            imageUrl: "https://superdrycolombia.vtexassets.com/arquivos/ids/273671/Sudadera-Para-Hombre-Vintage-Gym-Athletic-Superdry1632.jpg?v=638205633318330000"
        },
        {
            id: 2,
            title: "Hoodies",
            description: "Dive into our hoodie collection for the ultimate in snug style. Crafted from premium materials and featuring a variety of designs, our hoodies offer both comfort and flair.",
            imageUrl: "https://trueshop.co/cdn/shop/files/classic_hoodie_2.0_black_1_375bb018-674e-4f8e-9e6c-fd7cf03d28bc_720x720.jpg?v=1703257324"
        },
        {
            id: 3,
            title: "Hats",
            description: "Our hat collection is the finishing touch to any outfit. Whether you're shielding from the sun or adding a touch of personality, our hats are designed to complement your style effortlessly.",
            imageUrl: "https://americanino.vtexassets.com/arquivos/ids/1404067/70_759E503_VER190622_0.jpg?v=638291946303200000"
        },
        {
            id: 4,
            title: "Shoes",
            description: "Explore our diverse shoe collection designed to meet every occasion. From sleek sneakers for urban adventures to comfortable loafers for casual outings, our footwear selection blends fashion and functionality seamlessly.",
            imageUrl: "https://img.ws.mms.shopee.com.co/e2dc82222934c185d9bbf76d8977e8fa"
        },
        {
            id: 5,
            title: "Accessories",
            description: "Dive into our accessory collection and discover the perfect finishing touches for any outfit. From statement jewelry pieces to practical yet stylish bags, our accessories are designed to elevate your look effortlessly.",
            imageUrl: "https://m.media-amazon.com/images/I/61Hy0e8nDwL._SL1500_.jpg"
        },
        {
            id: 6,
            title: "Bags",
            description: "Explore our versatile bag collection designed to meet your every need. From spacious totes perfect for daily errands to sleek crossbody bags ideal for a night out, our selection combines practicality with chic design.",
            imageUrl: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/g/05/6e17bee7-54ab-4621-b766-5e46a07496b3.jpg"
        }
    ];

    return (
        <div className='card-section'>

            {cardsData.map(card => (
                <div key={card.id} className='card-container'>
                    <img src={card.imageUrl} alt="" className="card-img" />
                    <h2 className='card-title'>{card.title}</h2>
                    <p className='card-description'>{card.description}</p>
                </div>
            ))}
        </div>
    );
}