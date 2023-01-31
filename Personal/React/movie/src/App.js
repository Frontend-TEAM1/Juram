import Movie from "./components/Movie/Movie";
import { movieData } from "./movieData";
import Header1 from "./components/Header/Header";
import GlobalStyles from "./styles/global";
import Footer1 from "./components/Footer/Footer";

function App() {
  const { results } = movieData;
  return (
    <>
      <GlobalStyles />
      <div>
        <Header1 />
        <div className="app-container">
          {results.map((movie) => {
            return (
              <Movie
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            );
          })}
        </div>
        <Footer1 />
      </div>
    </>
  );
}

export default App;
