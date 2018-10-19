# "Kind Veilig Thuis" / "Child Risk Indication"

This Child risk indication app is developed for the purpose of finding out the risk a child carries for being placed out of his/hers elderly home. By filling in the form you get to see the total percentage and in what category the Child has the highest risk factor. With this information a caregiver can spend his attention on that specific matter. Even maybe try to improve the situation.

#### This app is powered by [Preact](https://github.com/developit/preact)

## Table of Contents
1. Installation
2. Details
3. Todo
4. Making of

## Installation
I used npm with Preact, for an easy install clone the repository and use Npm:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test
```

## Details
Let's break down the assets/components/routes here.

### Assets

#### questions.json
The beating heart of this app. Here you can change the forms categories, questions and amount of answers with values. The app renders the forms here and you can customize it how you like. This is how you customize the questions.json:

```
[ // Category Array
    {
        "category": "Enter category name here", // This is the name of the category that gets displayed on top of the fieldset.
        "questions": [ // Array of all the questions, to add new questions in this category make a new object under this one.
            {
                "name": "questionID",
                "question": "The question that gets rendered on top of the select/input fields.",
                "answer": [ // Answer Array
                    {
                        "option": "text for option number 1",
                        "value": "the value/weight that option 1 has. **This has to be a number!**"
                    }
                ]
            }
        ]
    }
]
```

As you can see a lot of arrays, this is important for looping through the each category, question, answer set.

### Components

#### Header component
This is where the routing happens, the links are made in the header. Makes use of [preact-router](https://github.com/developit/preact-router). 

If you want to add a route to the header add a `<Link />` component inside the 
`<nav> {Your link here} </nav>`.

Create your new route inside the routes folder: create a folder with your route name with the `index.js` & `style.css` files.

Last thing to do is to link the route inside the `app.js`. 
Import the route folder underneath the other routes.
Inside the `<Router />` Component you also need to add your new route, call the imported component and give it a href to where you wanted it routed.


#### Form component
This is where each category gets rendered into a form. You can change the condition on when the answers get transformed into radio buttons or a select field. 

Change the number inside the condition: `if (inputs.answer.length <= 3)` to your desired number. 

> I do not recommend changing the number higher than 3. The text gets cluttered, and very narrow, this decreases the readability. 

The form component collects the values from the selected inputs and outputs it as props to the parent component: the home route.

#### Risk Indication component
Risk indication collects the props data from `<Form />` component and through the calculations renders the percentage of the overall risk for the child for being placed out of his/hers elderly home.
This color of the percentage changes with the value. So the user gets a better idea of when the percentage is relatively high.

Underneath it shows what category scores the highest so the user/caregiver can know where to focus on.

### Routes

#### Home
The forms and the risk indication is rendered here.

### Info
A little bit of info about the app.

## Todo
There was still a lot I wanted to implement in this app, due to time restricitions I was not able to implement them. Here's a list of what I wanted to achieve with this app:

[x] Render forms through JSON
[x] Make the forms dynamic so that no matter the names of the form, it would always render perfectly.
[x] Render the risk indication percentage, and show what category weighs the heaviest.
[] Being able to see the real red flags: see what questions are the most influential of the risk indicator.
[] Create records for each child, so you don't have to fill in the form again when you want to look back at it later.
[] When you have created a record, you can also make a plan & give it a time limit.
[] Use local storage to save the answers.

## Making of
I made this app as a school project for the Amsterdam University of Applied Sciences in collaboration with Garage2020. The goal for this app was to create an app that can aid caregivers in making decisions concerning children that struggle, mainly because of the environment they grow up in.

#### My proces

We started the first week off with a pitch from Arjan from Garage2020. He explained to us the problem: caregivers are hardworking people, but they can make mistakes too. Over the last 3 years Arjan collected data about all the children that are placed outside their elderly home. He came up with shocking facts, if caregivers know what to focus on better the Netherlands could save up to 200 million euros per year (not my words). 

**The question for us was: can we design an app in a framework that supports caregivers.**

So we first had to choose a framework. Make a top 3 of frameworks you want to learn. My top 3:

1. React
2. Vue
3. Ember

End result: I got EmberJs.
The first day of programming I studied Ember, I spend the entire day trying to understand it. Next day I asked my teacher if I can switch. I did not like Ember, maybe it was just preference but I could not wrap my head around it. I chose to switch to Preact. 

Setup was heavy, mainly because the documentation for Preact was scarce and targeted at people who already have full understanding of React. Great. 

But I didn't give up, I had to make this work. I studied other github projects. Read the documents of preact like 20 times. Studied the issues people were having that were somewhat similar. Eventually I found out that preact is not that different from React. I was sceptical, thought that preact was different from React. Apparently its not that different from React at all and with [preact-compat](https://github.com/developit/preact-compat) it's quite similar. Only that preact is supposedly faster.

But coding of this app was a challenge for me the main problems I encountered was: 

1. Figuring out why Frameworks are useful.
2. Creating routes.
3. Rendering JSX elements with conditional for loops.
4. Sending data through sibling components. (tip: goes through parent component..).
5. Updating my Javascript knowledge: Object based coding, and use object inside arrays inside objects inside an array. yes.

But my main accomplishment was the weirdness of converting the json that is an array with objects. Into an object with per category the values per question ID. Main reason was that if I wanted to push it into an array that the values would duplicate instead of replace. So I made an object with the values, updated that to the props and in the other component I called the props and had to parse the object back into an array containing objects, that object contained an array as well. The amount of headbreaking and trying to understand what I was even trying to accomplish was exploding my brain, to say.

Overal I thought it was a fun project but I was not able to implement all the ideas I had in mind in just the two weeks. I had to make decisions on what I was going to program and what I was going to leave as a suggestion.

I'm proud of what I made and I think it looks promising, provided that the other features I had in mind would also be implemented.