import styled from "styled-components";
import Menu from "./Components/Menu/menu";
import MovieApi from "../../Apis/movieApi";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "./Components/Card/Card";
import Post from "./Components/Post/post";

const Main = () => {
  const { data: nowPlaying, isLoading } = useQuery(
    ["NOW_PLAYING"],
    () => MovieApi.getNowPlaying(),
    { refetchOnWindowFocus: false, retry: 1, cacheTime: 1000 * 60 * 100 }
  );

  const result = nowPlaying && nowPlaying.data.results;

  console.log(result);
  return (
    <S.Wrapper>
      <Post />
      <S.Content>
        <Menu />
        <S.MovieSection>
          {result && result.map((movie) => <MovieCard movie={movie} />)}
        </S.MovieSection>
      </S.Content>
    </S.Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const MenuWrapper = styled.div`
  width: 300px;
  height: 1000px;
  display: flex;
  wrap: wrap;
  border: 1px solid lime;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const MovieSection = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid pink;
`;

const S = {
  Wrapper,
  MenuWrapper,
  Content,
  MovieSection,
};
