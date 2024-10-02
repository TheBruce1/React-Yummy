import chef1 from '../assets/chefs-1.jpg';
import chef2 from '../assets/chefs-2.jpg';
import chef3 from '../assets/chefs-3.jpg';

const Chefs = (props) => {

    return (
        <>
            <section id="chefs" className="row mx-0 justify-content-center">
                <div className="col-11">
                    <div className="row row-cols-1 text-center my-5">
                        <div className="col">
                            <p className="text-secondary">{props.title}</p>
                        </div>
                        <div className="col">
                            <h3>{props.heading1}<span className="text-danger"> {props.heading2}</span></h3>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-3 justify-content-center">
                        <div className="col col-lg-3 mb-5 text-center rounded-2 shadow-p3 mx-lg-3 chefs-team">
                            <img src={chef1} alt='chef1' className='img-fluid'/>
                            <p className='fw-bold mt-3 chef-name'>{props.chef1N}</p>
                            <span className='text-secondary'>{props.chef1P}</span>
                            <p className='fst-italic mt-3'>{props.chef1D}</p>
                        </div>
                        <div className="col col-lg-3 mb-5 text-center rounded-2 shadow-p3 mx-lg-3 chefs-team">
                            <img src={chef2} alt='chef2' className='img-fluid'/>
                            <p className='fw-bold mt-3 chef-name'>{props.chef2N}</p>
                            <span className='text-secondary'>{props.chef2P}</span>
                            <p className='fst-italic mt-3'>{props.chef2D}</p>
                        </div>
                        <div className="col col-lg-3 mb-5 text-center rounded-2 shadow-p3 mx-lg-3 chefs-team">
                            <img src={chef3} alt='chef3' className='img-fluid'/>
                            <p className='fw-bold mt-3 chef-name'>{props.chef3N}</p>
                            <span className='text-secondary'>{props.chef3P}</span>
                            <p className='fst-italic mt-3'>{props.chef3D}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Chefs;