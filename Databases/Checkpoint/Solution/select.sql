
-- Info about churches (Level 1)
select City.Name, BuiltYear, Church.Name 
from Church 
left join City on Church.LocatedInCityId = City.id

-- Where the citizens lives (Level 2)
select Citizen.Name, City.Name
from Citizen 
left join City on Citizen.LivesInCityId = City.Id

-- Which churches the citizens like (Level 2)
select Citizen.Name, Church.Name, BuiltYear 
from Citizen 
left join FavoriteChurch on Citizen.Id = FavoriteChurch.citizenid
left join Church on FavoriteChurch.ChurchId = Church.Id


