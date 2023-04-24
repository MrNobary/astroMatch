import styled from "styled-components"
import '../index.css'

export function MatchCard(props) {
    return(
        <Card_Container key={props.id}>
            <img src={props.photo}/>
            <p>{props.name}</p>
        </Card_Container>
    )
}

const Card_Container = styled.div`
    width: 300px;
    margin: 12px 6px;

    display: flex;
    gap: 12px;

    border-radius: 25px;
    background-color: var(--color-Cyan);

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    :hover {
        transform: scale(0.9);
    }
`