import { Investor } from '../../../components/Invesor';
import "./usuariosestilos.css"
import contratos from "./contratos.png"
import sponsor from "./sponsor.png"
import s from "./usuarios.png"
import cs from "./cs.png"
const Usuarios = () => {
    return ( 
        <>
        <Investor>
            <center> 
        <h1 className='h1-user-padre'>usuarios</h1>
        </center>
            <div className="padrecito">
            
            <div className="izq-user">
                
                <div className="izq-user2"> 
              
                 <div className="uno-user"> 
                 <img className='izq-user2-img' src={sponsor} alt="" />
                    <ul className='ul-user'>
                    <li className='li-user'><h1 className='h1-user'>nombre de usuario</h1></li>
                    <li className='li-user'>fecha de nacimiento</li>
                    <li className='li-user'>genero</li>
                    <li className='li-user'>pais</li>
                </ul>
           
            
                <p className='p-user'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                </div>
                </div>
                
                <div className="dos-user">
                    <div className="contenedor-imagen-user">
                        <img src={sponsor} alt="" className="nose" />
                    </div>
                    <div className="contenedor-user">
                        <p className='p-user1'>sponsor</p>
                        <h1 className="h1-user-dos">JOHN DOE</h1>
                        <hr />
                        <p className='p-user2'>6538tsfdesjd</p>
                    </div>
                </div>

            </div>
            <div className="der-user">
                <div className="contenedorimg-u">
                <img className='der-img-user' src={contratos} alt="" />
                </div>
                <h1 className="h1-user-der">contratos activos</h1>
                <img src={cs} alt="" className='jgl' />
                
                <p className="p-user-der">no tienes activos</p>
                <button className='btn btn-primary wl'>ver contratos</button>
            </div>
            </div>
        </Investor>
        
        </>
     );
}
 
export default Usuarios;

