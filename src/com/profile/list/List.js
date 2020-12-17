import React, { useEffect, useState } from 'react';
import $ from 'jquery'
import Head from '../head/Head'



const List = () => {
    // const [data, setData] = useState();
    const url = ['https://randomuser.me/api']
    // useEffect(() => {
        $.get(url, (res, error) => {
            // console.log(res.results);
            // setData(res.results)
            let data = res.results;

        })
    // }, [])

    if (data != undefined) {

        return (
            <div>
                {data.map((item) => <Head obj={item}/>)}
            </div>
        )
    } else {
        return ''
    }
}


export default List