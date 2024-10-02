import location from '../assets/Icons/geo-alt.svg';
import contact from '../assets/Icons/telephone.svg';
import watch from '../assets/Icons/clock.svg';
import XIcon from '../assets/Icons/twitter-x.svg';
import FacebookRoundedIcon from '../assets/Icons/facebook.svg';
import InstagramIcon from '../assets/Icons/instagram.svg';
import LinkedInIcon from '../assets/Icons/linkedin.svg';


const Footer = (props) => {

    return (
        <>
            <section id="footer" className="row mx-0 justify-content-center text-white">
                <div className="col-11">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 border-bottom border-secondary  my-5">
                        <div className="col mb-3">
                            <div className="row">
                                <div className="col-2">
                                    <div className='footer-top-icons fs-4 text-center'>
                                        <i class="fa-solid fa-location-dot mx-auto"></i>
                                    </div>
                                </div>
                                <div className="col">
                                    <p className='fw-bold fs-5'>{props.addressTitle}</p>
                                    <p>{props.addressLine1}<br />{props.addressLine2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="row">
                                <div className="col-2">
                                    <div className='footer-top-icons fs-4 text-center'>
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                </div>
                                <div className="col">
                                    <p className='fw-bold fs-5'>{props.contactTitle}</p>
                                    <p>{props.contactPhone}<br />{props.contactEmail}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="row">
                                <div className="col-2">
                                    <div className='footer-top-icons fs-4 text-center'>
                                        <i class="fa-regular fa-clock"></i>
                                    </div>
                                </div>
                                <div className="col">
                                    <p className='fw-bold fs-5'>{props.bookHours}</p>
                                    <p><span className='fw-bold'>Mon - Sat :</span>{props.weekHours}<br /><span className='fw-bold'>Sunday :</span>{props.offHours}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col mb-3'>
                            <div className='row row-cols-1'>
                                <div className='col'>
                                    <p className='fw-bold fs-5'>Follow Us</p>
                                </div>
                                <div className='col ps-0'>
                                    <ul className='list-unstyled d-flex' id='footer-icons'>
                                        <li className='mx-2'>
                                            <div className='border px-3 py-2 rounded-circle'>
                                                <i class="fa-brands fa-x-twitter"></i>
                                            </div>
                                        </li>
                                        <li className='mx-2'>
                                            <div className='border px-3 py-2 rounded-circle'>
                                                <i class="fa-brands fa-facebook"></i>
                                            </div>
                                        </li>
                                        <li className='mx-2'>
                                            <div className='border px-3 py-2 rounded-circle'>
                                                <i class="fa-brands fa-instagram"></i>
                                            </div>
                                        </li>
                                        <li className='mx-2'>
                                            <div className='border px-3 py-2 rounded-circle'>
                                                <i class="fa-brands fa-linkedin"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col text-center'>
                            <p>&copy; Copyright <span className='fw-bold footer-span'>Yummy</span> All Right Reserved</p>
                            <p>Created by <span className='fw-bold footer-span'>Sachin Dhage</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;