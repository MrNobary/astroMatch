import React, {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"
// Componentes
import { MatchCard } from "../../Components/matchCard"

export function MatchList() {

    const [matches, setMatches] = useState([])

    const getAllMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Enzo-Machado-Moreira/matches')
        .then((res) => {
            setMatches(res.data.matches)
        })
    }

    useEffect(()=> {
        getAllMatches()
    }, [matches])

    const renderMatches = matches.map((match) => {
        return(
            <MatchCard 
            id={match.id}
            photo={match.photo}
            name={match.name}
            />
        )
    })

    return(
        <div>
            <ListContainer>
                {renderMatches}
            </ListContainer>
        </div>
    )
}

const ListContainer = styled.div`
    width: 100%;
    height: 520px;
    overflow-y: auto;
    overflow-x: hidden;
`