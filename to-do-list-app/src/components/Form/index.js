import "../../App.css";
import React, { useState } from "react";
import ListItem from "../../components/ListItem";
import HiddenArea from "../HiddenArea";

const Form = () => {
	const [hiddenArea, setHiddenArea] = useState(false);

	const [taskId, settaskId] = useState(1);
	const [firstName, setfirstName] = useState();
	const [lastName, setlastName] = useState();
	const [email, setemail] = useState();
	const [type, settype] = useState();
	const [checkbox, setcheckbox] = useState(false);
	const [textArea, settextArea] = useState();
	const [allTasks, setallTasks] = useState([]);

	const createList = () => {
		let newTask = allTasks;
		newTask.push({
			id: taskId,
			firstName: firstName,
			lastName: lastName,
			email: email,
			type: type,
			checkbox: checkbox,
			textArea: textArea,
		});
		setallTasks(newTask);
		settaskId(taskId + 1);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createList();
	};

	const showHiddenArea = () => {
		setHiddenArea(!hiddenArea);
	};

	const Items = allTasks.map((item) => (
		<ListItem
			key={item.firstName + item.firstName}
			id={item.id}
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
			<form onSubmit={handleSubmit}>
				<label>
					First name:
					<input
						type="text"
						name="firstName"
						onChange={(e) => setfirstName(e.target.value)}
					/>
				</label>
				<br />

				<label>
					Last name:
					<input
						type="text"
						name="lastName"
						onChange={(e) => setlastName(e.target.value)}
					/>
				</label>
				<br />

				<label>
					E-mail:
					<input
						type="email"
						name="email"
						onChange={(e) => setemail(e.target.value)}
					/>
				</label>
				<br />

				<label>
					Type:
					<select name="type" onChange={(e) => settype(e.target.value)}>
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
						onChange={(e) => setcheckbox(e.target.value)}
					/>
				</label>
				<br />

				<label>
					Comment:
					<textarea
						onChange={(e) => settextArea(e.target.value)}
						name="textArea"
					/>
				</label>
				<br />

				<div className="hidden_area">
					<p>Секретная зона</p>
					{hiddenArea ? <HiddenArea /> : null}
					<div onClick={showHiddenArea}>
						{hiddenArea ? (
							<p>Скрыть скрытую зону</p>
						) : (
							<p>Показать скрытую зону</p>
						)}
					</div>
				</div>

				<input type="submit" value="create" />
			</form>
			<div>{Items}</div>
		</>
	);
};

export default Form;
