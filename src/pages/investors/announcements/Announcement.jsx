import { Investor } from '../../../components/Invesor';
import anuncios from "../../../assets/img/anuncios/01.png"
export const Announcement = () => {

    return (

        <>
        
            <Investor>
                
            <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="fw-semibold fs-1 text-white">Anuncios</p>
                                </div>
                                <div className="col-md-6">
                                <div className="card w-100">
                                    <img src={anuncios} className="card-img-top" alt="..."/>
                                    <div className="card-body p-4">
                                        <p className="fs-6 d-flex align-items-center"><box-icon name='calendar' color='white'></box-icon> <span className='ms-2'>24/07/2023</span></p>
                                        <h5 className="card-title">Obtén tu tarjeta VISA</h5>
                                        <p className="card-text">Recuerda ya contamos con el servicio de las tarjetas Visa por tan solo $50 Dólares</p>
                                        <a href="#" className="btn btn-primary">Ver más</a>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            
                        </div>
                    </div>
                </div>
            </Investor>

        </>

    )

}