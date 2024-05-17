## React Hooks POC - using Functional Components

### 1. Prerequisites

- Install `node.js`
- Install `npm` globally
- Install `git cli`

### 2. Installation

First of all, you need to clone the repository by running the command `git clone https://github.com/atanasovRazvan/framework-design.git`

Everything this React application needs in order to install all of its dependencies and libraries is running `npm install`


### 3. Running the application

The application can be started using `npm run start` command in the Terminal. The application will run on `http://localhost:3000/`

### 4. Understanding the concepts

Hooks were added to React in version 16.8. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

- In React, the state is data or properties you can use in our application. States are mutable, meaning their value can change, and for that, the `useState()` hook is used to handle and manage your states. The `useState()` hook allows you to create, track and update a state in functional components.
- The `useEffect` Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. **The render method itself shouldn’t cause side effects. It would be too early — we typically want to perform our effects after React has updated the DOM.**
- The `useContext` hook is used to consume values from a React context. Context provides a way to pass data through the component tree without having to pass props manually at every level. Generally, the Context is seen as a ***global data provider***.
- You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more. A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. ***In this application, we leverage the capabilities of `useState` to use the `localStorage` instead of internal memory.***

### 5. Enjoy the learning curve

React Hooks are powerful tools that are actually easy to understand and implement. To learn how they work easier, try to make comparisons with the `classes` built-in state management functions. That should provide a really nice high-level overview of what the Hooks are capable of.