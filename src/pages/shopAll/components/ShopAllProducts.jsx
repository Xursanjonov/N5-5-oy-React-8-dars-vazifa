import React, { Fragment } from 'react'
import { request } from '../../../components/api/request';
import { Link } from 'react-router-dom';

const ShopaAllProducts = () => {
    const [allData, setAllData] = React.useState([]);

    React.useEffect(() => {
        request.get().then((res) => setAllData(res.data.products)).catch((error) => console.error(error))
    }, [])

    return (
        <Fragment>
            {
                allData?.map((data) => (
                    <div className="products__section__cards" key={data.id}>
                        <p className='products__section__cards__sale'>sale !</p>
                        <Link to={`/shopAll/:${data.id}`} className="products__section__cards__img"><img src={data.images[0]} alt="image" /></Link>
                        <div className='products__section__cards__title'> <p> {data.title} </p> <p> {data.category} </p> <p> {data.brand} </p> </div>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default ShopaAllProducts;