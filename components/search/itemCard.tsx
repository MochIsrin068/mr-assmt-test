import Link from 'next/link'

type propsType = {
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
    isGrid: boolean,
}

const itemCard = ({ data, isGrid = false }: propsType) => {
    return (
        <Link href={`/product/${data.id}`}>
            <div className={`search__mainContent__itemCard`} style={{ flexDirection: isGrid ? 'column' : 'row' }}>
                <img src={data.imageURL} alt="" style={{ width: isGrid ? 159 : 268, height: isGrid ? 110 : 186, marginRight: isGrid ? 0 : 20 }} />
                <div>
                    <section>
                        <div>
                            <h5 className='p-0 m-0'>{data.name}</h5>
                            <span>{data.location}</span>
                        </div>
                        <p className="text-secondary">
                            <i className="bi bi-person-fill text-secondary"></i>
                            {isGrid ? null : 'Harry Robberts'}
                        </p>
                    </section>

                    <div style={{ flexDirection: isGrid ? "column" : "row" }}>
                        <div style={{ marginRight: isGrid ? 0 : 70 }}>
                            <h4><i className="bi bi-calendar"></i>{data.detail.expenditure}</h4>
                            <h4><i className="bi bi-wrench"></i>Front-whell</h4>
                            <h4><i className="bi bi-geo-fill"></i>1,6</h4>
                            <h4><i className="bi bi-gear"></i>{"data.detail.gearType"}</h4>
                            <h4><i className="bi bi-bucket-fill"></i>Petrol</h4>
                        </div>
                        {isGrid ? null :
                            <div>
                                <h4><i className="bi bi-truck"></i>{"data.brand"}</h4>
                                <h4><i className="bi bi-file-bar-graph-fill"></i>{data.detail.mileage}</h4>
                                <h4><i className="bi bi-paint-bucket"></i>Black</h4>
                                <h4><i className="bi bi-geo-fill"></i>Petrol</h4>
                            </div>
                        }
                    </div>

                    <aside>
                        <h6 className='text-success p-0 m-0'>${new Intl.NumberFormat('id').format(data.price)}</h6>
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
                    </aside>
                </div>
            </div>
        </Link>
    )
}

export default itemCard