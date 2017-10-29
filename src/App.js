import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from "./Components/ProductTable.js";
import products from "./products.json";
import update from 'immutability-helper';

const PRODUCTS = products;

class App extends Component {
	constructor()
	{
		super();
		this.state = {products:PRODUCTS};
		var that = this;
		this.onChangePrice = (guid, newPrice) => {
			var newProductsState = update(that.state, {
				products: {
					[guid]: {
						price:{$set:newPrice}
					}
				}
			});
			this.setState({products:newProductsState.products});
		};
	}
  	render() {
   	return (
		<ProductTable
			products={this.state.products}
			onChangePrice={this.onChangePrice}/>
    );
  }
}
export default App;