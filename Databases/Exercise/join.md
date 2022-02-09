# Join

*Purpose: compare different types of "joins" + read data and create tables*

Read more:

	https://www.w3schools.com/sql/sql_join.asp
	https://www.w3schools.com/sql/sql_join_inner.asp
	https://www.w3schools.com/sql/sql_join_left.asp
	https://www.w3schools.com/sql/sql_join_right.asp
	https://www.w3schools.com/sql/sql_join_full.asp

## Create a database

Create a blank database 

	create database Demo

Enter that database

	use Demo

## Person table

Create a table "Person" with two columns:
- Name (a string)
- FavoriteColorId (a number)

Run this code

	create table Person(
		Name varchar(50),
		FavoriteColorId int
	)

## Exercise: Color table 

Create a table "Color" with two columns:
- Id (a number)
- Name (a string)

## Add colors

Add the following to the Color table:

- 91 Red
- 92 Green
- 93 Blue
- 94 Purple
- 95 Indigo

...then show the content of the table using **select**

	insert into Color 
	values
	(91, 'Red'),
	(92, 'Green'),
	(93, 'Blue'),
	(94, 'Purple'),
	(95, 'Indigo')

	select * from Color

## Hint

The code window in Management Studio is quite slow in realising that you have updated your database with new columns and tables.

So if you get red squiggles around keyword try refreshing the cache:

Press Ctrl-Shift-R to "Refresh Local Cache". Then "intellisence" will work better.

## Exercise: add people

Add the following People: 
- Mia and Olivia like red
- James likes green
- Liam likes blue
- Ava don't know
- An undefined person likes red

...the list all People
	
## Exercise: join

List all info of both tables:

	select * from Person
	select * from Color

Run the command below:

	select * 
	from Person 
	join Color 
	on Person.FavoriteColorId = Color.Id

...what result do you get?

## Exercise: left join

Run the command below:

	select * 
	from Person 
	left join Color 
	on Person.FavoriteColorId = Color.Id

...what result do you get?

## Exercise: right join

Do a "right join". What result do you get?

	select * 
	from Person 
	right join Color 
	on Person.FavoriteColorId = Color.Id

## Exercise

Do a "full join". What result do you get?

	select * 
	from Person 
	full join Color 
	on Person.FavoriteColorId = Color.Id