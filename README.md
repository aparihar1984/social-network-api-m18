# social-network-api-m18
Module 18 Social Network API NoSQL Challenge!

Building an API for a social network application!

## Introduction

For this assignment, I attempted to build an API for a social network web application where users can share their thoughts.  This app used Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Criteria
To meet the Accepted Criteria of this assignment, I tried to accomplish as much of the following as I could:

When the user enters the command to invoke the application, the server is started and the Mongoose models are synced to the MongoDB database.

When the user opens API GET routes in POSTMAN for users and thoughts, the data for each of these routes is displayed in a formatted JSON.

When the user tests API POST, PUT, and DELETE routes in POSTMAN, they are able to successfully create, update, and delete users and thoughts in the database.

When the user tests API POST and DELETE routes in POSTMAN, they are able to successfully create and delete reactions to thoughts.

## References

To complete this assignment I studied the following activities from the Module 18-NoSQL Class Activity Files as references:

"11-Ins_Models-Schemas"

"15-Ins_Models-Instance-Methods"

"21-Ins_Virtuals"

"23-Ins_Subdoc-Population"

"25-Ins_CRUD-Subdoc"

After this, I searched the internet for further information and came across the following websites as references:

"https://github.com/rmessett15/Social-Network-API"

"https://github.com/Morganbb104/HW_18-NoSQL-Social-Network-API"

"https://www.youtube.com/watch?v=huTouj3geKA"

"https://stackoverflow.com/questions/43060555/simple-email-regex-make-sure-user-includes-dot-domain"

The process of coding for me involved using code from the activities and websites mentioned above and commenting out every section of code in all of the files to see what each specific block of code accomplished as I was structuring the app in a similar manner to the Model-View-Controller format from Module 14.  

The structuring process involved creating the folders/files in the following order:

config

server.js

models

controllers

routes

utils

This led to a lot of experimentation in order to see what I felt was needed to ultimately complete as much of the Accepted Criteria as possible.  To see if the back end was running properly, I used the POSTMAN app to test the GET, POST, PUT and DELETE methods.

The experimentation was necessary since it should be pointed out that while the code given inside the above referenced websites was very helpful, simply copying and pasting code without understanding what that code does will lead to more complications and a lack of understanding.

## Screenshots
Here are the screenshots from my Postman App:

![](../social-network-api-m18/screenshots/GET%20Users%20Screenshot.png)

![](../social-network-api-m18/screenshots/DELETE%20New%20User%20Screenshot.png)

![](../social-network-api-m18/screenshots/GET%20Thoughts%20Screenshot.png)

![](../social-network-api-m18/screenshots/POST%20Thoughts%20Screenshot.png)

![](../social-network-api-m18/screenshots/POST%20Reactions%20Screenshot.png)
