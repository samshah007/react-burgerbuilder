import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div className="buildControl">
        <label className="lable">{props.lable}</label>
        <button className="less" onClick={props.removeIngredient} disabled={props.disabled}>Less</button>
        <button className="more" onClick={props.addIngredient}>More</button>
    </div>
);

export default buildControl;