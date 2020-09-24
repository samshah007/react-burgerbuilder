import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    {lable:'Meat',type:'meat'},
    {lable:'Bacon',type:'bacon'},
    {lable:'Salad',type:'salad'},
    {lable:'Cheese',type:'cheese'}
]
const buildControls = (props) => (
    <div className="buildControls">
        <p>Current Price:<strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>{
            return <BuildControl 
                        key={ctrl.lable} 
                        lable={ctrl.lable}
                        addIngredient={() => props.addIngredients(ctrl.type)}
                        removeIngredient={() => props.removeIngredients(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                ></BuildControl>
        })}
        <button className="orderButton" disabled={!props.purchaseable} onClick={props.purchase}>ORDER NOW</button>
    </div>
);
export default buildControls;
