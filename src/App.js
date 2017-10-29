import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from "./Components/FilterableProductTable.js";
import products from "./products.json";
import productsOld from "./products-old.json";
import update from 'immutability-helper';

const PRODUCTS = products; /*[
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
	{category: 'Body Parts', price: '$19.99', stocked: true, name: 'Penis'},
	{category: 'Body Parts', price: '$29.99', stocked: true, name: 'Vulva'},
	{category: 'Body Parts', price: '$39.99', stocked: true, name: 'Anus'}
 ];*/

class App extends Component {
	constructor()
	{
		super();

		/*var transformedProducts = {};
		for(var i=0, count=productsOld.length; i<count; i++) {
			let value = productsOld[i];
			transformedProducts[value.guid] = {
				key:value.guid,
				isInStock: value.isInStock,
				price: value.price,
				name: value.name
			}
		}
		console.log(JSON.stringify(transformedProducts));
		*/

		/*
			"8c5cdea6-eb0f-4619-b6b8-2a22e5e23fe4": {
				"isInStock": false,
				"price": "$2,726.72",
				"name": "enim"
			},
		*/

		this.state = {products:PRODUCTS};
		var test123 = "fruit";
		var cunt = this;
		this.onChangePrice = (guid, newPrice) => {
			// To update an item in state that's in an array... well you can't. You have to 
			// create a new array with the single difference. How performant is this when there
			// are hundreds of items?
			//console.log("Start map");
			var newProductsState = update(cunt.state, {
				products: {
					[guid]: {
						price:{$set:newPrice}
					}
				}
			});

			/*var newProductsState2 = this.state.products.map( p => {
				if(p.index === index) {
					return {
						index:p.index,
						price:newPrice,
						name:p.name,
						isActive:p.isActive
					};
				}
				return p;
				//p.name += " TEST";
			});*/
			//console.log("DONE");
			this.setState({products:newProductsState.products});
		};
	}
  	render() {
   	return (
		<FilterableProductTable
			products={this.state.products}
			onChangePrice={this.onChangePrice}
			/>
    );
  }
}

export default App;
