##### 🔍 Introduction
This project was created during my second month of learning React @Langara college WMDD
It was a great hands-on experience that helped me understand key concepts like state and props more deeply. By building this app, I gained a better grasp of how to manage state with React hooks such as useState and useEffect, and how to handle user interactions using onClick and onMouseDown.


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