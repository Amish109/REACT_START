# REACT_START


# Steps to create a react App from Scratch Using parcel Bundler
- create a div with id root in html 
-  Create ELements with React.createElement(tag,attributes,content)
- target root with:-
    .. const root= ReactDOM.createRoot(document.getElementById("root"))
    .. root.render(content) || root.render([contents])
- init the npm by ...  npm init 
- install react react=dom 
- install parcel in dev enviornment npm i -d parcel
- add node_modules in .gitignore
- run npx parcel index.html
-import React ReactDom from "react" ,"react-dom" and change the script type to module in index.html
-add dist .parcel-cache in .gitignore too

- before publishng our code we do npx parcel build index.html itll compact our code

# About .gitignore
- we put name of folders whos code we can regenerate hence ignoring them


# About package.json and package-lock.json
- package.json keep track of the packages installed and their versions and also looks after auto updating then
- package-lock.json keeps tracks of all the dependencies the package is dependent on
- every package has its own packe.json file
- this dependencies of one package on other package is called "Transitive Dependencies"

# About version of packages
- package version are shown as "^18.3.1" where start number shows major then minor and last is patch
- ^:- caret_ will update packages till the approximate minor update eg ^1.2.3 will be from 1.2.3 but <2.0.0
- ~:- tilde_ will update the package till the approximate patch update i.e  ~1.2.3 means from 1.2.3 but < 1.3.0
- *:- this will update everything even including the major update hence it is not recommended