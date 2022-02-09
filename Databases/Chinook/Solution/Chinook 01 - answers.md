# Chinook 01

## Intro

The parentheses shows which columns to be retrieved. For example, in question 3, only the ArtistName column should be retrieved.

Exercises with one table at a time


## 1.1

Run the script "Chinook - Script to create database.sql" to create the music database

## 1.2

List all info about all the artists

    select * from Artist

## 1.3

List all artists' names. Sort by name. (ArtistName)

    select Name as ArtistName 
    from Artist 
    order by Name

## 1.4

List the artists with id 3, 4, 5, 6 or 7

    select * from Artist
    where ArtistId>=3 and ArtistId<=7

Alternative

    select * from Artist
    where ArtistId between 3 and 7

## 1.5

List the artist that have a name that starts with B or R

    select * from Artist
    where Name like '[BR]%'
    order by Name

Alternative

    select * from Artist
    where Left(Name, 1)='B' or Left(Name,1)='R'
    order by Name

Alternative

    select * from Artist
    where Left(Name, 1) in ('B', 'R')
    order by Name

## 1.6

List all artists starting with "Academy" (Name)

    select Name 
    from Artist 
    where Name like 'Academy%'

## 1.7

List all albums where the second letter of the title is "a" and the third letter is "r"
(Title)

    select Title 
    from Album 
    where Name like '_ar%'

## 1.8

List all albums where the first letter of the title is a vowel

    select Title 
    from Album 
    where Name like '[aoueiy]%'


## 1.9

List email of customers that lives in Copenhagen or Paris

    select Email from Customer
    where City='Copenhagen' or City='Paris'

Alternative

    select Email from Customer
    where City in ('Copenhagen', 'Paris')

## 1.10

Figure out how many invoices that are missing postal code.

    select count(*)
    from Invoice
    where BillingPostalCode is null

## 1.11

List the names of tracks composed by REM that are longer than 4 minutes

    select Name from Track
    where Composer='R.E.M.' and Milliseconds > 4*60*1000


## 1.12

List the tracks with id's 10-20 and 50-60

    select * from track
    where trackid between 10 and 20
        or trackid between 50 and 60

Alternative

    select * from track
    where trackid >=10 and trackid <=20
        or trackid >=50 and trackid <=60

## 1.13

List track with names that start with the word "You". But not: Your, You're, You've.

    select * from track
    where Name like 'You %'
