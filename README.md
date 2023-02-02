# Project 12 - Develop an analytics dashboard with React

## 1. - Projet structure

The project structure is set up in such a way

```bash
OPC-PROJET-12/
|
|-see-back/
|  |- ... (element for API from the repo :  P9-front-end-dashboard)
|
|-see-front/
|  |- ...
|  |- src
|      |- assets
|      |- components
|      |      |-component1
|      |            |- component1.jsx
|      |            |- composant1.scss
|      |- styles
|      |      |-mains.scss
```

The naming conventions used for the project are as follows

CSS & JS :

For class, variable and function name : ```camelCase```.

The file mains.scss containt all url of each scss file.


REACT :

In each component there are a file name index.jsx and the style file name component.scss.




## 2. - Front-end
## 2.1 - Front-end : Stack
- HTML <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>

- SASS <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>

- React <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>

## 2.2 - Front-end : Libraries
- Recharts <a href="https://recharts.org" target="_blank" rel="noreferrer"><img src="https://www.wappalyzer.com/images/icons/Recharts.svg" width="46" height="46" alt="Recharts" /></a>

## 2.3 - Front-end : Installation

The project uses Node packages and uses ```npm```, so you will need Node.js
It can be download here : https://nodejs.org/

after that, Fork the Front-end [repository](https://github.com/Kilian06/OPC-Projet-12/tree/main/see-front) 
Clone it locally with with git clone
Next, you will need to install all project dependencies with ``` npm install```

## 2.4 - Front-end : Start

Before start you will need to start back-end.
After that, navigate to the frontend directory in the terminal and type ```npm start```

Since the backend is already running, the terminal will prompt you to confirm using port 3001 instead of 3000 (which is already in use by the backend). To do this, type ```Y``` and press ```Enter```. After that, a browser page should open on the URL :```http://localhost:3001/```


## 3. - Back-end
## 3.1 - Back-end : Installation
- [NodeJS (version 12.18)](https://nodejs.org/en/blog/release/v12.18.0/)
- Yarn

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

Then you need to Fork the repository and Clone it on your computer and run the command ```npm install```

## 3.2 - Back-end : Launch

You need to launch the back-end before the front-end. To do that, you have to run thsi command ```npm start``` in the back-end folder.
If all is ok, you will see in the terminal : Magic happens on port 3000
Afterthat you can start the front-end.