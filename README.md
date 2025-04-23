##### 🔍 Introduction
This small project was part of my daily practice during my second month of learning React at Langara College (WMDD).
It was a simple hands-on exercise that helped me reinforce the basics of state and props.
Through building this mini counter app, I practiced using React hooks like useState and useEffect,
and learned how to handle user interactions with onClick and onMouseDown.

#####  🧮 React Counter with Hold-to-Increment Feature
A simple React project with two counters:

A manual click counter

A hold-to-count-up/down feature using setInterval and useRef.

#####  🚀 Features
✨ Click buttons to increment/decrement a number

🖱️ Hold mouse button to auto-increase/decrease a second counter

🧠 Uses useState, useEffect, and useRef

🎯 Prevents negative numbers

🧹 Clear buttons to reset each counter

🪄 Document title updates with click count via useEffect

##### 🔧 Technologies Used
React (with functional components and hooks)

CSS for styling

JavaScript ES6+

#####  📂 Project Structure

src/
├── App.js          # Main React component
├── App.css         # Basic styling
└── index.js        # ReactDOM render


#####  🖱️ How It Works
The first counter (count) updates manually on button click.

The second counter (number) increases or decreases while the user holds the button:

Starts setInterval on onMouseDown

Stops setInterval on onMouseUp or onMouseLeave

useRef is used to store and manage the setInterval ID.


##### 🙌 Author
Built with ❤️ by Naomi Fujii
