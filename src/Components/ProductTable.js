import React from "react";
import ProductCategoryRow from "./ProductCategoryRow.js";
import ProductRow from "./ProductRow.js";

class ProductTable extends React.Component {
	constructor()
	{
		super();
	}
	render() {
		const rows = [];
		let lastCategory = null;
	  
		for(var guid in this.props.products){
			let product = this.props.products[guid];
			rows.push(
				<ProductRow
				  product={product}
				  key={guid}
				  onChangePrice={this.props.onChangePrice} />
			 );
		}
	  /*this.props.products.forEach((product) => {
		 rows.push(
			<ProductRow
			  product={product}
			  key={product.guid}
			  onChangePrice={this.props.onChangePrice} />
		 );
		 //lastCategory = product.category;
	  });*/
 
	  return (
		 <table>
			<thead>
			  <tr>
				 <th>Name</th>
				 <th>Price</th>
			  </tr>
			</thead>
			<tbody>{rows}</tbody>
		 </table>
	  );
	}
 }
 export default ProductTable;