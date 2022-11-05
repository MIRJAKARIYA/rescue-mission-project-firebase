import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleMeal = () => {
    const {meals} = useLoaderData()
    console.log(meals[0].strMeal);
    return (
        <div>
            <h1>i am {meals[0].strMeal}</h1>
        </div>
    );
};

export default SingleMeal;