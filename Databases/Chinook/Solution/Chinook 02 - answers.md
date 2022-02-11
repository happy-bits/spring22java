# Chinook 02

## Intro

Joining two tables

## 2.1

List all albums together with artists for the albums (ArtistName, AlbumTitle)

    select Artist.Name ArtistName, Album.Title AlbumTitle 
    from Album left join Artist  
    on Album.ArtistId = Artist.ArtistId
    order by Artist.Name

## 2.2

List the first names of all customers and their support representatives.

    select Customer.FirstName, Employee.FirstName 
    from Customer 
    join Employee on SupportRepId = EmployeeId

## 2.3

List the names of all tracks that starts with the word "I" and their genre-names

    select Track.Name, Genre.Name from Track 
    join Genre on Track.GenreId = Genre.GenreId
    where Track.Name like 'I %'

# 2.4

List the track that starts with the letter "A" and where the album name start with the same letter

    select Track.Name, Album.Title 
    from Track join Album on Track.AlbumId = Album.AlbumId
    where Album.Title like 'A%' and Track.Name like 'A%'