import { h, Component } from 'preact';
import style from './style';
import categories from '../../assets/questions';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.saveValue.bind(this);
    }

    saveValue(e, event) {
        // Get the "name" of the current question, if its a <select> it will find the id, but for inputs I needed variating id's so I used the questions "name" as name attribute.
        const element = event.target.tagName;
        let targetId;
        
        if (element === 'SELECT') {
            targetId = event.target.getAttribute('id');
        } else if (element === 'INPUT') {
            targetId = event.target.getAttribute('name');
        }

        // Get the value of the current selected option.
        let value = event.target.value;

        // Create object to insert into the components state.
        let obj = {};
        obj[targetId] = value;
        this.setState(obj);

        // !! Use in other component that is supposed to show the outcome of the formula !!
        let total = Object.values(this.state).map(Number).reduce( (sum, num) => {
            return sum + Number(num);
        }, 0 ) // Titus heeft deze code geminified naar iets veel praktischer, ipv een array loopen en een nieuwe array aanmaken.

        this.props.formData(total);
        console.log(total)
    }

    createForms() {
        let forms = [];

        // Loop through the categories
        categories.forEach( (category) => {
            let labels = [];

            // Loops through every question/answer set inside the current category.
            category.questions.forEach( (inputs) => {
                let input = [];
                let answers = [];

                if (inputs.answer.length <= 3) {
                    inputs.answer.forEach( (answer) => {
                        answers.push(
                            <input onChange={this.saveValue.bind(this, event)} id={inputs.name + answer.value} name={inputs.name} type="radio" value={answer.value}></input>
                        )
                        
                        answers.push(
                            <label htmlFor={inputs.name + answer.value}>{ answer.option }</label>
                        )
                    } )

                    input.push(
                        <div className={style.radioContainer}>
                            {answers}
                        </div>
                    )
                } else {
                    inputs.answer.forEach( (answer) => {
                        answers.push(
                            <option value={answer.value}>{ answer.option }</option>
                        )
                    } )

                    input.push(
                        <select id={inputs.name} onChange={this.saveValue.bind(this, event)}>
                            <option disabled selected>-</option>
                            {answers}
                        </select>
                    )
                }

                labels.push(
                    // Create labels, first the question is rendered and then the select.
                    <div className={style.question}>
                        <p>
                            { inputs.question }
                        </p>
                        { input }
                    </div>
                )
            } )

            forms.push(
                <form className={style.form}>
                    <fieldset>
                        <legend>{category.category}</legend>
                        <div className={style.questionsContainer}>
                            { labels }
                        </div>
                    </fieldset>
                </form>
            )

        } )

        return forms;
    }

    render() {
        return (
            <div class={style.formContainer}>
                {this.createForms()}
            </div>
        )
    }
}
 
export default Form;