# Views

*Purpose: show the usage of "views"*

In SQL, a view is a virtual table based on the result-set of an SQL statement.

A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.

You can add SQL functions, WHERE, and JOIN statements to a view and present the data as if the data were coming from one single table.

A view always shows up-to-date data! The database engine recreates the data, using the view's SQL statement, every time a user queries a view.

https://www.w3schools.com/sql/sql_view.asp

## Details -  Views compared to Stored procedures

Most simply, a view is used when only a SELECT statement is needed. Views should be used to store commonly-used JOIN queries and specific columns to build virtual tables of an exact set of data we want to see. Stored procedures hold the more complex logic, such as INSERT, DELETE, and UPDATE statements to automate large SQL workflows.

https://dev.to/rachelsoderberg/comparing-sql-views-and-stored-procedures-4pfb#:~:text=Views%20should%20be%20used%20to,to%20automate%20large%20SQL%20workflows.

You can use a view AS a table... stored procedures are for DOING things... views are for making your life easier

Stored procedure
* Can NOT be used as building block in a larger query
* Can contain several statements, loops, IF ELSE, etc.
* Can perform modifications to one or several tables

Views
* Can be used as building block in a larger query
* Can contain only one single SELECT query
* Can NOT perform modifications to any table

https://stackoverflow.com/questions/5194995/what-is-the-difference-between-a-stored-procedure-and-a-view#

## Exercise

Execute this

	CREATE TABLE [RoomSize](
		[Id] [int] NOT NULL,
		[RoomType] [nvarchar](50) NOT NULL,
		[NumberOfBeds] [int] NOT NULL,
		[ExtraBeds] [int] NULL,
		[Price] [int] NOT NULL
	)

	INSERT [RoomSize] VALUES (1, 'Single room', 1, 0, 700)
	INSERT [RoomSize] VALUES (2, 'Single room + 1', 1, 1, 720)
	INSERT [RoomSize] VALUES (3, 'Double room', 2, 0, 900)
	INSERT [RoomSize] VALUES (4, 'Double room + 1', 2, 1, 920)
	INSERT [RoomSize] VALUES (5, 'Double room + 2', 2, 2, 940)
	INSERT [RoomSize] VALUES (6, 'Suite', 4, 0, 1200)
	INSERT [RoomSize] VALUES (7, 'Precidential suite', 2, 4, 1500)
	INSERT [RoomSize] VALUES (8, 'Bridal suite', 2, 0, 2000)

Look at the RoomSize-table

	select * from RoomSize

## Exercise

Create a view with name "RoomsWithExtraBeds" that gets all rooms with one or more extra beds.

Then use the view:

	select * 
	from 
	RoomsWithExtraBeds

Detail: if you want to run the script at once you have to write "go" above "create View"

## Exercise

Use the last view but only show rooms cheaper than 925

This is an example that you can continue to filter on a view

## Exercise

Create a view "Cheap Rooms With Extra Beds" that show rooms with extra beds that are cheaper than 925.
