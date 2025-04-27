 # Code-Reviewer

- code review app for  code checking and code review.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)


# Introduction
Code-Reviewer is a code review app that helps you check your code for best practices, readability, potential issues, and maintainability. It provides feedback on your code snippets, focusing on various aspects such as variable declarations, naming conventions, code structure, and more.

# Features
- Code review for best practices, readability, potential issues, and maintainability
- Feedback on variable declarations, naming conventions, code structure, and more


# Installation
- This application is devloped in  Mern stack + google gemini api key.so during these repo you need to add your own google gemini api key.
- note :- i use google gemini flash model for this app so you need to add your own google gemini api key in the .env file.

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

$ cd ..
$ cd frontend
$ npm install
```

- now at backend & frontend directory create a .env file and 

- backend/.env file
```bash
GOOGLE_GEMINI_KEY=<your google gemini flash model api key>
```

- frontend/.env file
```bash
VITE_BEND_API = "http://localhost:3000/ai/get-review"   #This is for the local server.

````

- now go to frontend and backend directory and  start the backend server and  frontend server

```bash
..backend
$ npm start

..frontend
$ npm run dev
```

-----------------------------
# Screenshots
1. Base UI :-

![Screenshot 2025-04-27 195559](https://github.com/user-attachments/assets/4f72f5a5-8b0d-44ce-b24d-cf93396fe988)

2. With Response :-
![image](https://github.com/user-attachments/assets/666d6a12-e74e-49d5-83c8-8b7209b9fc3d)




