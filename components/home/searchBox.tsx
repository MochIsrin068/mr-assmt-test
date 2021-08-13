import Products from '~/data/product.json'
import Link from 'next/link'

const { categories } = Products

const CategoriesCard = () => {
    return (
        <div className='home__content__left__searchBox'>
            <div className='home__content__left__searchBox__actionButton'>
                <button className='btn btn-danger'><i className="bi bi-search m-2"></i>Search</button>
                <button className='btn'><i className="bi bi-plus m-2"></i> Add Listing</button>
            </div>
            <div className='home__content__left__searchBox__form'>
                <div className='home__content__left__searchBox__form__main'>
                    <section>
                        <div>
                            <span>TYPE</span>
                            <select name="" id="">
                                {categories.map(category => {
                                    return <option key={category.id} value="">{category.name}</option>
                                })}
                            </select>
                        </div>

                        <div>
                            <span>CATEGORY</span>
                            <select name="" id="">
                                <option>All</option>
                                <option>Sedan</option>
                                <option>Matic</option>
                            </select>
                        </div>
                    </section>

                    <div>
                        <section>
                            <input type="radio" name='items' id='used' />
                            <label htmlFor="used">Used Items</label>

                            <input type="radio" name='items' id='news' />
                            <label htmlFor="news">New Items</label>
                        </section>
                        <div>
                            <input type="checkbox" name='photos' />
                            <label htmlFor="photos">with photos</label>

                            <input type="checkbox" name='videos' />
                            <label htmlFor="videos">with videos</label>
                        </div>
                    </div>
                </div>
                <div className='home__content__left__searchBox__form__detail'>
                    <section>
                        <div>
                            <span>LOCATION</span>
                            <select name="" id="">
                                <option>New York</option>
                                <option>Los Angeles</option>
                            </select>
                        </div>

                        <div>
                            <span>BRAND</span>
                            <select name="" id="">
                                <option>Subaru</option>
                                <option>Toyota</option>
                                <option>Nissan</option>
                            </select>
                        </div>

                        <div>
                            <span>MODEL</span>
                            <select name="" id="">
                                <option>All</option>
                                <option>Pickup</option>
                                <option>Taxi</option>
                            </select>
                        </div>
                    </section>

                    <div>
                        <div>
                            <span>PRICE</span>
                            <div>
                                <select name="" id="">
                                    <option>$5,000</option>
                                    <option>$6,000</option>
                                    <option>$7,000</option>
                                    <option>$8,000</option>
                                    <option>$9,000</option>
                                    <option>$10,000</option>
                                </select>
                                <span>-</span>
                                <select name="" id="">
                                    <option>$11,000</option>
                                    <option>$12,000</option>
                                    <option>$13,000</option>
                                    <option>$14,000</option>
                                    <option>$15,000</option>
                                    <option>$16,000</option>
                                </select>
                            </div>
                        </div>
                        <button className='btn btn-warning'><Link href='/search'>SEARCH</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesCard