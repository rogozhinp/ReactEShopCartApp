import React, { Component } from 'react'

export default class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
            {cartItems.length===0? " Basket is empty": <div>You have {cartItems.length} products in the basket.</div>}
                {cartItems.length>0 &&
                    <div>
                        <ul>
                            {cartItems.map(item=>
                                <li>
                                    <b>{item.title}</b>
                                    X {item.count}
                                    <button style={{float: 'right'}} className="btn btn-danger btn-xs"
                                    onClick={(e) => this.props.handleRemoveFromCart(e, item)}
                                    >X</button>
                                    <br />
                                </li>
                                )}
                        </ul>
                    </div>
                }
                
            </div>
        )
    }
}
