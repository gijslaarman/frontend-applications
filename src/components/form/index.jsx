import { h, Component } from 'preact';
import style from './style';
import categories from './questions';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.saveValue.bind(this);
    }

    saveValue(e, event) {
        const element = event.target.tagName;
        let targetId;
        let value;
        let obj = {};
        
        if (element === 'SELECT') {
            targetId = event.target.getAttribute('id');
        } else if (element === 'INPUT') {
            targetId = event.target.getAttribute('name');
        }
        
        value = event.target.value;
        obj[targetId] = value;
        this.setState(obj);
        console.log(this.state);
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
            <div>
                {this.createForms()}
            </div>
        )
    }
}
 
export default Form;