import styled from "styled-components";
import '../index.css'

export function TopBar(props) {
    return(
        <BarContainer>
            <button onClick={props.goToFindPairPage}>Find Pair</button>
            <p>astro<span>Match</span></p>
            <button onClick={props.goToMatchListPage}>Match List</button>
        </BarContainer>
    )
}

const BarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;

    color: var(--color-Purple);
    background-color: var(--color-Cyan);

    p {
        font-family: sans-serif;
        font-size: 22px;
        font-weight: lighter;
    }

    span {
        font-weight: bold;
    }
`