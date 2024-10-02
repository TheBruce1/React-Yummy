const Stats = (props) => {

    return (
        <>
            <section id="stats">
                <div className="row mx-0 justify-content-center stats">
                    <div className="col-11">
                        <div className="row mx-0 justify-content-center text-center text-white row-cols-1 row-cols-md-2 row-cols-lg-4">
                            <div className="col mb-5 mb-lg-0">
                                <span className="fw-bold">{props.statClients}</span>
                                <p className="fw-bold">{props.clients}</p>
                            </div>
                            <div className="col mb-5 mb-lg-0">
                                <span className="fw-bold">{props.statProjects}</span>
                                <p className="fw-bold">{props.projects}</p>
                            </div>
                            <div className="col mb-5 mb-lg-0">
                                <span className="fw-bold">{props.statHours}</span>
                                <p className="fw-bold">{props.hours}</p>
                            </div>
                            <div className="col mb-5 mb-lg-0">
                                <span className="fw-bold">{props.statWorkers}</span>
                                <p className="fw-bold">{props.workers}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Stats;