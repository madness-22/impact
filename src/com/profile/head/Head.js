import './Head.css'

const Head =({obj}) =>{
    console.log()
    return(
        <div className='card'>
           <h1>

            {obj.name.title}
            {' '}
            {obj.name.last}
           </h1>
            <div>
                <p>{obj.email}</p>
            </div>
            <div >
                <img className='imgg' src={obj.picture.medium} />
            </div>
            <p>from {obj.location.city}</p>
        </div>

    )
}

export default Head