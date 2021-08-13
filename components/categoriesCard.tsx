import Product from '~/data/product.json'

const { categories } = Product

const CategoriesCard = () => {
    return (
        <div className='categoryCard'>
            <h3>CATEGORIES</h3>
            <div>
                {categories.map((category, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <img src={category.image} alt="" />
                                <h4>{category.name}</h4>
                            </div>
                            <span>2.339</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoriesCard