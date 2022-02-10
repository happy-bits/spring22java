# Index

*Purpose: speed test. Use index to speedup queries.*

Indexes are used to retrieve data from the database more quickly than otherwise. The users cannot see the indexes, they are just used to speed up searches/queries.

Simply put, an index is a pointer to data in a table. An index in a database is very similar to an index in the back of a book.

For example, if you want to reference all pages in a book that discusses a certain topic, you first refer to the index, which lists all the topics alphabetically and are then referred to one or more specific page numbers.

An index helps to speed up SELECT queries and WHERE clauses, but it slows down data input, with the UPDATE and the INSERT statements. Indexes can be created or dropped with no effect on the data.

Indexes can also be unique, like the UNIQUE constraint, in that the index prevents duplicate entries in the column or combination of columns on which there is an index.

The following guidelines indicate when the use of an index should be reconsidered.

- Indexes should not be used on small tables.
- Tables that have frequent, large batch updates or insert operations.
- Indexes should not be used on columns that contain a high number of NULL values.
- Columns that are frequently manipulated should not be indexed.

https://www.w3schools.com/sql/sql_create_index.asp
https://www.tutorialspoint.com/sql/sql-indexes.htm

## Exercise


Create the following database with a Order table containing 100.000 rows

	-- Create new database

	CREATE DATABASE Demo

	-- Helpfunction to create e random date

	CREATE OR ALTER PROCEDURE RandomDate
	@Result SMALLDATETIME OUTPUT
	as
	BEGIN
		DECLARE @FromDate DATETIME2(0)
		DECLARE @ToDate   DATETIME2(0)

		SET @FromDate = '2021-01-01' 
		SET @ToDate = '2022-01-01'

		DECLARE @Seconds INT = DATEDIFF(SECOND, @FromDate, @ToDate)
		DECLARE @Random INT = ROUND(((@Seconds-1) * RAND()), 0)

		SET @Result = (SELECT DATEADD(SECOND, @Random, @FromDate))

	END

	-- Create the table Order

	CREATE TABLE Orders(Id INT NOT NULL, CreatedDate DATETIME, Status TINYINT, CampaignCode VARCHAR(10), TotalAmount DECIMAL)

	-- Fill the table with 100.000 rows

	DECLARE @i int = 0

	DECLARE @CreatedDate SMALLDATETIME

	WHILE @i < 100000 BEGIN

		EXEC RandomDate @CreatedDate OUTPUT

		INSERT INTO Orders
		VALUES (
			@i, 
			@CreatedDate, 
			FLOOR(RAND()*5), 
			CASE(SELECT FLOOR(RAND()*10))
				WHEN 0 THEN 'ABC-123'
				WHEN 1 THEN 'WER-456'
				WHEN 2 THEN 'BBB-777'
			END,
			FLOOR(RAND()*1000)+50
			) 

		SET @i = @i + 1
	END

Show the content of the table

	SELECT * FROM Orders

## Exercise (group by)

Run this script three times and note the difference. Calculate the median value of "elapsed time".

For example: 33ms (27ms 33ms 80ms)     (with index 13ms)

	SET STATISTICS TIME ON
		SELECT CampaignCode, COUNT(*) 
		FROM Orders
		GROUP BY CampaignCode
	SET STATISTICS TIME OFF

## Exercise (where)

Do the same with this script

For example: 11ms                      (with index 1ms)

	SET STATISTICS TIME ON
		SELECT COUNT(*) 
		FROM Orders
		WHERE CampaignCode='ABC-123' OR CampaignCode='WER-456'
	SET STATISTICS TIME OFF

## Hint

To run a script five times, end the script with

	GO 5

## Exercise

Add an index to increase performance

	CREATE INDEX IX_CampaignCode ON Orders(CampaignCode) 

Run the scripts again and notice the difference in speed 	

## Exercise

Do the measurements with this query

	SET STATISTICS TIME ON
		SELECT COUNT(*) 
		FROM Orders
		WHERE CreatedDate > '2021-07-01'
	SET STATISTICS TIME OFF
	-- WITHOUT:  10ms
	-- WITH:     3ms   (x3)

	SET STATISTICS TIME ON
		SELECT COUNT(*) 
		FROM Orders
		WHERE CreatedDate > '2021-07-01' AND CreatedDate < '2021-10-01'
	SET STATISTICS TIME OFF
	-- WITHOUT:   9ms
	-- WITH:      1ms  (x10)

	SET STATISTICS TIME ON
		SELECT TOP 10 *
		FROM Orders
		ORDER BY CreatedDate
	SET STATISTICS TIME OFF
	-- WITHOUT:   11ms
	-- WITH:       0ms (x10)

# Exercise

Create an index on CreatedDate and measure the time for the queries above

Solution

	CREATE INDEX IX_CreatedDate ON Orders(CreatedDate) 

