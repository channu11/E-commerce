import React from 'react'

function Banner() {
    return (
        <>
            <div className="container banner ">
                <div className="row">
                    <div className="col-lg-6 my-sm-0 ">
                        <div className="bner1 mb-sm-5  ">
                            <img className="w-100 " src={require('../Image/banner5.jpg')} />
                            <div className="bner11">
                                <h3>New Season</h3>
                                <p className="pp">Sale 40% Off</p>
                                <p>Shop Now</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bner1 ">
                            <img className="w-100 "  src={require('../Image/banner4.jpg')} />

                            <div className="bner11">
                                <p className="pp">Super Sale</p>
                                <h3>New Collection</h3>
                                <p>Shop Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner