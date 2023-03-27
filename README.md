# GraphQL Books DB

## Introduction and Purpose:

This MERN application is the result of refactoring a codebase that relied on a RESTful API to query a Mongo database in order to utilise GraphQL queries instead. I used the exercise to gain additional practice at the art of modernising existing code, as well as to deepen my familiarity with the MERN stack, in particular handling query-triggered React renders.

## Scenario:

A fictional bibliophile desires a book search engine based on Google Books to find and keep track of new books to purchase and read.

## Usage and Technical Overview:

The user creates an account, which keeps track of books. 

![image](https://user-images.githubusercontent.com/121476474/227898652-2548d3c2-1131-48d1-aa75-7efde9cd03ea.png)

The user may search Google Books via the application's interface, and save any results of interest.

![image](https://user-images.githubusercontent.com/121476474/227898858-fc328593-9c0a-4ce1-9727-abe8a94390b6.png)

The user may switch to the 'See Your Books' page, where they can review the books they've saved and delete past selections as desired.

![image](https://user-images.githubusercontent.com/121476474/227899282-f8847de3-3f88-4f4b-aefb-63a3ccf578ad.png)

The application associates an array of Book records with each user profile. Both the user profiles themselves and the book records are managed using `useQuery` and `useMutation` hooks in React. These are wired up to GraphQL resolvers in the back end, which interact with the MongoDB database.

## Installation

The application may be accessed at [https://graphql-books-db.herokuapp.com/](https://graphql-books-db.herokuapp.com/)

If deploying locally, fork the repository and run `npm i` followed by `npm build` to install the application. Modify environment variables as desired.

## Testing and Dependencies

As a MERN-stack application, the project is built with MongoDB, Express.js, React, and Node.js. Authentication is handled by way of the [JSON Web Token libraries](https://jwt.io/) and relies on [bcrypt](https://www.npmjs.com/package/bcrypt) for password encryption. The [GraphQL](https://graphql.org/) API is built with the [Apollo](https://www.apollographql.com/) server.

## License

All code created by [tadcos29](https://github.com/tadcos29) in this project should be considered part of the public domain. Pre-refactoring code may be subject to stricter licensing.
