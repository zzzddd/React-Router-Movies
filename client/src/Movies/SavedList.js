


import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";

const SavedMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    <SavedMovies>
      {props.list.map(movie => (
        <NavLink key={movie.id} to={`/movies/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
    </SavedMovies>
    <Link to="/">
      <Button outline color="primary" size="lg">
        Home
      </Button>
    </Link>
  </div>
);

export default SavedList;