import { h, Component } from 'preact';
import style from './style';

class RiskIndication extends Component {
    constructor(props) {
        super(props)
        this.state = {
            general: null
        }

        this.componentDidMount.bind(this)
    }

    componentDidMount() {
        let calc =  Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + this.props.riskIndication ) ) ) * 100 ).toFixed( 2 ) )

        this.setState({
            general: calc
        })
    }

    render() { 
        return ( 
            <div class={style.showRisk}>
                <h2> Risico Indicatie</h2>
                <p> {this.state.general}%</p>
            </div>
         );
    }
}
 
export default RiskIndication;