import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div  className="row">
                <div  className="col-md-4">
                    {`${this.props.count} products found`}
                </div>
            <div  className="col-md-4">
                <label>
                    Order by price
                    <select className="form-control" value={this.props.sort}
                    onChange={this.props.handleChangeSort}>
                    <option value="">Select</option>
                    <option value="lowestprice">Lowest to Highest</option>
                    <option value="highestprice">Highest to Lowest</option>
                    </select>
                </label>
            </div> 
            <div  className="col-md-4"></div>  
            </div>
        )
    }
}
