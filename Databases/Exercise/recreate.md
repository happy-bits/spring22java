# Recreate

*Purpose: the following script will make it easy to remove and recreate a database*

Script to remove Demo and create a new database named Demo

	USE master
	ALTER DATABASE Demo
	SET SINGLE_USER WITH ROLLBACK IMMEDIATE
	DROP DATABASE Demo
	CREATE DATABASE Demo
	USE Demo
