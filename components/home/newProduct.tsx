import { useState } from 'react'
import Link from 'next/link'

import ProductData from '~/data/product.json'

const NewProduct = () => {
    const [indexActive, setIndexActive] = useState(0)

    const productUsed = ProductData.products.filter(product => product.detail.new === true)
    return (
        <div className="home__content__left__usedProduct">
            <div className="home__content__left__usedProduct__buttonWrapper">
                <button>NEWS</button>
                <button>OFFERS</button>
                <button>POPULAR</button>
            </div>
            <div className="home__content__left__usedProduct__new">
                <div>
                    <img src={productUsed[indexActive].imageURL} alt="" />
                    <div>
                        <h3>{productUsed[indexActive].name}</h3>
                        <div className='text-secondary'><i className="bi bi-calendar"></i>{productUsed[0].detail.expenditure}</div>
                        <p><Link href={`/product/${productUsed[0].id}`}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem quasi saepe placeat quod quam neque veniam culpa voluptate non maxime rerum magni natus delectus repellat, explicabo earum qui laudantium! Recusandae?
                        </Link></p>
                        <section>
                            <span></span>
                            <div>
                                <Link href={`/product/${productUsed[indexActive].id}`}>
                                    25
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
                <section>
                    <div>
                        {productUsed.map(product => {
                            return (
                                <div className="mb-2" key={product.id}>
                                    <img src={product.imageURL} alt="" />
                                    <div>
                                        <h3>{productUsed[indexActive].name}</h3>
                                        <div className='text-secondary'><i className="bi bi-calendar"></i>{productUsed[0].detail.expenditure}</div>
                                        <section>
                                            <span></span>
                                            <div>
                                                <Link href={`/product/${product.id}`}>
                                                    25
                                                </Link></div>
                                        </section>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {productUsed.map(product => {
                            return (
                                <div className="mb-2" key={product.id}>
                                    <img src={product.imageURL} alt="" />
                                    <div>
                                        <h3>{productUsed[indexActive].name}</h3>
                                        <div className='text-secondary'><i className="bi bi-calendar"></i>{productUsed[0].detail.expenditure}</div>
                                        <section>
                                            <span></span>
                                            <div>
                                                <Link href={`/product/${product.id}`}>
                                                    25
                                                </Link>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NewProduct