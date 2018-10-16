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

                inputs.answer.forEach( (answer) => {
                    answers.push(
                        <option value={answer.value}>{ answer.option }</option>
                    )
                } )

                input.push(
                    <select>
                        {answers}
                    </select>
                )

                labels.push(
                    // Create labels, first the question is rendered and then the select.
                    <label>
                        { inputs.question }
                        { input }
                    </label>
                )
            } )

            forms.push(
                <form className={style.form}>
                    <h3>{category.category}</h3>
                    <fieldset>
                        { labels }
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