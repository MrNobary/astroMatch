import React, {useState, useEffect} from "react";
import axios from "axios";
// Componentes
import { ChooseButtons } from "../../Components/choosebuttons";
import { ProfileCard } from "../../Components/profileCard";
import { LoadingCard } from "../../Components/loadingCard";


export function FindPairPage() {

    const [person, setPerson] = useState({})

    const getPersonToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Enzo-Machado-Moreira/person')
        .then((res) => {
            setPerson(res.data.profile)
        })
    }

    const choosePerson = (choice) => {
        const body = {
            id: person.id,
            choice: choice
        }

        setPerson(undefined)

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Enzo-Machado-Moreira/choose-person', body)
        .then((res)=>{
            console.log(res)
        })

        getPersonToChoose()
    }

    const onClickNo = () => {
        choosePerson(false)
    }

    const onClickYes = () => {
        choosePerson(true)
    }

    useEffect(() => {
        getPersonToChoose()
    },[])

    return(
        <div>

            { person ?
            (
                <>
                    <ProfileCard person={person}/>
                    <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes}/>
                </>
            ) : <LoadingCard />
            }
        </div>
    )
}