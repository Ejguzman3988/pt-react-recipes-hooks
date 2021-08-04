# React-Recipes-hooks

## USE STATE

If you are insterested in the backend for this application here is a link to my [rails-server](https://github.com/Ejguzman3988/pt110920-rails-recipe-backend)

## Today's agenda
* Take a look at what Presentational Components and Container Components Used to be
  * [Blog Post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* Conversation about Class vs Functional Components
* Add NavBar Functionality
* Set Up Timer For Viewed Recipe.
* Add Filter Functionality
* Add Click Functionality

## Component Lifecycle Methods 

Each component that you write has multiple 'lifecycle methods'. These methods are methods that we can override to run code at certain times in our components lifecycle. [Here is the react documentation on lifecycle methods.](https://reactjs.org/docs/react-component.html) There are multiple stages of a components lifecycle. [Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### Common Lifecycles

- Mounting
  - constructor()
  - render()
  - componentDidMount()
- Updating
  - render()
  - componentDidUpdate()
- Unmounting
  - componentWillUnmount()

### Components We will use

- `Which method will we use to fetch?`
  - ???
- `When We add a Recipe To our Saved Recipes What method should update our card?`
  - ???
- `Toggle between all Recipes and our Saved Recipes`

---
- `Set An interval to start the timer application and clear it when necessary?`
  - ???
- `When the image is hovered over it should show second image.`
- `The filter should keep the same state, and filter through correctly.`
