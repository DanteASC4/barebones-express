# Barebones express example

A very barebones example of express and receiving some stuff on the backend.

## To get started

1. Run `npm install`
2. Then once dependencies are installed run `npm run start`
3. Fill out the quick form, and then play around with the project!

## What's here

Directory structure:
```
|   .gitignore
|   app.js
|   out.txt
|   package-lock.json
|   package.json
|   README.md
|
+---public
|   +---assets
|   \---lib
|       +---css
|       |       styles.css
|       |
|       \---scripts
|               main.js
|
\---views
        login.ejs
```

### Breakdown:

- `app.js` basic express setup and a couple of simple endpoints.
- `views`
  - client side pages directory
- `public`
  - client side resources, `assets` would be images and whatnot, and the lib directory is used in the project. Check out the ejs to see references to the styles and scripts directory


### Dependencies:

- `express`
  - Self explanatory
- `body-parser`
  - Parse incoming request body
- `ejs`
  - Templating lang

**Optional:**
- `chalk`
  - Colored console logs for clarity and readability
- `nodemon`
  - So you don't have to manually restart app every time you make a change.