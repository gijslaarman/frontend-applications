import { h, Component } from 'preact';
import style from './style';
import Form from '../../components/form';
import RiskIndication from '../../components/risk-indication';

class Home extends Component {
	constructor(props) {
		super(props)
		this.getValues.bind(this)
		this.logState.bind(this)
	}

	logState = () => {
		console.log(this.state);
	}

	getValues = (dataFromChild) => {
		this.setState({
			riskValues: dataFromChild
		})
	}

	render() {
		return (
			<div class={style.home}>
				<h2>De korte vragenlijst</h2>
				<p>De korte vragenlijst is er voor alle hulpverleners om snel een inzicht te krijgen of een kind hulp nodig heeft, wat de belangrijkste risico factoren zijn en een tijdsbestek aan een opdracht te geven.</p>

				<div class={style.riskContainer}>
					<Form formData={this.getValues} style={style.form} />
					<RiskIndication riskValues={this.state.riskValues}/>
				</div>
			</div>
		)
	}	
}

export default Home;
