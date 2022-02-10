# Chinook 03

## Intro

Exercises related to the slides and demos:

- Group by
- Stored procedures
- Views
- Indexes
- Triggers

## Priority

Start with "your" exercise

    Grupp 1: 3.1
    Grupp 2: 3.2
    Grupp 3: 3.3
    Grupp 4: 3.4
    Grupp 5: 3.5
    Grupp 6: 3.6

When you're done do

    Chinook 02

Then

    Continue on Chinook 03

## 3.1 (Group by)

List the invoiceid(s) that contains the most invoicelines

Hint: google on "with ties"

## 3.2 (Group by)

List the 10 artists (or more) who released the most albums (ArtistName, NrOfAlbums)

Hint: google on "with ties"

## 3.3 (Stored procedures)

Create a stored procedure **CreateTrack** with parameters
- name
- unit price
- media type id
- milliseconds
- playlist id

When the procedure is called it should add a new track and add it to an existing playlist

Hint: read about **@@identity**

## 3.4 (Views)

Create a view **AlbumInfo** that contains two column: album title and artist name. Like this:

    Let There Be Rock	                    AC/DC
    For Those About To Rock We Salute You	AC/DC
    Balls to the Wall	                    Accept
    Restless and Wild	                    Accept

Then use the view to list info about albums that have 4 or fewer letters

## 3.5 (Index)

Measure the time it takes to add 10.000 customers (you can add the same customer over and over again)

Remove the inserted customers

Insert indexes on ALL columns (15 indexes)

Measure the time again and compare the result.

When you measure, try five times and pick the median value.

Extra: see if you get a different result if the inserted customers has random names, birthdate, country etc.

## 3.6 (Trigger)

Create a table that is similar to Artist. It should be namned **DeletedArtist** and have three columns:
- ArtistId
- Name
- DeletedDate

Then create a trigger **LogDeletedArtists**. When an artist is removed from the Artist-table, then a row should be added to DeletedArtist with ArtistId, Name and DeletedDate.

