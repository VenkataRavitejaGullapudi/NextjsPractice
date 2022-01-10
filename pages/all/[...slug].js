import React from 'react'
import {useRouter} from 'next/router'

export default function All() {
    const router = useRouter();
    console.log(router.query)
    function buttonHandler() {
        // router.push('/all/some/1')
        router.push({
            pathname:'/all/[id]/[cl]',
            query:{id:'someid',cl:'somecl'}
        })
    }
    function buttonHandler1() {
        router.replace('/all/some/2')
    }
    return (
        <div>
            All routes in this all folder catched by this file
            /all/+/*/... catches all routes after all
            <div>
                <button onClick={buttonHandler}>Load Some page that can move back</button>
                <button onClick={buttonHandler1}>Load Some page from which we cant get back to this</button>
            </div>
        </div>
    )
}
