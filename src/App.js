import "./styles.css";
import React from "react";
import {useState} from "react"

const cuisineDB =
{
  Indiacuisine: 
  [
    {name: "Murgh Makhani (Butter Chicken)",rating: "4/5" },
    { name: "Rogan Josh (Red Lamb)", rating: "5/5" },
    { name: "Malai Kofta (veg)", rating: "3.5/5" },
    { name: "Dum ki Biryani", rating: "5/5" }
  ],
  arabiancuisine: [
    { name: "Hummus", rating: "4/5" },
    { name: "Shawarma", rating: "5/5" },
    { name: "Shish tawook", rating: "4.5/5" },
    { name: "Baklava", rating: "3.5/5" },
    { name: "Knafeh", rating: "5/5" }
  ], 
  italiancuisine: [
    { name: "Pizza", rating: "5/5" },
    { name: "Lasagna", rating: "3.5/5" },
    { name: "Tiramisu", rating: "4.5/5" },
  ],
};





export default function App() {
  const[selectedCuisine,setCuisine] = useState("Indiacuisine");
  function cuisineClickHandeler(cuisine){
     setCuisine(cuisine);
  }

return (
    <div className="App">
      <h1 id ="heading"> The Meal Mentor </h1>
      <p style={{color:"#75645c"}}>
        checkout my favorite foods.
      </p> 
      <p style={{ fontSize : "small" , marginTop:"0.5rem",paddingTop:"0.5rem",color:"#75645c"}}>
        Select a cuisine
      </p>
      <div >
        {Object.keys(cuisineDB).map((cuisine) => (
          <button id="cuisineBtn"
            onClick={() => cuisineClickHandeler(cuisine)}
          >
            {cuisine}
          </button>
        ))}
      </div>
      <div >
      <ul id="list">
          {cuisineDB[selectedCuisine].map((food) => {
            return (
              <li id="listItems" key={food.name}  >
                <div id="foodName"> {food.name} </div>
                <div id="foodRating"> {food.rating} </div>
              </li>
            );
          })}
        </ul>
      </div>

      
    </div>
  );
}