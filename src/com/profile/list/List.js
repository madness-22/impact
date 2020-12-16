import React, { useEffect, useState } from 'react';
import $ from 'jquery'
import Head from './Head'

const List = () => {
    const [data, setData] = useState();
    const url = ['https://randomuser.me/api']
    useEffect(() => {
        $.get(url, (res, error) => {
            console.log(res.results);
            setData(res.results)

        })
    }, [])

    if (data != undefined) {

        return (
            <div>
                {/* <h1>
                    This is List
            </h1> */}
                
                    {data.map((item) => <Head obj={item}/>)}
            
                {/* <button onClick={()=>{console.log(data)}}>dara</button> */}
            </div>
        )
    } else {
        return ''
    }
}


export default List