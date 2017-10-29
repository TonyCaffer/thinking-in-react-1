import React from "react";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

class FilterableProductTable extends React.Component {
	render() {
		//console.log("RENDER: FilterableProductTable with " + JSON.stringify(this.props.products));
		return (
			<div>
				<SearchBar />
				<ProductTable
					products={this.props.products}
					onChangePrice={this.props.onChangePrice}/>
			</div>
	  );
	}
 }

 export default FilterableProductTable;