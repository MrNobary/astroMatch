import styled from "styled-components"
import '../index.css'

export function ProfileCard(props) {
    return(
        <CardContainer key={props.person.id}>
            <section className="Hero_Section">
                <img src={props.person.photo}/>
            </section>
            <section className="Bio_Section">
                <p>{props.person.name}, {props.person.age}</p>
                <p>{props.person.bio}</p>
            </section>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    margin: 16px 0;
    width: 330px;

    border-radius: 25px;
    background-color: var(--color-Cyan);
    overflow: hidden;

    .Hero_Section {
        width: 100%;
        height: 310px;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    .Bio_Section {
        padding: 6px 12px;
        
        p:first-child {
            font-size: 18px;
        }
    }
`