import React ,{Component, Fragment} from 'react';
import './productStatelessParent.css';
import ProductStatelessChild from '../ProductStatelessChild/ProductStatelessChild';

class ProductStatelessParent extends Component{
    state={
        order:4
    }

    handleCounterChange =(newValue)=>{
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">                    
                        <img src={require('../../img/reactjs.png')} alt="" />
                    </div>    
                    <div className="troley">
                        <img src={require('../../img/baseline_shopping_cart_black_24dp.png')} alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>   
                <ProductStatelessChild onCounterChange={(value)=> this.handleCounterChange(value)}/>
            </Fragment>
        );
    }
}

export default ProductStatelessParent;