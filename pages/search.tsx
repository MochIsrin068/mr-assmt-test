import ProductData from '~/data/product.json'

import { useState } from 'react'
import { MainLayout } from '~/layouts'

import Meta from '~/components/meta'
import OnlineSupportCard from '~/components/onlineSupport'
import NewsLetterCard from '~/components/newsLetterCard'

import FilterCard from '~/components/search/filterCard'
import ItemCard from '~/components/search/itemCard'


const Search = () => {
    const [isGrid, setIsGrid] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <MainLayout>
            <Meta title="Modal Rakyat - Search" desc="Modal Rakyat Search Pages" />
            <div className="search">
                <section className="search__mainContent">
                    <section className="search__mainContent__sort">
                        <h5 className="text-secondary m-0 p-0">SEARCH RESULTS</h5>
                        <div>
                            <section>
                                <span className='text-secondary'>SORT BY</span>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>-- Choose one --</option>
                                    <option value="1">ID</option>
                                    <option value="1">Price</option>
                                    <option value="2">Name</option>
                                </select>
                            </section>

                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className={`btn btn-${isGrid ? 'secondary' : 'danger'}`} onClick={() => setIsGrid(false)}><i className="bi bi-list"></i></button>
                                <button type="button" className={`btn btn-${isGrid ? 'danger' : 'secondary'}`} onClick={() => setIsGrid(true)}><i className="bi bi-grid-3x3-gap"></i></button>
                            </div>
                        </div>
                    </section>
                    <div className={`${isGrid ? "grid-content" : null}`}>
                        {ProductData.products.map(product => {
                            return (
                                <ItemCard key={product.id} data={product} isGrid={isGrid} />
                            )
                        })}
                    </div>
                    <section className="search__mainContent__pagination">
                        <button className="btn btn-light">Previous</button>
                        {Array.apply(null, Array(5)).map((pagination, index) => {
                            return <button onClick={() => setCurrentPage(index + 1)} key={index} className={`btn ${currentPage === index + 1 ? 'btn-danger' : 'btn-light'}`}>{index + 1}</button>
                        })}
                        <button className="btn btn-light">Next</button>
                    </section>
                </section>
                <section className="search__customContent">
                    <FilterCard />
                    <OnlineSupportCard />
                    <NewsLetterCard />
                </section>
            </div>
        </MainLayout>
    )
}

export default Search