import { h, Component } from 'preact';
import style from './style';

class RiskIndication extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        let categories = this.props.riskValues || {}
        let categoryKeys = Object.keys(categories)
        let categoryValues = Object.values(categories)

        let categoryArray = [];

        // Sort all percentage values per category.
        for (let i = 0; i < categoryKeys.length; i++) {
            let value = Object.values(categoryValues[i]).map(Number).reduce(sum, 0)

            let categoryPercentage = Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + value ) ) ) * 100 ).toFixed( 2 ) ) * 10;

            categoryArray.push(
                { 
                    name: categoryKeys[i],
                    value: categoryPercentage
                }
            )
        }

        let totalArray = [];
        categoryArray.forEach( category => {
                totalArray.push(Number(category.value))
            }
        )

        let sort = categoryArray.sort(compare);
        let totalPercentage = totalArray.reduce(sum, 0).toFixed(2)

        function sum(a, b) {
            return a + b
        }

        function compare(a,b) {
            if (a.value < b.value)
              return 1;
            if (a.value > b.value)
              return -1;
            return 0;
        }

        let sortedCategories = [];
        sort.forEach( category => {
            sortedCategories.push(category.name)
        })

        let highestRisk = [];
        if (sortedCategories[0]) {
            highestRisk.push(
                <h4>De hoogste risico factor zit hem in <span>{sortedCategories[0]}</span></h4>
            )
        }

        let color;

        if (totalPercentage > 10) {
            color = style.red
        } else if (totalPercentage > 4) {
            color = style.yellow
        } else if (totalPercentage < 1.5) {
            color = style.lowOpacity
        }

        return ( 
            <div class={style.showRisk}>
                <h2>Risico Indicatie</h2>
                <h3 class={color}>{totalPercentage}%</h3>
                {highestRisk}
            </div>
         );
    }
}
 
export default RiskIndication;