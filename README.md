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
    - Diagrams/
      - All diagrams
    - UseCase/
      - All Use case docs
    - Deliverable/
      - All Deliverables completed.


## Basics to know before development:

Backend:
*  [ ] Knowledge of Java and the Springboot framework
*  [ ] Understand mySQL and know how to write basic queries
*  [ ] Database Normalization ( This is the concept of how to structure a relational database )

Frontend:
*  [ ] Knowledge of HTML JS and CSS
*  [ ] Understanding of Next.js and the React framework
*  [ ] HTTP requests
*  [ ] Bootstrap framework / Tailwind

## Endpoint Naming 
* 1 - Use clear URL names that establish what resource the service represents - Having a canonical 
format for defining URLs will help your API feel more intuitive  and easier to use. Be consistent 
in your naming conventions.
* 2 - Use the URL to establish relationships between resources Oftentimes you'll have a parent-child 
relationship between resources within your microservices where the child doesn't exist outside the 
context of the parent (hence you might not have a separate microservice for the child). Use the URLs 
to express these relationships. But if you find that your URLs tend to be excessively long and nested, 
your microservice may be trying to do too much.
* 3 - Establish a versioning scheme for URLS early —The URL and its corresponding endpoints represent a contract 
between the service owner and consumer of the service. One common pattern is to prepend all endpoints with a version 
number. Establish your versioning scheme early and stick to it. It's extremely difficult to retrofit versioning to 
URLS after you already have several consumers using them.


## Git Cheat Sheet
Here is the git cheat sheet if you guys need it.
You can also use GitDesktop which is simpler to use.

![Screenshot 2023-08-24 235807](https://github.com/franklinnevesfilho/SNB/assets/88294924/cfb15a9b-a026-4295-bb9c-dd763cf1b496)
![Screenshot 2023-08-24 235825](https://github.com/franklinnevesfilho/SNB/assets/88294924/511f2546-c9eb-45ff-b825-9d15336279f1)
