
import { GetStaticProps, GetStaticPaths } from 'next'
import ProductData from '~/data/product.json'


import { MainLayout } from '~/layouts'
import Meta from '~/components/meta'

import CategoriesCard from '~/components/categoriesCard'
import OnlineSupportCard from '~/components/onlineSupport'
import NewsLetterCard from '~/components/newsLetterCard'
import AboutMotorCard from '~/components/aboutMotor'

type propsType = {
    slug: string,
    data: {
        id: number,
        name: string,
        brand: string,
        categoryID: number,
        location: string,
        price: number,
        imageURL: string,
        detail: {
            expenditure: number,
            gearType: string,
            mileage: string,
            rating: number,
            used: boolean,
            new: boolean
        }
    },
}

const ProductDetail = ({ slug, data }: propsType) => {
    return (
        <MainLayout>
            <Meta title={`Modal Rakyat - Detail ${slug}`} desc="Modal Rakyat Detail Pages" />
            <div className='detail'>
                <section className='detail__mainContent'>
                    <h5><span className="text-secondary">BUY - CARS - </span>{data.name}</h5>
                    <div className='detail__mainContent__contentCard'>
                        <div className='detail__mainContent__contentCard__header'>
                            <h3>{data.name}</h3>
                            <div>
                                {Array.apply(null, Array(data.detail.rating)).map(rate => {
                                    return (
                                        <i className="bi bi-star-fill text-warning"></i>
                                    )
                                })}
                                {Array.apply(null, Array(data.detail.rating)).length < 5 ?
                                    <i className="bi bi-star text-secondary"></i>
                                    : null}
                            </div>
                        </div>

                        <div className='detail__mainContent__contentCard__body'>
                            <div>
                                <img src={data.imageURL} alt="" />
                                <div>
                                    <img src={data.imageURL} alt="" />
                                    <img src={data.imageURL} alt="" />
                                    <img src={data.imageURL} alt="" />
                                    <img src={data.imageURL} alt="" />
                                </div>
                                <span className='text-danger'>[ + ] View all photos</span>
                            </div>
                            <section>
                                <h3>{data.name}</h3>
                                <p>{data.location}</p>
                                <div>
                                    <i className="bi bi-person-fill text-secondary"></i>
                                    <span className="text-secondary">Harry Robberts</span>
                                </div>
                                <section>
                                    <div>
                                        <h4><i className="bi bi-calendar"></i>{data.detail.expenditure}</h4>
                                        <h4><i className="bi bi-wrench"></i>Front-whell</h4>
                                        <h4><i className="bi bi-geo-fill"></i>1,6</h4>
                                        <h4><i className="bi bi-gear"></i>{data.detail.gearType}</h4>
                                        <h4><i className="bi bi-bucket-fill"></i>Petrol</h4>
                                    </div>
                                    <div>
                                        <h4><i className="bi bi-truck"></i>{data.brand}</h4>
                                        <h4><i className="bi bi-file-bar-graph-fill"></i>{data.detail.mileage}</h4>
                                        <h4><i className="bi bi-paint-bucket"></i>Black</h4>
                                        <h4><i className="bi bi-geo-fill"></i>Petrol</h4>
                                    </div>
                                </section>

                                <aside>
                                    <h2 className='text-success'>${new Intl.NumberFormat('id').format(data.price)}</h2>
                                    <button type="button" className="btn btn-danger">BUY THIS VEHICLE</button>
                                </aside>
                            </section>
                        </div>
                    </div>

                    <div className='detail__mainContent__contentCard'>
                        <div className='detail__mainContent__contentCard__header'>
                            <h3>INFO</h3>
                        </div>

                        <div className='detail__mainContent__contentCard__body flex-column'>
                            <div className='mb-4'>
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi expedita nesciunt ea consequatur, quo repellat ipsa architecto, eos iure porro perspiciatis atque molestias ratione rem quam recusandae quas, sunt incidunt?</p>
                            </div>

                            <div className='mb-4'>
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <ul className='text-secondary'>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='detail__mainContent__contentCard'>
                        <div className='detail__mainContent__contentCard__header'>
                            <h3>VENDOR</h3>
                        </div>
                        <div className='detail__mainContent__contentCard__body align-items-center'>
                            <div className='d-flex flex-row'>
                                <img src="/images/avatar.png" alt="" style={{ width: 120, height: 120 }} />
                                <div className='flex-column p-2'>
                                    <h5>john S.doe</h5>
                                    <span>City : <b>{data.location}</b></span>
                                    <span>Propositions : <b>2</b></span>
                                    <span>Last visited : <b>2 hours ago</b></span>
                                </div>
                            </div>

                            <div>
                                <p className="text-danger text-center">See full vendors info</p>
                                <button type="button" className="btn btn-primary"><i className="bi bi-volume-up"></i> +1 (555) 555 - 35 - 55</button>

                            </div>
                        </div>
                    </div>

                    <div className='detail__mainContent__contentCard'>
                        <div className='detail__mainContent__contentCard__header'>
                            <h3>COMMENTS</h3>
                        </div>
                        <div className='detail__mainContent__contentCard__body'>
                            <div className='detail__mainContent__contentCard__body__comment'>
                                <div>
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} ></textarea>
                                    <div>
                                        <div>
                                            <img src="/images/avatar.png" alt="" style={{ width: 50, height: 50 }} />
                                            <h5>john S.doe</h5>
                                        </div>
                                        <button className="btn btn-danger">LEAVE A COMMENT</button>
                                    </div>
                                </div>

                                {Array.apply(null, Array(3)).map(comment => {
                                    return (
                                        <section>
                                            <img src="/images/avatar.png" alt="" style={{ width: 50, height: 50 }} />
                                            <div>
                                                <div>
                                                    <div>
                                                        <h5>john S.doe</h5>
                                                        <p className="text-secondary">5 hour ago</p>
                                                    </div>
                                                    <p className="text-danger">Reply</p>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro accusamus doloribus dolores molestiae blanditiis perspiciatis, architecto, error suscipit reprehenderit fugit magni, qui unde fuga tenetur impedit explicabo beatae cupiditate. Excepturi.</p>
                                            </div>
                                        </section>
                                    )
                                })}

                                <aside>
                                    <button className="btn btn-danger">SEE ALL 26 COMMENT</button>
                                </aside>
                            </div>
                        </div>
                    </div>

                </section>
                <section className='detail__customContent'>
                    <CategoriesCard />
                    <OnlineSupportCard />
                    <NewsLetterCard />
                    <AboutMotorCard />
                </section>
            </div>
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const data = ProductData.products
    const paths = data.map((item) => {
        return {
            params: { slug: `${item.id}` }
        }
    })

    return {
        paths,
        fallback: false // false send error page || true send and keep detail page with another value of params
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const data = await ProductData.products.find(product => `${product.id}` == params?.slug)

    return {
        props: {
            slug: params?.slug,
            data: data
        }
    }
}

export default ProductDetail