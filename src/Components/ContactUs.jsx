

const ContactUs = () => {

    return (
        <>
            <section id="contact" className="row mx-0 justify-content-center my-5">
                <div className="col-11 my-5">
                    <div className="row row-cols-1">
                        <div className="col">
                            <div className="row row-cols-1 row-cols-md-2 justify-content-space-evenly">
                                <div className="col col-md-5 contact-items mb-3 mx-md-auto">
                                    <div className="row row-cols-2">
                                        <div className="col-4 col-xl-3">
                                            <div className="contact-image mx-auto">
                                                <div className='px-4 py-3 rounded-circle mt-4 mt-xl-2'>
                                                    <i class="fa-solid fa-location-dot text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8 col-xl-9">
                                            <p className='fw-bold fs-4 text-secondary mb-0'>Address</p>
                                            <p className='text-dark'>A108 Adam Street, New York, NY 535022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-md-5 contact-items mb-3 mx-md-auto">
                                    <div className="row row-cols-2 mt-md-2">
                                        <div className="col-4 col-xl-3">
                                            <div className="contact-image mx-auto">
                                                <div className='px-4 py-3 rounded-circle mt-3 mt-xl-0'>
                                                    <i class="fa-solid fa-phone text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8 mt-md- col-xl-92 mt-xxl-0">
                                            <p className='fw-bold fs-4 text-secondary mb-0'>Call Us</p>
                                            <p className='text-dark mb-md-0'>+1 5589 55488 55</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-md-5 contact-items mb-3 mx-md-auto">
                                    <div className="row row-cols-2 mt-md-2">
                                        <div className="col-4 col-xl-3">
                                            <div className="contact-image mx-auto">
                                                <div className='px-4 py-3 rounded-circle mt-2'>
                                                    <i class="fa-solid fa-envelope text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8 col-xl-9">
                                            <p className='fw-bold fs-4 text-secondary mb-0'>Email Us</p>
                                            <p className='text-dark mb-md-0'>info@example.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-md-5 contact-items mb-3 mx-md-auto">
                                    <div className="row row-cols-2">
                                        <div className="col-4 col-xl-3">
                                            <div className="contact-image mx-auto">
                                                <div className='px-4 py-3 rounded-circle mt-4'>
                                                    <i class="fa-solid fa-clock text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8 col-xl-9">
                                            <p className='fw-bold fs-4 text-secondary mb-0'>Opening Hours</p>
                                            <p className='text-dark'><span className='fw-semibold'>Mon-Sat</span>11AM - 23PM <br /><span className='fw-semibold'>Sunday:</span> Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='form' className="col mt-5 border p-3">
                            <div className='row row-cols-1'>
                                <div className='col col-md-6 mt-3'>
                                    <input className='form-control rounded-0 p-2' placeholder='Your Name' type='text' />
                                </div>
                                <div className='col col-md-6 mt-3'>
                                    <input className='form-control rounded-0 p-2' placeholder='Your Email' type='email' />
                                </div>
                                <div className='col mt-3'>
                                    <input className='form-control rounded-0 p-2' placeholder='Subject' type='text' />
                                </div>
                                <div className='col mt-3'>
                                    <textarea className='form-control rounded-0 p-2' placeholder='Message' />
                                </div>
                                <div className='col mt-4 mx-auto text-center'>
                                    <button className='btn rounded-pill mx-auto text-white py-2 px-4' id='form-button'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;