
# Diverse

## @@IDENTITY

I korthet: använd SCOPE_IDENTITY() istället @@IDENTITY, det är lite säkrare (om t.ex tabellen har en trigger på sig)

https://stackoverflow.com/questions/42648/sql-server-best-way-to-get-identity-of-inserted-row


**@@IDENTITY** returns the last identity value generated for any table in the current session, across all scopes. You need to be **careful** here, since it's across scopes. You **could get a value from a trigger**, instead of your current statement.

**SCOPE_IDENTITY()** returns the last identity value generated for any table in the current session and the current scope. **Generally what you want to use.**

The **OUTPUT** clause of the INSERT statement will let you access every row that was inserted via that statement. Since it's scoped to the specific statement, it's **more straightforward** than the other functions above. However, it's a little **more verbose** (you'll need to insert into a table variable/temp table and then query that) and it gives results even in an error scenario where the statement is rolled back. That said, if your query uses a **parallel execution plan**, this is the only guaranteed method for getting the identity (short of turning off parallelism). However, it is executed before triggers and cannot be used to return trigger-generated values.

https://docs.microsoft.com/en-us/sql/t-sql/queries/output-clause-transact-sql?redirectedfrom=MSDN&view=sql-server-ver15

@@IDENTITY and SCOPE_IDENTITY return the last identity value generated in any table in the current session. However, SCOPE_IDENTITY returns the value only **within the current scope** @@IDENTITY is not limited to a specific scope.

SCOPE_IDENTITY returns the last identity value inserted into an identity column in the same scope. A scope is a module: **a stored procedure, trigger, function, or batch**. Therefore, if two statements are in the same stored procedure, function, or batch, they are in the same scope.	

