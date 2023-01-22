import supabase from "../config/supabaseClient"
import {useEffect, useState} from 'react'

function Verify(){
    return (
        <>
        <h1>Playlist Maker</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} >button</a>
        </>
    )
}