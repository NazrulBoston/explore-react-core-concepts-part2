import { useEffect, useState } from "react"

export default function Users(){
    // aikhane default value empty array nia hoese useState ar moddhe  
    const [users, setUsers] = useState([])
// useEffect call kara hoese. and auto import hoe jabe and useEffect akti function ar moddhe
//useEffect duita parameter nei. akta paremeter hosee callback function ar arekta hosse dependencies r prothom bar
// data load karte hole dibo empy array
// useEffect(() => {},[])

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setUsers(data))
},[])

    return(
        <div>
            <h3>Users: {users.length}</h3>

        </div>
    )
}



/**
 * 1. Declare a state to hold the data
 * 2. useEffect with call back and dependency array
 * 3. use fetch data to load data
 */