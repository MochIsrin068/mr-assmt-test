

const OnlineSupportCard = () => {
    return (
        <div className='categoryCard'>
            <h3>ONLINE SUPPORT</h3>
            <div className="p-3 categoryCard__onlineSUpport">
                <div>
                    <img src="/images/avatar.png" alt="" width={99} height={99} />
                    <div className='d-flex flex-column'>
                        <h4>John S. Doe</h4>
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                <button type="button" className="btn btn-primary"><i className="bi bi-volume-up"></i> +1 (555) 555 - 35 - 55</button>
                <p className="text-danger mt-2">Contact Support Team</p>
                <p className="text-secondary">Learn more about <b>Motor</b></p>

            </div>
        </div>
    )
}

export default OnlineSupportCard