import styled from "styled-components";
import defaultbackground from '../../images/defaultbackground.webp';

export const Background = styled.div`
    background-image: url(${({movie, imageUrl})=>movie ?  `${imageUrl}/${movie.backdrop_path}`: defaultbackground});
    background-repeat: none;
    background-size: cover;
    overflow: hidden;
    position: relative;
    :before{
        position: absolute;
        top:0;
        left:0;
        content: '';
        width: 100%;
        height: 100%;
        // background: linear-gradient(180deg, #000000 0%, #000000 73.44%);
    }
`;