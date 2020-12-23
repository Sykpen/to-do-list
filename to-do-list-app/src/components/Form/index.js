import "../../App.css";
import React from "react";
import ListItem from "../../components/ListItem";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			type: "",
			checkbox: false,
			textArea: "",
			allTasks: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.createList = this.createList.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}

	createList() {
		let newTask = this.state.allTasks;
		console.log(newTask);
		newTask.push({
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			type: this.state.type,
			checkbox: this.state.checkbox,
			textArea: this.state.textArea,
		});
		console.log(newTask);
		this.setState({
			allTasks: newTask,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.createList();
	}

	render() {
		const Items = this.state.allTasks.map((item) => (
			<ListItem
				key={item.firstName + item.firstName}
				firstName={item.firstName}
				lastName={item.lastName}
				email={item.email}
				type={item.type}
				checkbox={item.checkbox}
				textArea={item.textArea}
			/>
		));
		return (
			<>
				<h1>Create task</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Firs name
						<input type="text" name="firstName" onChange={this.handleChange} />
					</label>
					<br />

					<label>
						Last name
						<input type="text" name="lastName" onChange={this.handleChange} />
					</label>
					<br />

					<label>
						E-mail
						<input type="email" name="email" onChange={this.handleChange} />
					</label>
					<br />

					<label>
						Type:
						<select name="type" onChange={this.handleChange}>
							<option value="type1">type1</option>
							<option value="type2">type2</option>
							<option value="type3">type3</option>
							<option value="type4">type4</option>
						</select>
					</label>
					<br />

					<label>
						Make report:
						<input
							name="report"
							type="checkbox"
							name="checkbox"
							onChange={this.handleChange}
						/>
					</label>
					<br />

					<label>
						Comment:
						<textarea onChange={this.handleChange} name="textArea" />
					</label>
					<br />

					<input type="submit" value="create" />
				</form>
				<div>{Items}</div>
			</>
		);
	}
}

export default Form;
