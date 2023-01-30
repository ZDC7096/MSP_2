import {useState, useEffect} from 'react'
import { DataContext } from './Context/DataContext'
import SearchBar from './SearchBar'
import Gallery from './Gallery'

function Search(){
    let [search, setSearch] = useState('')
    let [data, setData] = useState([])

    const ITUNES_URL = "https://itunes.apple.com/search?term="

    useEffect(() => {
        if(search) {
            const fetchData = async () => {
                const response = await fetch(ITUNES_URL + search)
                const resData = await response.json()

                    return setData(resData.results)

            }
            fetchData()
        }
    }, [search])
  
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    return(
        <>
        

        <div id="yo" style={{minHeight: "100vh", backgroundColor: "#FCFCFC", marginLeft: "10vw", marginRight:"10vw", paddingTop:"20px"}}>
        
            <div id="tester" style={{display:"flex", justifyContent:"center"}}>
                 <SearchBar handleSearch = {handleSearch}/>
            </div>
			
			<div style={{paddingTop: "50px"}}>
			<DataContext.Provider value={data}>
				<Gallery />
			</DataContext.Provider>
            </div>

		</div>
        </>
    )
}

export default Search;