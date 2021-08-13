import { useState } from 'react'
import ProductData from '~/data/product.json'


const UsedProduct = () => {
    const [indexActive, setIndexActive] = useState(0)

    const productUsed = ProductData.products.filter(product => product.detail.used === true)
    return (
        <div className="home__content__left__usedProduct">
            <div className="home__content__left__usedProduct__buttonWrapper">
                <button>USED</button>
                <button>NEW</button>
            </div>
            <section>
                <div>
                    <img src={productUsed[indexActive].imageURL} alt="" />
                    <h3>{productUsed[indexActive].name}</h3>
                    <div className='text-secondary'><i className="bi bi-calendar"></i>{productUsed[0].detail.expenditure}</div>
                    <div className='text-secondary'><i className="bi bi-gear-wide-connected"></i>{productUsed[0].detail.mileage}</div>
                    <h4 className='text-success'>${new Intl.NumberFormat('id').format(productUsed[0].price)}</h4>
                </div>
                <aside>
                    {productUsed.slice(indexActive).map((product, index) => {
                        return (
                            <div key={product.id} onClick={() => setIndexActive(index)}>
                                <img src={product.imageURL} alt="" />
                                <div>
                                    <h3>{product.name}</h3>
                                    <div className='text-secondary'><i className="bi bi-calendar"></i>{product.detail.expenditure}</div>
                                    <div className='text-secondary'><i className="bi bi-gear-wide-connected"></i>{product.detail.mileage}</div>
                                    <h4 className='text-success'>${new Intl.NumberFormat('id').format(product.price)}</h4>
                                </div>
                            </div>
                        )
                    })}
                </aside>
            </section>
        </div>
    )
}

export default UsedProduct