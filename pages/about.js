import React from 'react'
import {useRouter} from 'next/router'

function About() {
const router = useRouter()
    console.log(router)
    console.log(router.query)

    return (
        <div>
            About Page
        </div>
    )
}

export default About
