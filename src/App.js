import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [] };
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }
  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data,
          filteredProducts: data
        })
      );
  }
  handleChangeSort = (e) =>{
    this.setState({sort: e.target.value});
    this.listProducts();
  }

  listProducts =()=>{
    this.setState(state => {
      if(state.sort !== ''){
        state.products.sort((a,b)=>
        (state.sort==='lowestprice'
        ? ((a.price > b.price) ? 1 :-1)
        : ((a.price < b.price) ? 1 :-1)));
      }else {
        state.products.sort((a,b)=>(a.id > b.id)?1:-1);
      }
    //  if(state.size !== ''){
    //    return{filteredProducts:state.products.filter(a=>
    //      a.availableSizes.indexOf(state.size.toUpperCase()) >= 0)};
    //  }
      return {filteredProducts: state.products};
    })

  }
  render() {
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart Application</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Filter count={this.state.filteredProducts.length} handleChangeSort={this.handleChangeSort} handleSizeChange={this.handleSizeChange}/>
            <hr />
            <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
