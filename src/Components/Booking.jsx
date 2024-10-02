import reservation from '../assets/reservation.jpg'

const Booking = (props) => {

    return (
        <>
            <section id="booking" className="row mx-0 justify-content-center mb-lg-5">
                <div className="col-11">
                    <div className="row row-cols-1 text-center my-5">
                        <div className="col">
                            <p className="text-secondary">{props.title}</p>
                        </div>
                        <div className="col">
                            <h3>{props.heading1}<span className="text-danger">{props.heading2}</span></h3>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-2" id="booking-form">
                        <div className="col col-lg-4 px-0" id='form-left'>
                            <img src={reservation} alt='img' className='img-fluid' />
                        </div>
                        <div className="col col-lg-8 pe-lg-0 mt-lg-5" id='form-right'>
                            <div className='row row-cols-1 text-center mt-xxl-5'>
                                <div className='col col-md-5 col-lg-3 ms-md-3 mx-auto mb-3 mt-3 mt-sm-5'>
                                    <input id='name' placeholder='Your name' type='text' className='p-2 text-center border-1 rounded-0'/>
                                </div>
                                <div className='col col-md-5 col-lg-3 ms-md-3 mx-auto mb-3 mt-md-5'>
                                    <input id='email' placeholder='Your Email' type='email' className='p-2 text-center border-1 rounded-0'/>
                                </div>
                                <div className='col col-md-5 col-lg-3 ms-md-3 mx-auto mb-3 mt-lg-5'>
                                    <input id='number' placeholder='Your Number' type='number' className='p-2 text-center border-1 rounded-0'/>
                                </div>
                                <div className='col col-md-5 col-lg-3 ms-md-3 mx-auto mb-3'>
                                    <input id='date' placeholder='dd-mm-yyyy' type='date' className='p-2 text-center border-1 rounded-0'/>
                                </div>
                                <div className='col col-md-5 col-lg-3 ms-md-3 mx-auto mb-3'>
                                    <input id='time' placeholder='--:-- --' type='time' className='p-2 text-center border-1 rounded-0'/>
                                </div>
                                <div className='col col-md-5 col-lg-3 ms-md-3 mx-auto mb-3'>
                                    <input id='count' placeholder='#of People' type='number' className='p-2 text-center border-1 rounded-0'/>
                                </div>
                                <div className='col mx-auto mb-3 ps-xl-0'>
                                    <textarea id='message' placeholder='Message' className='p-2 text-center form-control-lg border-1 rounded-0'/>
                                </div>
                                <div className='col mx-auto mb-3'>
                                    <button type='button' className='btn btn-danger btn-lg rounded-1 px-5 py-2'>Book a Table</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Booking;