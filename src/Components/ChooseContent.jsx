import rightAngle from '../assets/Icons/chevron-right.svg';
import chooseitem1 from '../assets/Icons/clipboard-data.svg';
import chooseitem2 from '../assets/Icons/gem.svg';
import chooseitem3 from '../assets/Icons/inboxes.svg';

const ChooseContent = (props) => {

    return (
        <>
            <section id="choose" className="row mx-0 justify-content-center">
                <div className="col-11">
                    <div className="row my-5 row-cols-1 row-cols-lg-2 mx-xl-auto">
                        <div className="col col-lg-5 col-xl-4 p-4 m-2 m-lg-0 text-white" id="choose-item1">
                            <h3>{props.chooseHeading}</h3>
                            <p>{props.para1}</p>
                            <button type='button' className='btn rounded-pill bg-danger text-white px-4'>Learn More <img src={rightAngle} className='text-white' /></button>
                        </div>
                        <div className="col col-lg-7 col-xl-8 ps-4">
                            <div className="row row-cols-1 row-cols-xl-3 justify-content-center gx-6" id='choose-items'>
                                <div className="col col-xl-3 p-4 m-2 mx-xl-auto choose-items text-center">
                                    <div>
                                        <img src={chooseitem1}></img>
                                    </div>
                                    <h4 className="text-center my-4">{props.item1Heading}</h4>
                                    <p className="text-center">{props.item1Para}</p>
                                </div>
                                <div className="col col-xl-3 p-4 m-2 mx-xl-auto choose-items text-center">
                                    <div>
                                        <img src={chooseitem2}></img>
                                    </div>
                                    <h4 className="text-center my-4">{props.item2Heading}</h4>
                                    <p className="text-center">{props.item2Para}</p>
                                </div>
                                <div className="col col-xl-3 p-4 m-2 mx-xl-auto choose-items text-center">
                                    <div>
                                        <img src={chooseitem3}></img>
                                    </div>
                                    <h4 className="text-center my-4">{props.item3Heading}</h4>
                                    <p className="text-center">{props.item3Para}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ChooseContent;