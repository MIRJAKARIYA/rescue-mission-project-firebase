import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Meals = () => {
  const { meals } = useLoaderData();
  const navigate = useNavigate()
  console.log(meals);
  return (
    <div className="md:grid-cols-5 lg:grid grid-cols-10">
      {meals.map((meal) => (
        <div className="border-2 border-primary m-2">
          <h1>{meal.strMeal}</h1>
          <button onClick={()=> navigate(`/meals/${meal.idMeal}`)} className="btn btn-xs btn-primary">details</button>
        </div>
      ))}
    </div>
  );
};

export default Meals;
