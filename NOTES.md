
Note of First Lecture Date: 22/09/2024

CDN (Content Delivery Network)
A CDN is a network of servers distributed across different locations that deliver content to users more efficiently.
CDNs store copies of static assets (HTML, CSS, JavaScript, images) in multiple locations to reduce latency and load time.
By fetching files from the nearest server, a CDN improves website speed and performance.

How to Load CDN in Your Project
Add the <script> and <link> tags in your HTML file.

Example for loading React from a CDN:
<!-- Load React and ReactDOM from a CDN -->
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

What is crossorigin?
The crossorigin attribute handles CORS (Cross-Origin Resource Sharing) when fetching resources from a different domain.
Ensures security and privacy for resources fetched from another domain.
Used in React to prevent errors when loading scripts from a CDN.

Why Are There Two Script Files in index.html?
React and ReactDOM are separate libraries:
React: The core library that handles the creation of React elements.
ReactDOM: Used for rendering React elements to the DOM.
Separation allows React to be used in non-browser environments (e.g., React Native).

Why Not Combine the Two Scripts?
React and ReactDOM have different responsibilities.
The separation allows React to be used without the DOM and results in smaller file sizes for specific environments.

Exploring React in the Console
Open the browser console (F12 or right-click → Inspect → Console tab).
Type the following to explore:
console.log(React); // Explore the React object
console.log(ReactDOM); // Explore the ReactDOM object
React.createElement()
React.createElement() is a method used to create a React element.
Converts JSX into a tree of objects.

const element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
ReactDOM.createRoot()
ReactDOM.createRoot() creates a React root for rendering your application.
Example:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
Create app.js File
Contains the main React component logic.
Example:

// app.js
const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
};

export default App;
React Elements Are Objects
React elements are JavaScript objects that describe the UI structure.
These objects are converted into HTML elements in the browser DOM.

Can I Move or Change Tag Sequence?
Yes, you can change the sequence of tags in JSX.
React re-renders them in the specified order and updates the DOM efficiently.

What is root?
In React, root is the main container element where your React application is rendered.
Typically, a <div> element with id="root" in the HTML file.

What is root.render?
root.render is a method to render React elements into the DOM.
It specifies what to display and where to render it.
React Replaces the Root Element
React takes control of the root element and replaces its contents with what is rendered using root.render().
React manages everything inside the div with id="root" from that point forward.

