
# Checkpoint - Churches

## Intro

Create a database model from the instructions below.

Add suitable foreign keys and primary keys.

Just hand in one solution. (If you do level 2, just hand in level 2)

Submit **one png file** which shows:
- the database diagram (the tables should show column information)
- SQL-code querying your database with the result of your queries

To make a screenshot in Windows, press Shift-Windows-S

## Time

2h

## Level 1

In this task you should create **two tables** + add relation(s)

The database should be able to store:

	Oscar-Fredriks church is located in Göteborg and is built 1893
	Masthuggs church is located in Göteborg and is built 1914
	Sankt Georgios church is located in Stockholm and is built 1890
	Matteus church is located in Norrköping and is built 1892

Insert rows in the tables for the content above.

Write one SELECT-statement to get info about the churches:

	Göteborg	1893	Oscar-Fredriks church
	Göteborg	1914	Masthuggs church
	Stockholm	1890	Sankt Georgios church
	Norrköping	1892	Matteus church

## Level 2

In this task you should create **four tables** + add relation(s)

Start solving Level 1. Then continue with the instructions below.

The database should be able to store:

    Linnea lives in Göteborg
    Harry lives in Stockholm

	Oscar-Fredriks church is located in Göteborg and is built 1893
	Masthuggs church is located in Göteborg and is built 1914
	Sankt Georgios church is located in Stockholm and is built 1890
	Matteus church is located in Norrköping and is built 1892

	Linnea likes Oscar-Fredriks church and Matteus church
	Harry likes Matteus church

Insert rows in the tables for the content above.

Write one SELECT-statement to get where the inhabitants lives:

    Linnea      Göteborg
    Harry       Stockholm

Write one SELECT-statement to get all inhabitants and the churches that they like:

	Linnea	Oscar-Fredriks church       1893
	Linnea	Matteus church              1892
	Harry	Matteus church              1892	

So the solution should have four tables and three select-queries.

## Hint

If you have trouble with Management Studio try:

- Close all tabs in the program
- Remove data from all tables
- Restart the program
- Delete the database and start over
- Hint: save often


