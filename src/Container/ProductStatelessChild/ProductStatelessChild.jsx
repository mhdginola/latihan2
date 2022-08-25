import React ,{Component} from 'react';
import './productStatelessChild.css';

class ProductStatelessChild extends Component{
    state={
        order:4
    }

    handleCounterChange =(newValue)=>{
        this.props.onCounterChange(newValue);
    }

    handlePlus =()=>{
        this.setState({
            order: this.state.order + 1
        },()=>{
            this.handleCounterChange(this.state.order);
        })
        
    }

    handleMinus =()=>{
        if(this.state.order>0){        
            this.setState({
                order: this.state.order - 1
            },()=>{
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render(){
        return(         
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
        );
    }
}

export default ProductStatelessChild;