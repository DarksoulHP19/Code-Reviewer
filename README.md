 # Code-Reviewer

- code review app for  code checking and code review.

## Table of Contents
1. [Introduction](##introduction)
2. [Features](##features)
3. [Installation](##installation)


## Introduction
Code-Reviewer is a code review app that helps you check your code for best practices, readability, potential issues, and maintainability. It provides feedback on your code snippets, focusing on various aspects such as variable declarations, naming conventions, code structure, and more.

## Features
- Code review for best practices, readability, potential issues, and maintainability
- Feedback on variable declarations, naming conventions, code structure, and more


## Installation
- This application is devloped in  Mern stack + google gemini api key.so during these repo you need to add your own google gemini api key.
- note :- i use google gemini flash model fort this app so you need to add your own google gemini api key in the .env file.

### steps to install
- clone the repo
```bash
$ git clone https://github.com/DarksoulHP19/Code-Reviewer 
```

- go into the directory
```bash
$ cd Code-Reviewer
```

- install the dependencies in backend and frontend

```bash
$ cd backend
$ npm install

// go back to the root directory and make another tab in terminal.

$ cd frontend
$ npm install
```

- now at backend directory create a .env file and add your google gemini api key in it.

```bash
GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
```

- now start the backend server and  frontend server

```bash
..backend
$ npm start

..frontend
$ npm run dev
```


