import React from "react";
import "../../App.css";
import PropTypes from "prop-types";

class ListItem extends React.Component {
	render() {
		return (
			<div className="list_item">
				<h4>Card id - {this.props.id}</h4>
				<p>FirsName : {this.props.firstName}</p>
				<p>LastName : {this.props.lastName}</p>
				<p>Email : {this.props.email}</p>
				<p>Type : {this.props.type}</p>
				<p>Checked : {`${this.props.checkbox}`}</p>
				<p>Textarea : {this.props.textArea}</p>
			</div>
		);
	}
}

ListItem.propTypes = {
	id: PropTypes.number,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	email: PropTypes.string,
	type: PropTypes.string,
	checkbox: PropTypes.bool,
	textArea: PropTypes.string,
};

export default ListItem;
