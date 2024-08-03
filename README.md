# Important Questions

## 1. What is the difference between Vanilla JS and React ?

### React

a. Library for building UIs  
b. Component-based architecture  
b. Virtual DOM for efficient updates  
d. JSX syntax for HTML-like code in JavaScript  
e. State and props for data management  
f. One-way data binding  
g. Vanilla JS

### Core JavaScript without libraries/frameworks

a. No built-in component system  
b. Direct manipulation of the DOM  
c. Uses standard HTML/CSS/JS  
d. Manual management of state and UI updates  
e. More flexible but can be more complex for large apps

## 2. Why React.js?

a. Component-Based Architecture:  
Encourages the creation of reusable UI components, which simplifies development and maintenance.

b. Virtual DOM:  
Optimizes updates by only re-rendering components that have changed, leading to better performance.

c. Declarative UI:  
Allows developers to describe what the UI should look like for different states, making code more predictable and easier to debug.

d. Strong Ecosystem:  
Supported by a vast ecosystem of tools, libraries, and community resources, making it easier to find solutions and integrate with other technologies.

e. Cross-Platform Development:  
With React Native, developers can build mobile apps using the same React principles, enabling code reuse and consistency across platforms.

f. Popularity and Community Support:  
Widely adopted by companies and developers, ensuring long-term support, a large pool of resources, and a strong community.

g. Integration with Modern Web Development:  
Works well with other modern web technologies and practices, such as TypeScript, Redux, and server-side rendering.

h. Active Development and Updates:  
Backed by Facebook, React receives regular updates, ensuring it remains relevant and aligned with current web standards.

## 3. What is React.js?

React.js, commonly referred to as React, is an open-source JavaScript library developed by Facebook. It's primarily used for building user interfaces (UIs), particularly single-page applications (SPAs). React allows developers to create reusable UI components, which are the building blocks of React applications.

## 4. How reacts works?

React works by creating a virtual representation of the user interface called the Virtual DOM. When the state or props of a component change, React updates this Virtual DOM rather than directly manipulating the real DOM. React then calculates the difference between the previous Virtual DOM and the new one, a process known as reconciliation. It identifies the minimal set of changes required and updates only those parts of the real DOM, making the process efficient and fast.

React components, which can be either functional or class-based, are the building blocks of the application. They encapsulate UI logic, structure, and styling, and can be nested and reused throughout the application. Components receive data through props (passed from parent components) and manage their own local state. Changes in state or props trigger React's re-rendering process, updating the Virtual DOM and subsequently the real DOM.

React's declarative nature means developers describe what the UI should look like for a given state, and React handles the rendering and updates. This approach, along with React's unidirectional data flow (where data flows from parent to child components), ensures that the UI is predictable and easy to debug. Additionally, React's use of hooks in functional components allows developers to use state and other React features without writing class components, making code simpler and more concise.

## 5. State

State refers to an object that represents the dynamic parts of a component.  
It allows components to store and manage their data, which can change over time, usually as a result of user actions or other events.  
When the state of a component changes, React automatically re-renders the component and its children to reflect the new state.

### Example Component

Below is an example of a React class component:

```javascript
import React from "react";

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ExampleComponent;
```

Below is an example of a React functional component:

```javascript
import React from "react";

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ExampleComponent;
```
