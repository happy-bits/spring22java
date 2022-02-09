# Group By

*Purpose: show the usage of "GROUP BY" to extract info about groups of rows*

References
- https://www.w3schools.com/sql/sql_groupby.asp
- https://www.w3schools.com/sql/sql_having.asp


## Exercise: Person table

Create a new database and name it Demo

Create a table "Person" with columns:
- Name
- Country    (a string)
- Income     (a whole number)

Solution

	create table Person(
		Name varchar(50),
		Country varchar(50),
		Income int
	)

## Exercise: add data

Add the following data:

	Mia 	Sweden 	20000
	Olivia 	Iceland 50000
	James 	Sweden 	25000
	Liam 	Sweden 	28000
	Ava		Iceland 60000
	Lisa 	Spain 	10000

Solution

	insert into Person
	values
	('Mia', 'Sweden', 20000),
	('Olivia', 'Iceland', 50000),
	('James', 'Sweden', 25000),
	('Liam', 'Sweden', 28000),
	('Ava',	'Iceland', 60000),
	('Lisa', 'Spain', 10000)


	select * from Person

## Count

Use "count" to count number of rows in each group, so you get:

	2
	1
	3

Try

	select count(*) 
	from Person 
	group by Country

And try

	select count(*) as Inhabitants
	from Person 
	group by Country

## Exercise: two columns

Adjust the query so you get.

	Iceland	 2
	Spain	 1
	Sweden	 3

Solution

	select Country, count(*) as Inhabitants
	from Person 
	group by Country


## Exercise: show the average income

Show the average of income by nation:

	Iceland	55000	2
	Spain	10000	1
	Sweden	24333	3


Hint: use AVG(MyColumnName) to get the average

Solution

	select Country, AVG(Income) as Average, COUNT(*)  as Inhabitants
	from Person 
	group by Country

## Filter with HAVING

Continue, but only show countries with at least 2 inhabitants

	Iceland	55000	2
	Sweden	24333	3


Filter the groups with "HAVING" (you can't use "WHERE" in this case)

	select Country, AVG(Income) as Average, COUNT(*)  as Inhabitants
	from Person 
	group by Country
	having count(*)>=2

## Filter with WHERE

Get all countries that starts with the letter "S"

	Spain	1
	Sweden	3

"WHERE" is used to filter rows before the grouping. (in this case "HAVING" would work as well)

	select Country, count(*) as Inhabitants
	from Person 
	where Country like 'S%'
	group by Country 

## Hint

HAVING and WHERE are similar. Both are about filtering.

HAVING is about filtering **groups**

WHERE is about filtering **rows**

## Exercise: start with L

Get number of inhabitants with names starting with "L" in each country

	Spain	1
	Sweden	1

Solution

	select Country, count(*) as Inhabitants 
	from Person 
	where Name like 'L%'
	group by Country 

## Group by - common errors (SELECT)

Below follows some common errors when dealing with GROUP BY

Try the following. What's the problem here?

	select count(*) as Inhabitants, Income 
	from Person 
	group by Country

You'll get:

	Column 'Person.Income' is invalid in the select list because it is not contained in either an aggregate function or the GROUP BY clause.
	

Explanation:

	The columns in "SELECT" can't be anything you like

	In the example above it doesn't work. E.g in Sweden not everyone has the same income.

	You'll get:


## Group by - common errors (HAVING)

Try the following. What's the problem here?

	select Country, count(*) as Inhabitants
	from Person 
	group by Country 
	having Name like 'L%'

You'll get:

	Column 'Person.Name' is invalid in the HAVING clause because it is not contained in either an aggregate function or the GROUP BY clause.

Explanation:

	The columns in "HAVING" can't refer to any column

	In the example above it doesn't work. E.g in Island not everyone has the same name.




