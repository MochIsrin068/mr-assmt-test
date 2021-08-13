import Products from '~/data/product.json'

const { categories } = Products

const FilterCard = () => {
    return (
        <div className="filterCard">
            <h3>
                <i className="bi bi-search"></i>
                SEARCH FILTER
            </h3>

            <div className="filterCard__inputWrapper">
                <div className="filterCard__inputWrapper__basicInput">
                    <span>TYPE</span>
                    <select name="" id="">
                        {categories.map(category => {
                            return <option key={category.id} value="">{category.name}</option>
                        })}
                    </select>
                </div>

                <div className="filterCard__inputWrapper__optionInput">
                    <input type="radio" name='items' id='used' />
                    <label htmlFor="used">Used Items</label>

                    <input type="radio" name='items' id='news' />
                    <label htmlFor="news">New Items</label>
                </div>

                <div className="filterCard__inputWrapper__basicInput">
                    <span>CATEGORY</span>
                    <select name="" id="">
                        <option>All</option>
                        <option>Sedan</option>
                        <option>Matic</option>
                    </select>
                </div>

                <div className="filterCard__inputWrapper__selectInput">
                    <input type="checkbox" name='photos' />
                    <label htmlFor="photos">with photos</label>

                    <input type="checkbox" name='videos' />
                    <label htmlFor="videos">with videos</label>
                </div>
            </div>

            {/* Middle */}
            <div className="filterCard__inputWrapper">
                <div className="filterCard__inputWrapper__basicInput">
                    <span>LOCATION</span>
                    <select name="" id="">
                        <option>New York</option>
                        <option>Los Angeles</option>
                    </select>
                </div>

                <div className="filterCard__inputWrapper__basicInput">
                    <span>BRAND</span>
                    <select name="" id="">
                        <option>Subaru</option>
                        <option>Toyota</option>
                        <option>Nissan</option>
                    </select>
                </div>

                <div className="filterCard__inputWrapper__basicInput">
                    <span>MODEL</span>
                    <select name="" id="">
                        <option>All</option>
                        <option>Pickup</option>
                        <option>Taxi</option>
                    </select>
                </div>

                <div className="filterCard__inputWrapper__groupInput">
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
            </div>


            {/* Last */}
            <div className="filterCard__inputWrapper">
                <div className="filterCard__inputWrapper__basicInput">
                    <span>TRANSMISSION</span>
                    <select name="" id="">
                        <option>Automatic</option>
                        <option>Manual</option>
                    </select>
                </div>

                <div className="filterCard__inputWrapper__groupInput">
                    <span>ENGINE</span>
                    <div>
                        <select name="" id="">
                            <option>5,0</option>
                            <option>6,0</option>
                            <option>7,0</option>
                            <option>8,0</option>
                            <option>9,0</option>
                            <option>10,0</option>
                        </select>
                        <span>-</span>
                        <select name="" id="">
                            <option>11,0</option>
                            <option>12,0</option>
                            <option>13,0</option>
                            <option>14,0</option>
                            <option>15,0</option>
                            <option>16,0</option>
                        </select>
                    </div>
                </div>

                <div className="filterCard__inputWrapper__basicInput">
                    <span>FUEL</span>
                    <select name="" id="">
                        <option>Petrol</option>
                        <option>Solar</option>
                    </select>
                </div>

                <div className="filterCard__inputWrapper__basicInput">
                    <span>DRIVE</span>
                    <select name="" id="">
                        <option>Front-wheel</option>
                        <option>Back-wheel</option>
                    </select>
                </div>

                <div className="filterCard__inputWrapper__groupInput">
                    <span>MILEAGE</span>
                    <div>
                        <select name="" id="">
                            <option>5,0</option>
                            <option>6,0</option>
                            <option>7,0</option>
                            <option>8,0</option>
                            <option>9,0</option>
                            <option>10,0</option>
                        </select>
                        <span>-</span>
                        <select name="" id="">
                            <option>11,0</option>
                            <option>12,0</option>
                            <option>13,0</option>
                            <option>14,0</option>
                            <option>15,0</option>
                            <option>16,0</option>
                        </select>
                    </div>
                </div>

                <div className="filterCard__inputWrapper__basicInput">
                    <span>EXTERIOR COLOR</span>
                    <select name="" id="">
                        <option>Black</option>
                        <option>Grey</option>
                        <option>White</option>
                    </select>
                </div>

                <div className="filterCard__inputWrapper__basicInput">
                    <span>INTERIOR COLOR</span>
                    <select name="" id="">
                        <option>Dark Grey</option>
                        <option>Black</option>
                        <option>Grey</option>
                        <option>White</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterCard