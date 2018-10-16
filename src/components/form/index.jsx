import { h, Component } from 'preact';
import style from './style';
import categories from './questions';

class Form extends Component {

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
                            <input id={inputs.name + answer.value} name={inputs.name} type="radio" value={answer.value}></input>
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
                        <select>
                            <option>-</option>
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