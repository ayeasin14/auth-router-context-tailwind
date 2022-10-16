/* 
BASIC CONTEXT API SETUP

1. context API: Share auth state with other components (across the application)
2. Create an UserContext 
3. ContextProvider with passed Children 
4. Set the UserContext in the index.js
5. Now to consume the context: export the AuthContext from UserContext
6. Now at Hader or Home or anywhere else: use useContext hook to get the info in the context.
7. 


*/



/* 
AUTH INTEGRATION

1. use getAuth by passing the app from firebase config.
2. create A function named createUser to return createUserWithEmailandPassword.


*/