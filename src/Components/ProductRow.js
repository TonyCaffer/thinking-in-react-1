import React from "react";

class ProductRow extends React.Component {
	constructor(props) {
		super(props);
		this.onChangePrice = (e) => {
			e.preventDefault;
			this.props.onChangePrice(this.props.product.guid, e.target.value);
		};
	}
	render() {
		const product = this.props.product;
		const name = product.isInStock ? product.name : <span style={{color:'red'}}>{product.name}</span>;
		
		// console.log("Render:" + product.guid); // Fires when a single product price is changed

		return (
			<tr key={product.guid}>
				<td>{name}</td>
				<td><input value={product.price} onChange={this.onChangePrice} /></td>
			</tr>
	  );
	}
 }
 export default ProductRow;