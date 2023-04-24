import React, {useState} from "react"
import styled from "styled-components"
// Componentes
import { TopBar } from "../../Components/topbar"
import { FindPairPage } from "../FindPairPage"
import { MatchList } from "../MatchListPage"

export function ScreenApp() {

    const [currentPage, setCurrentPage] = useState('findpair-page')

    const goToFindPairPage = () => {
        setCurrentPage('findpair-page')
    }

    const goToMatchListPage = () => {
        setCurrentPage('matchlist-page')
    }

    const renderScreen = () => {
        switch(currentPage) {
            case 'findpair-page':
                return <FindPairPage />
            case 'matchlist-page':
                return <MatchList />
        }
    }

    return(
        <ScreenContainer>
            <TopBar goToFindPairPage={goToFindPairPage} goToMatchListPage={goToMatchListPage}/>
            {renderScreen()}
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    width: 360px;
    height: 600px;
    border-radius: 30px;
    overflow: hidden;
    background-color: #f7f7f7;
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 1);

    display: flex;
    flex-direction: column;
    align-items: center;
`