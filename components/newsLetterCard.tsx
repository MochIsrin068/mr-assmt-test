
const NewsLetterCard = () => {
    return (
        <div className='categoryCard'>
            <h3>NEWSLETTER SIGNUP</h3>
            <div className="p-3 categoryCard__newsLetter">
                <p className='text-secondary mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit velit fuga mollitia quia aliquid sit </p>
                <input type="text" className="form-control" placeholder="Name" ></input>
                <input type="email" className="form-control mt-2 mb-2" placeholder="sales@bestwebsoft.com" ></input>
                <div className="form-check col-md-6">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label text-secondary" htmlFor="flexCheckDefault">
                        Recieve special offer
                    </label>
                </div>

                <section className='mt-4 d-flex justify-content-center'>
                    <button className="btn btn-danger">SIGNUP</button>
                </section>
            </div>
        </div>
    )
}

export default NewsLetterCard