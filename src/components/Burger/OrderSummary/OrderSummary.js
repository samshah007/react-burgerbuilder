import React, {Component} from 'react';

import Auxillary from '../../../hoc/auxillary';
import Button from '../../UI/Button/Button';

class OderSummary extends Component { 
    componentDidUpdate(){
        console.log('[OrderSummary] didUpdate')
    }   
    render(){
        const ingridientSummary = Object.keys(this.props.ingredients)
        .map((igKey) => {
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        });
        return(
            <Auxillary>
                <h3>Order Summary</h3>
                <p>Your delecious burger include following ingredients:</p>
                <ul>
                    {ingridientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price}</strong></p>
                <Button btnType="danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType="success" clicked={this.props.purchaseContiue}>Continue</Button>
            </Auxillary>
        )
    }
}
export default OderSummary; 