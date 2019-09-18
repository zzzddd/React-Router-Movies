import React, { useState } from 'react';

import { BrowserRouter as Link,Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieCard from './Movies/MovieCard';



const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
console.log(addToSavedList)
  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      <Route exact path="/" component={MovieList}/>
      <Route  path="/movies/:id" render={(props)=>(
        <Movie 
        {...props}
        addToSavedList={addToSavedList}
        />
      )} />

      {/* <Route
        path="/movies/:id"
        render={props => <Movie {...props} addToSavedList={addToSavedList} />}
      ></Route> */}
    </div>
  );
};

export default App;



