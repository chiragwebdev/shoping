import React, { useState } from 'react';

function Home() {

    const categories = ["All", "Men", "Women", "Kids"]
    const cards = [
        { "id": 1, "category": "men", "name": "Men's Shirt 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 2, "category": "men", "name": "Men's Shirt 2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 3, "category": "men", "name": "Men's Shirt 3", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 4, "category": "men", "name": "Men's Shirt 4", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 5, "category": "women", "name": "Women's Dress 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 6, "category": "women", "name": "Women's Dress 2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 7, "category": "women", "name": "Women's Dress 3", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 8, "category": "kids", "name": "Kids' T-Shirt 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 9, "category": "kids", "name": "Kids' T-Shirt 2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 10, "category": "kids", "name": "Kids' T-Shirt 3", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 11, "category": "kids", "name": "Kids' T-Shirt 4", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 12, "category": "men", "name": "Men's Pants 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 13, "category": "women", "name": "Women's Skirt 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 14, "category": "men", "name": "Men's Jacket 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 15, "category": "women", "name": "Women's Blouse 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 16, "category": "kids", "name": "Kids' Jacket 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 17, "category": "men", "name": "Men's Shoes 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 18, "category": "women", "name": "Women's Shoes 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 19, "category": "kids", "name": "Kids' Shoes 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 20, "category": "men", "name": "Men's Hat 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 21, "category": "women", "name": "Women's Hat 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 22, "category": "kids", "name": "Kids' Hat 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 23, "category": "men", "name": "Men's Gloves 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 24, "category": "women", "name": "Women's Gloves 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 25, "category": "kids", "name": "Kids' Gloves 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 26, "category": "men", "name": "Men's Socks 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 27, "category": "women", "name": "Women's Socks 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 28, "category": "kids", "name": "Kids' Socks 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 29, "category": "men", "name": "Men's Belt 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 30, "category": "women", "name": "Women's Belt 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 31, "category": "kids", "name": "Kids' Belt 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 32, "category": "men", "name": "Men's Watch 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 33, "category": "women", "name": "Women's Watch 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { "id": 34, "category": "kids", "name": "Kids' Watch 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ]

    const [active, setActive] = useState("all")
    const [carddata, setCarddata] = useState(cards)

    const itemname = (e) => {
        const nameitem = e.target.innerHTML.toLowerCase()
        setActive(nameitem)

        const filterdata = cards.filter((card) => {
            return nameitem === card.category
        })
        // console.log(filterdata)
        setCarddata(filterdata.length === 0 ? cards : filterdata)
    }

    return (
        <>
            <div className='mx-auto xl:container px-4'>
                <div className='gap-4 flex justify-center pt-[100px]'>
                    {
                        categories.map((item, id) => {
                            return <button key={id} className={`py-2 px-4 ${active === item.toLowerCase() ? "bg-theme" : "bg-slate-700"} rounded-md w-[100px] `} onClick={itemname}>{item}</button>
                        })
                    }
                </div>
                <p className='text-center mt-10 text-[30px]' >{`${active && active.charAt(0).toUpperCase() + active.slice(1)}`} items: {carddata.length}</p>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 pt-10'>
                    {
                        carddata.map((item, id) => {
                            return (
                                <div key={id} className=' p-10 bg-slate-800 text-center  rounded-md'>
                                    <p>{item.category}</p>
                                    <p>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home
