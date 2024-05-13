import React from 'react'
import notimg from '../../assets/images/not-found.jpg'
import Button from '../../components/formComponents/Button'
// import { useNavigate } from 'react-router-dom'
import './notFound.scss'
import { Link } from 'react-router-dom'

const NotFound = () => {

    return (
        <section className='notFound'>
            <div className="images"> <img src={notimg} alt="not found image" /> </div>
            <div className="titles">
                <h1>404</h1>
                <p>Page Not Found</p>
                <Link to={'/'} className={'homes'}>Go Home</Link>
            </div>
        </section>
    )
}

export default NotFound