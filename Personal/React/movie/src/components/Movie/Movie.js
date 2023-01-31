import React from 'react';
import * as S from './style';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

export default function Movie({title, poster_path, vote_average}) {
    return (
        <S.movieContainer>
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
            <S.movieInfo>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </S.movieInfo>
        </S.movieContainer>
    )
};