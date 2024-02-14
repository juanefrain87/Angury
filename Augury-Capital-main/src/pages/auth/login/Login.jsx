import {cero} from "/src/assets/img/login/01.png"
export function Login() {
    return (
        <>

        <div className="container-fluid background-guest">
            <div className="container vh-100 d-flex align-items-center">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <img src="/src/assets/img/logo.png" className="w-50 d-block" alt="" />
                            <button className="btn btn-primary btn-lg fs-3 d-block mt-5 px-5">Conectar Wallet</button>

                            <p className="text-white my-4 fs-4 fw-semibold lh-sm">¿Necesitas ayuda? Únete a nuestra comunidad en Telegram y sigue nuestras redes sociales</p>
                            <div className="mt-5 d-flex align-items-center">
                                <button className="btn btn-primary btn-lg d-flex align-items-center px-4 me-3"><box-icon type='logo' color='white' name='telegram'></box-icon> <span className="ms-2">Unirme a Telegram</span></button>
                                <div className='mx-1'>    
                                    <box-icon name='envelope' color='white' size='md'></box-icon>                                
                                </div>
                                <div className='mx-1'>    
                                    <box-icon type='logo' color='white' name='facebook' size='md'></box-icon> 
                                </div>
                                <div className='mx-1'>    
                                    <box-icon type='logo' color='white' name='instagram' size='md'></box-icon> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={cero} className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}