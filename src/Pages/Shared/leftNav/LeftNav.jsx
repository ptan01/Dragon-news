import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])



    return (
        <div>
            <h2>all category</h2>
            <div>
              {
                categories.map(category =>  <div className='my-2 ps-4'> <Link key={category.id} className='fs-5 text-decoration-none text-secondary ' to={`/category/${category.id}`}>{category.name}</Link></div>)
              }
            </div>
        </div>
    );
};

export default LeftNav;