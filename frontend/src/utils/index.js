import React, { useState, useEffect } from 'react'

export default function DirectionServices (){
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/api/service/get-services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
        .catch(err => console.error(err))
    }, [])
}