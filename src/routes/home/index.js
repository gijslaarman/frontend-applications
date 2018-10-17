import { h, Component } from 'preact';
import style from './style';
import Form from '../../components/form';
import RiskIndication from '../../components/risk-indication';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			riskIndication: null
		}
		this.getValues.bind(this)
	}

	getValues = (dataFromChild) => {
		this.setState({
			riskIndication: dataFromChild
		})
	}

	render() {
		return (
			<div class={style.home}>
				<h2>De korte vragenlijst</h2>
				<p>De korte vragenlijst is er voor alle hulpverleners om snel een inzicht te krijgen of een kind hulp nodig heeft, wat de belangrijkste risico factoren zijn en een tijdsbestek aan een opdracht te geven.</p>

				<div class={style.riskContainer}>
					<Form formData={this.getValues} style={style.form} />
					<RiskIndication riskIndication={this.state.riskIndication}/>
				</div>
			</div>
		)
	}	
}

export default Home;
