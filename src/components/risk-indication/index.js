import { h, Component } from 'preact';
import style from './style';

class RiskIndication extends Component {
    constructor(props) {
        super(props)
    }

    makeObjectArray = (array) => {
        let ObjectArray = [];

        array.forEach( (obj) => {
            ObjectArray.push(obj)
        })

        return ObjectArray
    }

    matchCategories = (keys, values) => {
        let array = [];

        for (let i = 0; i < keys.length; i++) {
            array.push({[keys[i]]: values[i]})
        }
        
        return array
    }

    componentDidUpdate = () => {
        let valueObjectArray = this.makeObjectArray(Object.values(this.props.riskValues));
        let matchingArray = this.matchCategories(Object.keys(this.props.riskValues), valueObjectArray);

        
        console.log(matchingArray);

        //let total = Object.values(this.props.riskValues).map(Number).reduce( (sum, num) => {
        //    return sum + Number(num);
        //}, 0 ) // Titus heeft deze code geminified naar iets veel praktischer, ipv een array loopen en een nieuwe array aanmaken.
    }

    render() {
        return ( 
            <div class={style.showRisk}>
                <h2> Risico Indicatie </h2>
            </div>
         );
    }
}
 
export default RiskIndication;