import '../App.css';
import about1 from '../assets/about-1.jpg';
import about2 from '../assets/about-2.jpg';

const About = (props) => {

    return (
        <>
            <section id='about' className='row mx-0 justify-content-center py-5'>
                <div className='col-11'>
                    <div className='row row-cols-1 text-center mb-5'>
                        <div className='col'>
                            <p className='text-secondary'>{props.title}</p>
                        </div>
                        <div className='col'>
                            <p id="about-heading">{props.heading1} <span className='text-danger'>{props.heading2}</span></p>
                        </div>
                    </div>
                    <div className='row row-cols-1 row-cols-lg-2' id='about-items'>
                        <div className='col order-0 col-lg-7'>
                            <img src={about1} alt='about-img1' className='img-fluid' />
                        </div>
                        <div className='col col-lg-5 h-75 order-2 order-lg-1'>
                            <p className='fst-italic text-secondary'>{props.para1}</p>
                            <ul>
                                <li>{props.item1}</li>
                                <li>{props.item2}</li>
                                <li>{props.item3}</li>
                            </ul>
                            <p>{props.para2}</p>
                        </div>
                        <div className='col col-lg-7 text-center border border-dark border-5 my-3 h-25 order-1 order-lg-2'>
                            <p className='fw-bold mb-0 mt-3' id='about-contact'>Book a Table</p>
                            <p className='mb-3 text-danger fw-semibold' id='about-number'>{props.contact}</p>
                        </div>
                        <div className='col col-lg-5 h-50 order-3' id='about-video'>
                            <img src={about2} alt='about-img2' className='img-fluid'></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;