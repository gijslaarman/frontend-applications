import { h, Component } from 'preact';
import style from './style';
import Form from '../../components/form';

class Home extends Component {
	getValues(state) {
		state = {};

	}

	render() {
		return (
			<div class={style.home}>
				<h2>De korte vragenlijst</h2>
				<p>De korte vragenlijst is er voor alle hulpverleners om snel een inzicht te krijgen of een kind hulp nodig heeft, wat de belangrijkste risico factoren zijn en een tijdsbestek aan een opdracht te geven.</p>


				<Form style={style.form} />
			</div>
		)
	}	
}

	// <div class={style.home}>
	// 	<h2>De korte vragenlijst</h2>
	// 	<p>De korte vragenlijst is er voor alle hulpverleners om snel een inzicht te krijgen of een kind hulp nodig heeft, wat de belangrijkste risico factoren zijn en een tijdsbestek aan een opdracht te geven.</p>
	// 	<br />
	// 	<p>
	// 		{data.labels[0].answers}
	// 	</p>
	// 	<form>
	// 		<label>
	// 			<h4>{data.labels.algemeen}</h4>
	// 			<select>
	// 				<option id="gender">man</option>
	// 				<option>vrouw</option>
	// 			</select>
	// 		</label>
	// 	</form>
	// </div>

export default Home;
