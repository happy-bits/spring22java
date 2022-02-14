# Queries

    select * from Person
    select * from Passport

    select * from Person
    join Passport on Person.Id = Passport.BelongsToPersonId

    select * from Student
    select * from Attend
    select * from Course

    select Student.Name, Course.Title from Student
    join Attend on Student.Id = Attend.StudentId
    join Course on Attend.CourseId = Course.Id

    select * from ParkingLot
    select * from Customer

    select * from ParkingLot
    join Customer on ParkingLot.RentedBy=Customer.Id
