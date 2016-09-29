# Hackathon Scaffold
> This will help get you started on the full-app hackathon by saving you the time you would generally spend setting up your boilerplate.

## What's In It?

### Basic Layout
The layout for this scaffold should be familiar.  We have the standard folders we use for organizing our different kinds of files.

### Backend
- Models
    - `things.js` is a sample model file with a `Schema` and a `module.exports` that exports the model
- Controllers
    - `routes.js` is where you should have all your routes defined, as well as references to route handlers to be called
    - `thingCtrl.js` is a sample controller file with route handlers.  It contains some Get / Upsert route handlers and requires the `things.js` model


- Server.js
    - Basic middleware mounted
    - DB connection to a db called `hackathon`
    - Server starting on your `env.PORT` or `3000`

### Frontend
- Public
    - js
        - Angular!
        - Comes with a `model`, `controller`, and `factory` to get you started.
    - partials
        - Partial HTML files for angular routing.
        - Comes with a `home.html` and `about.html` sample partials
    - css
        - Put your CSS here!
    - index.html
        - placed in the root of the `public` folder to take advantage of `Express` automatically sending down the file on the home ('/') route.