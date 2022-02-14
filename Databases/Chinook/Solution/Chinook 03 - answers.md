# Chinook 03

## Intro

Exercises related to the slides and demos:

- Group by
- Stored procedures
- Views
- Indexes
- Triggers

## 3.1 (Group by)

List the invoiceid(s) that contains the most invoicelines

Hint: google on "with ties"

    select top 1 with ties count(*), InvoiceId 
    from invoiceline
    group by InvoiceId
    order by count(*) desc

## 3.2 (Group by)

List the 10 artists (or more) who released the most albums (ArtistName, NrOfAlbums)

Hint: google on "with ties"

    select top 10 with ties Count(*) NrOfAlbums, Artist.Name
    from Artist join Album on Artist.ArtistId=Album.ArtistId
    group by Artist.name
    order by NrOfAlbums desc

This will give you 12 rows (since more artists have produced 4 albums)

Alternative, if we are not certain the name of the artist is unique:

	select top 10 with ties Count(*) NrOfAlbums, Artist.Name
    from Artist 
	join Album on Artist.ArtistId=Album.ArtistId
    group by Artist.ArtistId, Artist.Name
	order by NrOfAlbums desc, Artist.Name

Alternative with a subquery

    select NrOfAlbums, a.Name
    from Artist a join (

        select top 10 with ties Count(*) NrOfAlbums, Artist.ArtistId 
        from Artist join Album on Artist.ArtistId=Album.ArtistId
        group by Artist.ArtistId
        order by NrOfAlbums desc
        ) x
        on a.ArtistId = x.ArtistId

Alternative with selection in column

	select top 10 with ties Count(*) NrOfAlbums, (select Name from Artist A where A.ArtistId = Artist.ArtistId) Name
    from Artist join Album on Artist.ArtistId=Album.ArtistId
    group by Artist.ArtistId
    order by NrOfAlbums desc

## 3.3 (Stored procedures)

Create a stored procedure **CreateTrack** with parameters
- name
- unit price
- media type id
- milliseconds
- playlist id

When the procedure is called it should add a new track and add it to an existing playlist

Hint: read about **@@identity**

Solution

    create or alter procedure CreateTrack(@name nvarchar(200), @unitprice numeric, @mediatypeid int, @milliseconds int, @playlistid int)
    as
    begin

        insert into Track(Name, UnitPrice, MediaTypeId, Milliseconds)
        values (@name, @unitprice, @mediatypeid, @milliseconds)

        insert into PlaylistTrack
        values (@playlistid, @@IDENTITY)

    end

    select * from PlaylistTrack where PlaylistId=18
    select * from Track where TrackId=3506

    exec CreateTrack 'My new track',10, 1,20000, 18

## 3.4 (Views)

Create a view **AlbumInfo** that contains two column: album title and artist name. Like this:

    Let There Be Rock	                    AC/DC
    For Those About To Rock We Salute You	AC/DC
    Balls to the Wall	                    Accept
    Restless and Wild	                    Accept

Then use the view to list info about albums that have 4 or fewer letters

Solution

	create view AlbumInfo as

        select Album.Title, Artist.Name
        from Album join Artist on Album.ArtistId = Artist.ArtistId

    select * from AlbumInfo
    where Len(title) <=4         


## 3.5 (Index)

Measure the time it takes to add 10.000 customers (you can add the same customer over and over again)

Remove the inserted customers

Insert indexes on ALL columns (15 indexes)

Measure the time again and compare the result.

When you measure, try five times and pick the median value.

Extra: see if you get a different result if the inserted customers has random names, birthdate, country etc.

Solution

    -- Insert 10.000 employees and measure the time

    DECLARE @startTime DATETIME;
    DECLARE @endTime DATETIME;

    SET @startTime = GETDATE();

    DECLARE @i int = 0

    WHILE @i < 10000 BEGIN

        INSERT INTO Employee 
        VALUES ('Lastname', 'FirstName', 'Title', 1, '1980-01-01', '1980-01-01', 'Address', 'City', 'State', 'Country', 'PostalCode', 'Phone', 'Fax', 'Email')

        SET @i = @i + 1

    END

    SET @endTime = GETDATE();
    SELECT DATEDIFF(millisecond,@startTime,@endTime) AS ElapsedMilliseconds;

    -- Clean up the table

    DELETE FROM Employee WHERE LastName='Lastname'

    -- Create the indexes

    CREATE INDEX I1 ON Employee(LastName)
    CREATE INDEX I2 ON Employee(FirstName)
    CREATE INDEX I3 ON Employee(Title)
    CREATE INDEX I4 ON Employee(ReportsTo)
    CREATE INDEX I5 ON Employee(BirthDate)
    CREATE INDEX I6 ON Employee(HireDate)
    CREATE INDEX I7 ON Employee(Address)
    CREATE INDEX I8 ON Employee(City)
    CREATE INDEX I9 ON Employee(State)
    CREATE INDEX I10 ON Employee(Country)
    CREATE INDEX I11 ON Employee(PostalCode)
    CREATE INDEX I12 ON Employee(Phone)
    CREATE INDEX I13 ON Employee(Fax)
    CREATE INDEX I14 ON Employee(Email)
    CREATE INDEX I15 ON Employee(EmployeeId)

    /*

    Result: by adding the indexes it takes 30% longer time to insert 10.000 employees

    Time to insert 10.000 employees with index:    Median 2640 (2604-2760)
    Time to insert 10.000 employees without index: Median 2024 (2000-2123)

    */

## 3.6 (Trigger)

Create a table that is similar to Artist. It should be namned **DeletedArtist** and have three columns:
- ArtistId
- Name
- DeletedDate

Then create a trigger **LogDeletedArtists**. When an artist is removed from the Artist-table, then a row should be added to DeletedArtist with ArtistId, Name and DeletedDate.

Solution

    CREATE TABLE [dbo].[DeletedArtist](
        [ArtistId] [int] PRIMARY KEY,
        [Name] [nvarchar](120) NULL,
        [DeletedDate] datetime NOT NULL
    )

    go

	CREATE OR ALTER TRIGGER LogDeletedArtists  
	ON Artist  
	AFTER DELETE   
	AS 
	BEGIN

		declare @ArtistId int = (select ArtistId FROM DELETED)
		declare @Name varchar(120) = (select Name FROM DELETED)
		INSERT INTO DeletedArtist VALUES (@ArtistId, @Name, GETDATE())
	END

    -- Let's try it

	INSERT INTO Artist values ('New')
	select * from Artist order by ArtistId desc
	select * from DeletedArtist

	delete from artist where ArtistId=276
