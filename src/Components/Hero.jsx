import '../App.css';
import heroImg from '../assets/hero-img.png';

const Hero = (props) => {

    return(
        <>
            <section className="row justify-content-center mx-0 py-5" id="hero">
                <div className="col-11">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col order-1 order-lg-0 mt-lg-5 pt-lg-5">
                            <h1 className='mt-5 mb-0 fw-bold'>{props.heading1}</h1>
                            <br/>
                            <h1 className='fw-bold mb-4'>{props.heading2}</h1>
                            <p>{props.para}</p>
                            <button className="btn btn-danger rounded-pill mt-3 px-4" type="submit">Book a Table</button>
                        </div>
                        <div className="col">
                            <img src={heroImg} alt='hero-img' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;