import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL
function ConfirmationPage() {
    const { tokenId } = useParams()

    const [errors, setErrors] = useState([])
    const [confirmed, setConfirmed] = useState(null)

    const confirmAccount = () =>{
        let query = 'http://'+API_URL+'/auth/register/confirm-account?tokenId=' + tokenId;
        console.log(query)
        callApi(query)
    }
    const callApi = (query) => {
        console.log('api called')
        fetch(query).then((r) =>{
            const responseJson = r.json()
            setErrors(responseJson.errors)
            console.log(responseJson)
            // if errors is null or empty
            if (errors === null || errors.length === 0){
                setConfirmed(true)
            }
            else{
                setConfirmed(false)
                console.log(errors)
            }
        } )
    }

    useEffect(() => {
        confirmAccount()
    }, []);

    return (

        <>
        {/*    if null load else display confirmed status*/}
            {confirmed === null ? <h1>Loading...</h1> : confirmed === true ? <h1>Confirmed</h1> : <h1>Not Confirmed</h1>}
        </>
    );
}

export default ConfirmationPage;