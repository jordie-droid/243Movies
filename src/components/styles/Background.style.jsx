import styled from "styled-components";
import defaultbackground from '../../images/defaultbackground.webp';

export const Background = styled.div`
    background-color: #000000;    
    background-image: url(${({movie, imageUrl})=>{
        console.log(movie);
        return movie ?  `${imageUrl}/${movie.backdrop_path}`: defaultbackground
    }});
`;