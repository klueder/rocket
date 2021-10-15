import React, { useState, useEffect } from 'react'

const Launches = () => {

    const [launches, setLaunches] = useState([])


    const getLaunches = () => {
        const SERVICES_URL = 'https://api.spacexdata.com/v4';
        const serviceUrl = `${SERVICES_URL}/launches`;
        fetch(`${serviceUrl}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setLaunches(res)
        })
    }

    useEffect(() => {
        getLaunches()
    }, [])

    return (
        <div>
            <h1>Spacex Launches</h1>
            {launches.map(launch =>(
                <div>
                    <h2>{launch.name}</h2>
                    <p>Flight Number: {launch.flight_number}</p>
                </div>
            ))}
        </div>
    )
}

export default Launches