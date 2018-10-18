import { h, Component } from 'preact';
import style from './style';
import categories from '../../assets/questions';

class Form extends Component {
    constructor(props) {
        super(props);
        this.saveValue.bind(this);
        this.updateProps.bind(this);
    }

    updateProps() {
        this.props.formData(this.state);
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
        let categoryName = event.target.getAttribute('category');

        let valueObj = {};
        valueObj[targetId] = value;

        // Checks if the current category is already stored in the state.
        if (this.state[categoryName]) {
            // add value to the object with the correct key.
            this.state[categoryName][targetId] = value;
        } else {
            // create new object with the category name and add the current value with correct key.
            categoryName = {
                [categoryName]: {
                    [targetId]: value
                }
            }

            this.setState(categoryName);
        }

        this.updateProps(this.state);
    }

    createForms() {
        let forms = [];

        // Loop through the categories
        categories.forEach( (category) => {
            let labels = [];
            const categoryName = category.category.toLowerCase();

            // Loops through every question/answer set inside the current category.
            category.questions.forEach( (inputs) => {
                let input = [];
                let answers = [];

                if (inputs.answer.length <= 3) {
                    inputs.answer.forEach( (answer) => {
                        answers.push(
                            <input category={categoryName} onChange={this.saveValue.bind(this, event)} id={inputs.name + answer.value} name={inputs.name} type="radio" value={answer.value}></input>
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
                        <select category={categoryName} id={inputs.name} onChange={this.saveValue.bind(this, event)}>
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