import React, { useState } from "react";

const MovieContext = React.createContext();
export const MovieProvider = ({ children }) => {
  const [upComingMovies, setUpComingMovies] = useState([]);

  return (
    <MovieContext.Provider value={{ upComingMovies, setUpComingMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContext;
