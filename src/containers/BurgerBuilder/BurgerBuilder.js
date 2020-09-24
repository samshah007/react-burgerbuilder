import React, {Component } from 'react';
import Auxillary from './../../hoc/auxillary';
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Ordersummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};
class BurgerBuilder extends Component{
    state = {
        ingredients:{
            meat:0,
            cheese:0,
            bacon:0,
            salad:0
        },
        totalPrice:4,
        purchaseable:false,
        purchasing:false
    }
    updatePurchaseState (ingredients){
        const sum = Object.keys(ingredients)
            .map((igKey) =>{
                return ingredients[igKey];
            }).reduce(((sum,el)=>{
                return sum + el;
            }),0);        
        this.setState({purchaseable: sum > 0})
    }
    purchasHandler = () => {
        this.setState({purchasing:true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }
    purchaseContiuneHandler = () => {
        alert('You Purchased!!!!')
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;
        this.setState({ingredients:updatedIngredients,totalPrice:updatedPrice});
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount > 0){
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount;
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const updatedPrice = oldPrice - priceAddition;
            this.setState({ingredients:updatedIngredients,totalPrice:updatedPrice});
            this.updatePurchaseState(updatedIngredients);             
        }
               
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Auxillary>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    <Ordersummary
                        price={this.state.totalPrice.toFixed(2)} 
                        ingredients={this.state.ingredients}
                        purchaseContiue={this.purchaseContiuneHandler} 
                        purchaseCancel={this.purchaseCancelHandler}></Ordersummary>
                </Modal>
                <Burger 
                    burgerIngredients={this.state.ingredients}                   
                ></Burger>
                <BuildControls
                     addIngredients={this.addIngredientHandler}
                     removeIngredients={this.removeIngredientHandler}
                     disabled={disabledInfo}
                     purchaseable={this.state.purchaseable}
                     purchase={this.purchasHandler}
                     price={this.state.totalPrice}
                ></BuildControls>
            </Auxillary>
        )
    }
}
export default BurgerBuilder;