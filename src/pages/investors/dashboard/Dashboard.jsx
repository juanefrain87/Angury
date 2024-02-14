import { Investor } from '../../../components/Invesor';
import checkmark from "../../../assets/img/iconos/checkmark.png"

export const Dashboard = () => {

    return (

        <>
        
            <Investor>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="fw-semibold fs-1 text-white">Dashboard</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="w-100 border border-secondary p-4" style={{borderRadius: '15px'}}>
                                        <p className="text-white text-center fs-4">Estado de la plataforma</p>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">Total invertido por usuarios</p>
                                            <p className="text-white fw-semibold fs-2 m-0">3,901,176.<sup>35</sup> USDT</p>

                                        </div>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">Recompensa por referidos</p>
                                            <p className="text-white fw-semibold fs-2 m-0">2,985,411.<sup>01</sup> USDT</p>

                                        </div>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">Balance en contrato</p>
                                            <p className="text-white fw-semibold fs-2 m-0">9,878.<sup>50</sup> USDT</p>

                                        </div>
                                    </div>

                                    <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                        <p className="text-white fw-semibold fs-6 m-0">FECHA DE ACTUALIZACIÓN</p>
                                        <p className="text-secondary fs-6 m-0">25/01/2024 03:55:00</p>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="w-100 border border-secondary p-4" style={{borderRadius: '15px'}}>
                                        <p className="text-white text-center fs-4">Estado de tu cuenta</p>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">Balance total en wallet</p>
                                            <p className="text-white fw-semibold fs-2 m-0">0.01 USDT</p>
                                        </div>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">Total capital invertido</p>
                                            <p className="text-white fw-semibold fs-2 m-0">0 USDT</p>                                            
                                        </div>
                                        <div className="bg-main p-3 mt-3" style={{borderRadius: '15px'}}>
                                            <p className="text-secondary fw-semibold fs-6 m-0">Total de ganancias</p>
                                            <div className="d-flex">
                                            <p className="text-white fw-semibold fs-2 m-0">16 USDT</p>
                                            <button className="btn btn-primary ms-auto">Detalle</button>                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex w-100 gap-4 mt-3">
                                        <button className="btn btn-primary w-100"> Reclamar </button>
                                        <button className="btn btn-primary w-100"> Reinvertir </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 border border-secondary p-4" style={{borderRadius: '15px'}}>
                                <p className="text-white fs-4 text-center">Restricciones</p>

                                <div className="mt-4 d-flex">
                                    <div>
                                        <img src={checkmark} style={{width: '25px', marginRight:'15px'}} />
                                    </div>
                                    <p className='text-white m-0'>El capital no se puede retirar hasta cumplir el tiempo de inversión.</p>
                                </div>

                                <div className="mt-4 d-flex">
                                    <div>
                                        <img src={checkmark} style={{width: '25px', marginRight:'15px'}} />
                                    </div>
                                    <p className='text-white m-0'>Solo se pueden hacer retiros diarios provenientes de las ganancias totales y de las recompensas por referidos.</p>
                                </div>

                                <div className="mt-4 d-flex">
                                    <div>
                                        <img src={checkmark} style={{width: '25px', marginRight:'15px'}} />
                                    </div>
                                    <p className='text-white m-0'>La cantidad maxima de retiros es de 300 USDT, los dividendos que excedan esa cantidad se devuelven a la cuenta de forma automática.</p>
                                </div>

                                <div className="mt-4 d-flex">
                                    <div>
                                        <img src={checkmark} style={{width: '25px', marginRight:'15px'}} />
                                    </div>
                                    <p className='text-white m-0'>La cantidad minima de inversión es de 100 USDT.</p>
                                </div>

                                <div className="mt-4 d-flex">
                                    <div>
                                        <img src={checkmark} style={{width: '25px', marginRight:'15px'}} />
                                    </div>
                                    <p className='text-white m-0'>Si es tu primera vez en la plataforma, debes aprobar el contrato para poder invertir.</p>
                                </div>

                                <div className="mt-5 p-5">
                                    <img src="/src/assets/img/dashboard/01.png" className='w-100' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </Investor>

        </>

    )

}