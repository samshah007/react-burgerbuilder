import React from 'react';

import Auxillary from '../../../hoc/auxillary';
import Button from '../../UI/Button/Button';

const oderSummary = (props) => {
    const ingridientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });
    return (
        <Auxillary>
            <h3>Order Summary</h3>
            <p>Your delecious burger include following ingredients:</p>
            <ul>
                {ingridientSummary}
            </ul>
            <p><strong>Total Price: ${props.price}</strong></p>
            <Button btnType="danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="success" clicked={props.purchaseContiue}>Continue</Button>
        </Auxillary>
    )
}
export default oderSummary; 