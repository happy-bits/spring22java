# Stored procedures

A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.

So if you have an SQL query that you write over and over again, save it as a stored procedure, and then just call it to execute it.

You can also pass parameters to a stored procedure, so that the stored procedure can act based on the parameter value(s) that is passed.

References:
- https://www.w3schools.com/sql/sql_stored_procedures.asp

Execute

	CREATE TABLE BicycleParts (
		Produktnamn varchar(50),
		Kod INTEGER
	);

	CREATE TABLE Pieces (
		Code INTEGER,
		Name varchar(50) 
	);
	

## Stored procedure

Run this:

	CREATE PROC AddProducts AS
	BEGIN

		INSERT INTO BicycleParts(Produktnamn, Kod) VALUES('Sprocket', 5)     
		INSERT INTO BicycleParts(Produktnamn, Kod) VALUES('Wheel', 6)        
		INSERT INTO BicycleParts(Produktnamn, Kod) VALUES('Saddle', 7)        
		INSERT INTO BicycleParts(Produktnamn, Kod) VALUES('Bike spokes', 8)  

		INSERT INTO Pieces(Code, Name) VALUES(100,'Apple'); 
		INSERT INTO Pieces(Code, Name) VALUES(6,'Wheel'); 
		INSERT INTO Pieces(Code, Name) VALUES(7,'Saddle'); 
		INSERT INTO Pieces(Code, Name) VALUES(200,'Banana'); 
	END

Now you have created a stored produce named AddProducts.

Run this:

	SELECT * FROM BicycleParts
	SELECT * FROM Pieces

As you see the tables are still empty

Call the stored procedure

	EXEC AddProducts

...and now the products are inserted

	SELECT * FROM BicycleParts
	SELECT * FROM Pieces

## Parameters and logic

A stored procedure can take parameters and contain logic.

Here we create a stored procedure that insert a row in BicyclePart only if the name is unique.

Run this to create the procedure:

	CREATE OR ALTER PROC TryInsertBicyclePart @ProductName varchar(50), @Kod int AS
	BEGIN

		DECLARE @part varchar(50) = (SELECT Produktnamn FROM BicycleParts WHERE Produktnamn= @ProductName)
		
		IF @part is null
			INSERT INTO BicycleParts(Produktnamn, Kod) VALUES(@ProductName, @Kod)
		ELSE
			PRINT 'The product name already exist'

	END

Execute the following row by row to see how the procedure works

	SELECT * FROM BicycleParts

	EXEC TryInsertBicyclePart 'Tires', 9
	SELECT * FROM BicycleParts

	EXEC TryInsertBicyclePart 'Tires', 9 -- nothing will happen here
	SELECT * FROM BicycleParts

## Exercise: remove products

Create a stored procedure namned **RemoveProducts** that removes all rows from both tables

Next, call that method

Solution

	CREATE PROC RemoveProducts AS
	BEGIN
		DELETE FROM BicycleParts
		DELETE FROM Pieces
	END

	GO

	EXEC RemoveProducts

## Exercise: remove product by name

We would like a stored procedure which could be called like this:

	EXEC RemoveProductsByName 'Wheel'

...and in this case remove the product named **Wheel** in both tables

Create the stored procedure and then call it to verify that **Wheel** is removed from both tables

Solution

	CREATE PROC RemoveProductsByName (@ProductName varchar(50)) AS
	BEGIN
		DELETE FROM BicycleParts WHERE Produktnamn = @ProductName
		DELETE FROM Pieces WHERE Name = @ProductName
	END

	GO

	EXEC RemoveProductsByName 'Wheel'

# Details

It's not possible to create two stored procedures with the same name (even if they have different parameters)
