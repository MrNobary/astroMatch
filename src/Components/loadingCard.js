import styled from "styled-components"
import '../index.css'

export function LoadingCard(props) {
    return(
        <CardContainer>
            <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    margin: 16px 0;
    width: 330px;
    height: 400px;

    border-radius: 25px;
    background-color: #e3e3e3;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
        width: 3.25em;
        transform-origin: center;
        animation: rotate4 2s linear infinite;
    }

    circle {
        fill: none;
        stroke: hsl(214, 97%, 59%);
        stroke-width: 2;
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: dash4 1.5s ease-in-out infinite;
    }

    @keyframes rotate4 {
        100% {
        transform: rotate(360deg);
    }
    }

    @keyframes dash4 {
        0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
    }

    100% {
        stroke-dashoffset: -125px;  
    }
    }
`