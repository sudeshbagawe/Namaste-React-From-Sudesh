import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Basic JSX Component Example
const BasicHeading = () => (
  <h1 className="basic-head" tabIndex="1">
    This is a basic JSX heading
  </h1>
);

// Advanced Component with Props
const Greeting = ({ name, role }) => (
  <div className="greeting">
    <h2>
      Welcome, {name}! Your role is <strong>{role}</strong>.
    </h2>
  </div>
);

// Conditional Rendering Example
const ConditionalMessage = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <p className="logged-in">You are logged in!</p>
  ) : (
    <p className="logged-out">Please log in to continue.</p>
  );
};

// List Rendering Example
const FrameworksList = ({ frameworks }) => (
  <div className="frameworks-list">
    <h3>Popular JavaScript Frameworks:</h3>
    <ul>
      {frameworks.map((framework, index) => (
        <li key={index}>{framework}</li>
      ))}
    </ul>
  </div>
);

// Event Handling and State Management Example
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Main Component
const App = () => {
  const frameworks = ["React", "Vue", "Angular", "Svelte", "Next.js"];
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="app-container">
      <BasicHeading />

      {/* Advanced Usage of Props */}
      <Greeting name="Sudesh" role="React Developer" />

      {/* Conditional Rendering */}
      <ConditionalMessage isLoggedIn={isLoggedIn} />
      <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>

      {/* List Rendering */}
      <FrameworksList frameworks={frameworks} />

      {/* State Management and Event Handling */}
      <Counter />
    </div>
  );
};

// Rendering the Root Component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
