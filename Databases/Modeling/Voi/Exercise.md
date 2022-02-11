# Voi - SQL Modeling

## Intro

You're going to model a database for Voi. Voi owns thousands of scooters and earns money by renting the scooters to customers.

Below you see notes from your meeting with Voi. 

Create an ER-diagram for their business using **lucid charts**. Then create a database diagram with appropriate primary keys, datatypes and relations using **SQL Management Studio**

Everything is about what to **store**. You do not need to think about the app, the GUI or the functionality. 

## Notes 

We have many customers that take a scooter for a ride. We need to keep track of all of our scooters, where they are right now and who is driving the scooter. 

We have three types of scooters now with different battery power and top speed. One of the scooters was released this year and the others are two years old. 

To see which places that are popular we want to know the start and end position of each ride. As well as the time.

Using the app the customer fills in his first name, last name, email and phone number. Some customers are "Gold"-members with a 20% discount. Some are "Silver"-member with 15% discount. Maybe we will add more membership later.

When a customer has finished a trip he can rate his experience using stars (1-5). We need to keep track of how much we charge the customer for the trip. And if it's paid or not.

Every customer can login with username and password. Within the app the customer can add his credit cards. If the user should choose which card he prefers. We need to store the usual card info (number, expires etc.)

It would be nice if someone from the economy could see how many scooters we bought in 2021 and what that cost.

Some scooters are in good shape, some are in bad shape. Some scooters need to change a tire and some have other problems. We would like to store these kind of attributes for the scooters in a general way (so we later easily can add more attributes)

## Hints

Look for the following in the text:
- People
- Things
- Places
- Events

Sometimes it helps to add rows in your database to see if it's setup right


## Extra

If you are finished with the task above: show your teacher.

Then you can extend the diagram with more entities, e.g:

- Retailers of scooters. Which scooters they sell. Contact info.
- Staff/freelancers that collect the scooters (and get money for that)
- Staff that repairs the scooters