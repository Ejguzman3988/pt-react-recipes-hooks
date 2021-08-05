import React, { useState } from 'react'
import FilterBar from "../components/FilterBar"
import Recipe from '../components/Recipe'
import RecipeForm from '../components/RecipeForm';
import {
    Switch,
    Route,
  } from "react-router-dom";

function RecipesContainer(props) {
    const [search, setSearch] = useState("")


    const inputChange = (e) => {
        setSearch(e.target.value)
    }
    

   const filterRecipes = () => {
       return props.recipes.filter( (r) => {
           return r.title.toLowerCase().includes(search.toLowerCase())
       } )
   }
    
    const recipesJSX = filterRecipes().map(r => {
        return (
            <Recipe key={r.id} saved={props.saved} addToSaved={props.addToSaved} recipe={r} />
    )}) 
    
    return (
        <div id="recipe-container">

            <Switch>
                <Route exact path="/recipes">
                    <FilterBar handleChange={inputChange} />
                    {recipesJSX}
                </Route>
                <Route exact path="/recipes/new" component={(routeInfo) => <RecipeForm routeInfo={routeInfo} />}/>
                <Route path="/recipes/:id" component={(routeInfo) => {
                    const routeId = parseInt(routeInfo.match.params.id)
                    const r = props.recipes.find(recipe => recipe.id === routeId)
                
                    return (!!r ? 
                        <Recipe key={r.id} saved={props.saved} addToSaved={props.addToSaved} recipe={r}/>
                        :
                        <h1 id="error"> ERORR AGAIN </h1>)
                    }} />

                <Route path="*" render={() => <h1 id="error">CONTAINER ERROR!!!</h1>}/>

            </Switch>
        </div>
    )
}

export default RecipesContainer
