import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.burgerIngredients)
    .map(igkey => {
        return [...Array(props.burgerIngredients[igkey])].map((_,i) => {
            return <BurgerIngredient key={igkey + i} type={igkey} />
        });
    }).reduce((arry,el) => {        
        return arry.concat(el);
    },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please add burger ingredients</p>
    }    
    return (
        <div className="burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;