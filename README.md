# S & B
by: **Franklin Neves Filho, Otton Lara, Sapphire Mervilus, Luke Slautterback**

A web application for students to be able to sell old &amp; new items (such as textbooks, notebooks, tech, art etc.). As long as the student has a valid University email, they will be able to create an account and contribute to the community and marketplace. The main actor of this website is to include students with active student emails and IDs. 

**Structure:**
- SNB/
  - SNB_Frontend/ 
    - React App
  - SNB_Backend/
    - Spring Boot app
  - Documents/
    - Environment variables .txt
    - All Deliverables completed.


## Basics to know about the application:

#### Backend:
  To setup the backend, you need to first configure the environment variables before running. Under the documents folder, there is a .txt file labeled 'envVariables', listing all the environment vairables needed to be defined before starting the application.

  you will need:
    - a gmail account
    - A mySQL database running
  
  If running the application via IntelliJ this is what needs to be done:

  - go to: run > edit configurations
  - Create a configuration, if not present, and add the value of the variables in the Environment variables 
  <img src="https://i.imgur.com/rTpQrf0.gif" alt="Environment Variables"/>

#### Frontend:
  To run the react application, you must go to the terminal and type: npm run dev
  Ensure you have node installed on the device and it is included in the Environment Vairables of the computer
  
  <img src="https://i.imgur.com/59hW7Cp.gif" alt="Running react-app"/>
