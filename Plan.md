# Web-feed plan:

0. Setup:

#- Create-react-app webfeed.  
#- install tools: router + axios
#- Page/component skeletons (3 of them)
#- react-router-dom

# - index.js => import Router and wrap <App>.

#- App.js: Setup a <Switch> and some <Route > for our pages

# - NavBar with Links to move between our pages.

**Git commit and push ("Set up app")**

1. LandingPage:

#- Title/Welcome
#- Button to go to feed

**Commit and push ("landing page done")**

2. FeedPage

- Decide on API.
- Set up `useEffect` to call API
  - do axios request to API
  - STOP: console.log the data of the response to know what we are getting from the API
- Set up `useState` to store this data. Set it to state
- After setting it to state, console.log the state. See that it changes from empty at the beginning to having some data on the next render
- Once you see the data in your state: **Render it!**

- Create presentational component to render our posts

**Commit and push, feed done**

(when doing next feature)
=> Link to details page

        <Link to={`/posts/${someId}}`}>

(future) - Like button maybe

2.2 Search: If the API permits searching, you might want to set it up like we did in day 4 of the reader.

3. Details Page:

- Add a dynamic route in APP.js (if not added already)
- import `useParams` from react-router-dom
- call useParams and check that we can log the Id in the url.
- set up useEffect to do API call using this Id.
- console.log(response)
- set up a `useState` to store this data
- render it!

(future 2) - Maybe comment form?
