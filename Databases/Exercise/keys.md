# Keys

*Purpose: intro to "keys". See the difference when keys are used or not*


## Delete the old database

First

	use master

Then delete the database using the GUI	

## Create a database

Create a blank database 

	create database Demo

Enter that database

	use Demo

## Exercise: color table

Create a table "Color" with the columns:
- Id
- Name

## Exercise: person table

Create a table "Person" with:
- Name
- FavoriteColorId 

## Exercise: add colors

Add the following colors:
- 91 Red
- 92 Green
- 93 Blue
- 94 Purple
- 95 Indigo

## Exercise: add people

Add this people:
- Mia likes Red
- James likes Green
- Liam likes Blue

## Exercise: add yellow

List all content form the tables

	select * from Color
	select * from Person

Add the color Yellow with Id=91:

	insert into Color values (91, 'Yellow');

What's the problem with the data now?

## Exercise: add Joe

Add Joe:

	insert into Person values ('Joe', 666666);

What's the problem with the data now?

## Hint

When running many statements at once, you might need to add

	GO

between the statements

## Recreate with keys

Now we will restart this example. Clear the database and start to use a **primary key** and **foreign key**

Delete the Demo database and create it again

	create database Demo

Enter that database

	use Demo

Add the following two tables with data:

	create table Color(
		Id int primary key, --- new!
		Name varchar(50),
	)

	create table Person(
		Name varchar(50),
		FavoriteColor int foreign key references Color(Id), --- new!
	)

	insert into Color 
	values
	(91, 'Red'),
	(92, 'Green'),
	(93, 'Blue'),
	(94, 'Purple'),
	(95, 'Indigo')

	insert into Person
	values
	('Mia', 91),
	('James', 92),
	('Liam', 93)


## Exercise: add yellow

Try to add "Yellow" with Id 91

What happens? 

## Exercise: add Joe

Try to add the person
- Joe 666666

What happens? Good/bad?
