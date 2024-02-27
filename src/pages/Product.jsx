import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Product() {
    const navigate = useNavigate();
    useEffect(() => {
        // dataapi();
        if (localStorage.getItem('use')) {
            navigate('/product')
        }
    }, [])
    return (
        <>
            <h2>Product Page</h2>
        </>
    )
}

export default Product
