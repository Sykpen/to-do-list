import React from "react";
import "../../App.css";

class ListItem extends React.Component {
	render() {
		return (
			<>
				<p>FirsName : {this.props.firstName}</p>
				<p>LastName : {this.props.lastName}</p>
				<p>Email : {this.props.email}</p>
				<p>Type : {this.props.type}</p>
				<p>Checked : {this.props.checkbox}</p>
				<p>Textarea : {this.props.textarea}</p>
			</>
		);
	}
}

export default ListItem;
