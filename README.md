# Word Frequency Counter

A webapp that show the top N occurring words with their frequency in  a given text.

# Technologies

Front-end : React

npm Modules :
axios (for web scrapping)

# Components

fetch():
- This function is to get data in form of text from https://raw.githubusercontent.com/invictustech/test/main/README.md
- axios request https://raw.githubusercontent.com/invictustech/test/main/README.md page and traverse DOM to retrive the data and return the data 

Form(): It is the main and essential component of the web app uses the useEffect, useState hooks
- useEffect hook calls the fetchData() every time page is loaded and stores the data in variable
- JSX element form is used to get the input from user
- event handler (handleSubmit and handleChange ) runs every time user enter the input value and stores the value in a variable
 
show(): it contains the logic to getting the frequency of each word and return the top N occuring words
- First clean the text (remove special character and numbers) 
- Splits the text into array of words
- Counting the occurrence of each words and sorting in decreasing order
- Finally return the top N occurring words 

# Working 
-  When the page is loaded the useEffect hook calls the fetchData function which further fetch the data
-  Now user enter's the input and hit submit button. The event handler calls the useState hook and store the user input in a variable 
-  After getting the user input show() function does its work and execute the logic to return the result and store it in a variable which is then printed using 
   JSX element
   
# Pre-requisite
  Before running the app, install
  - Node : https://nodejs.org/en/download/
  To check whether Node is installed properly
  
  $ Node --version
  
  $ npm --version

# Getting the app and running
  Open Command Line: 
  - git clone https://github.com/Ironnatron/React-App.git
  - cd React-App
  - unrar x react_app.rar
  - cd react_app
  - npm start


