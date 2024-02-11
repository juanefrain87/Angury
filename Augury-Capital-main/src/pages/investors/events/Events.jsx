import { Investor } from '../../../components/Invesor';

export const Events = () => {

    return (

        <>
        
            <Investor>
                
            <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="fw-semibold fs-1 text-white">Próximos eventos</p>
                                </div>
                                <div className="col-md-6">
                                <div className="card w-100">
                                    <img src="/src/assets/img/eventos/01.png" className="card-img-top" alt="..."/>
                                    <div className="card-body p-0">
                                        <div style={{backgroundColor: '#344060'}} className='text-center p-4'>
                                            <p className="fs-4 fw-semibold m-0">Webinar: ¿NFT en el 2024?</p>
                                        </div>
                                        <div className='p-4 fs-4'>
                                            <p className="m-0 d-flex align-items-center"><box-icon name='map' type='solid' color='white'></box-icon> <span className='ms-2'>Location</span></p>
                                            <p className="m-0 d-flex align-items-center"><box-icon name='calendar' color='white'></box-icon> <span className='ms-2'>24/07/2023</span></p>
                                            <p className="m-0 d-flex align-items-center"><box-icon name='alarm' color='white'></box-icon> <span className='ms-2'>Hora</span></p>
                                        </div>
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