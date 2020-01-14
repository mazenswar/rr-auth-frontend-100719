## Format

- 55 mins
- 10 min break
- 55 mins

## Key Questions

- What are hooks? how are they different from Class Components?
- how do I use the useState & useEffect hooks (react)
- how do I use useSelector & useDispatch (react-redux)
- What is an dependency array and how should I use it

# SWBATs

- Set up a Rails API auth with JWT tokens

  - Auth controller --> Do we need one? What will it do?
  - custom routes --> can/should we do auth with just RESTful routes?
  - JWT encode/decode --> https://github.com/jwt/ruby-jwt
  - helper methods --> what can we make DRY?
  - CORS & requests --> Why is this important? - remember authenticity token in mod 2?

- React frontend with Hooks & Redux
  - Set up a login/sign up form using functional components with react hooks(useState) & react-redux hooks(useDispatch)
  - Set up a redux store to handle multiple reducers.
  - Define resource specific action creators and fetch functions.
  - Understand what is an dependency array and what uses it has.
  - bye bye `this`!

# Helpful Bookmarks

- Cookies instead of localStorage - https://www.thegreatcodeadventure.com/jwt-storage-in-rails-the-right-way/

- Learn React Hooks - https://github.com/kentcdodds/learn-react-hooks

## fullstack Rails vs Rails API

1. The api app is configured to start with a more limited set of middlewares than normal. Specifically, it will not include any middleware primarily useful for browser applications (like cookies support) by default

2. In the api app, ApplicationController inherits from ActionController::API instead of ActionController::Base. As with middlewares, this will leave out any Action Controller modules that provide functionalities primarily used by browser applications.

3. The api app is configures the generators to skip generating views, helpers and assets when you generate a new resource.

Source: https://edgeguides.rubyonrails.org/api_app.html
