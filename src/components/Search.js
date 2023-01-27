import {useState, useEffect} from 'react'
import { DataContext } from './Context/DataContext'
import SearchBar from './SearchBar'
import Gallery from './Gallery'

function Search(){
    let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    const ITUNES_URL = "https://itunes.apple.com/search?term="

    useEffect(() => {
        if(search) {
            const fetchData = async () => {
                document.title = `${search} music`
                const response = await fetch(ITUNES_URL + search)
                const resData = await response.json()
                if (resData.results.length > 0) {
                    return setData(resData.results)
                } else {
                    return setMessage('Not Found.')
                }
            }
            fetchData()
        }
    }, [search])
  
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    return(
        <div>
			<SearchBar handleSearch = {handleSearch}/>
			{message}
			<DataContext.Provider value={data}>
				<Gallery />
			</DataContext.Provider>
		</div>
    )
}

export default Search;