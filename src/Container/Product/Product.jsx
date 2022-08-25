import React ,{Component, Fragment} from 'react';
import './product.css';

class Product extends Component{
    state={
        order:4
    }

    handlePlus =()=>{
        this.setState({
            order: this.state.order + 1
        })
    }

    handleMinus =()=>{
        if(this.state.order>0){        
            this.setState({
                order: this.state.order - 1
            })
        }        
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
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://akcdn.detik.net.id/visual/2021/07/04/susu-beruang-bear-brand-2_169.png?w=650" alt="" />
                    </div>
                    <p className="product-title">Susu beruang</p>
                    <p className="product-price">Rp 10.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Product;