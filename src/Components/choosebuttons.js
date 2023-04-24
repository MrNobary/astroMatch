import styled from "styled-components"
import '../index.css'

export function ChooseButtons(props) {
    return(
        <ButtonsField>
            <NoButton onClick={props.onClickNo}>Fora</NoButton>
            <YesButton onClick={props.onClickYes}>Dentro</YesButton>
        </ButtonsField>
    )
}

const ButtonsField = styled.div`
    width: 330px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
`

const NoButton = styled.button`
    padding: 12px;
    cursor: pointer;

    :hover {
        background-color: var(--color-Brown);
    }

    :active {
        transform: scale(0.95);
    }
`


const YesButton = styled.button`
    padding: 12px;
    cursor: pointer;

    :hover {
        background-color: var(--color-Red);
    }
`