# Jamlink

Jamlink is a web application created during the Ironhack bootcamp, providing a social platform for musicians. The application aims to connect musicians who want to organize and participate in jam sessions. Some key features of Jamlink include:

- **Musician Profile:** Create and customize your musical profile, showcasing your instruments, skills, and preferences.
- **Social Network:** Connect with other musicians, add them as friends, and discover new musical talents in the community.
- **Jam Events:** Create your own jam session events, specifying the date, time, location, and desired instruments.
- **Event Participation:** Join jam session events organized by other musicians, indicating the instrument you'd like to play.
- **Friends List:** Build a list of musical friends with whom you can interact, collaborate, and organize private jam sessions.
- **Comment Interaction:** Leave comments on events and profiles of other musicians to encourage communication and collaboration.


## Front-end Repository (React with Vite)

### Table of Contents (Front-end)

1. [Setup](#setup)
    - [Scripts](#scripts)
    - [Environment variables](#environment-variables)
2. [File Structure](#file-structure)
3. [Used Technologies](#used-technologies)
4. [Client routes](#client-routes)


## Setup

#### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine before getting started.

Follow the steps below to setup the application in your local development environment:

1. Install dependencies

```bash
npm install
```

2. Run the application

```bash
npm run dev
```

The application will open automatically on localhost (port 5173 if it's not in use already).

<br/>

To create a production build

```bash
npm run build
```

### Scripts

The following commands can be found in the [`package.json`](./package.json) file in the project root. To execute them, simply use the command the following way:

```
npm run <command>
```

| Command      | Description                                       |
| ------------ | --------------------------------------------------|
| `dev`        | Starts the Vite development server.               |
| `build`      | Builds an optimized version for production.       |
| `lint`       | Runs ESLint to check and fix the code.            |
| `preview`    | Launches a preview of the generated application.  |


### Environment variables

| Variable                             | Description                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| `VITE_API_URL`             | Url from the API                                                     |
| `VITE_APP_SITE_TITLE`                    | App title                             |
| `VITE_REACT_APP_GOOGLE`     | Google key                            |

## File Structure

The file structure in the Jamlink front-end is organized as follows:

```plaintext
.
|-- .github/
|-- public/  
|-- src/
|   |-- assets/
|   |-- components/
|   |-- contexts/
|   |-- pages/
|   |-- routes/
|   |-- services/
|   |-- utils/
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|-- .eslintrc.cjs
|-- .gitignore
|-- README.md
|-- index.html
|-- package-lock.json
|-- package.json
|-- vite.config.js

```

## Used Technologies

- **Front-end:**
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [Vite](https://vitejs.dev/) - Fast development tool for JavaScript and TypeScript-based projects.
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Markup language for web page structure.
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Style sheet language for styling the user interface.
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language for client-side logic.
  - [Bootstrap](https://getbootstrap.com/) - CSS framework for fast and responsive web development.
  - [Google Autocomplete](https://developers.google.com/maps/documentation/javascript/places-autocomplete) - Google Maps Autocomplete component.

- **Back-end:**
  - [Express](https://expressjs.com/) - Web framework for Node.js used on the server.
  - [Node.js](https://nodejs.org/) - Runtime environment for JavaScript on the server side.
  - [MongoDB](https://www.mongodb.com/) - NoSQL database used for data storage.
  - [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.

- **Tools and Utilities:**
  - [GitHub Actions](https://github.com/features/actions) - For continuous integration and automatic deployment.

## Client routes

| Client routes       |                      |           |
|---------------------|----------------------|-----------|
|                     |                      |           |
|         URL         |      Description     | Protected |
| /                   | Index page           |           |
| /events             | Events gallery page  |           |
| /events/details/:id | Events details page  | ✔         |
| /event/create       | New event from page  | ✔         |
| /event/edit/:id     | Edit event form page | ✔         |
| /signup             | Signup page          |           |
| /login              | Login page           |           |
| /user/profile/:id   | User profile page    | ✔         |
| /user/community     | User gallery page    | ✔         |
| /user/edit/:id      | Edit user page       | ✔         |
