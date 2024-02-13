import { Investor } from '../../../components/Invesor';
import "./contratos.css";
import restricciones from "./restricciones.png"
import augury from "./augury.png"
const Contrato = () => {
   
    return (  

        <>
        <Investor>
            <h1 className='contratosh1'>contratos</h1>
        <div className="padre"> 
            <div className="izq">  
                <div className="contratodiv1">

                    <img src={augury} alt="" />
                    <h1 className='contratoh1'>contrato 01</h1>
                    <h1 className='contratoh1'>45</h1>
                    <h1 className='contratoh1' >0.07%</h1>
                    <h1 className='contratoh1'>3%</h1>
                    <button className='botoninvertir'>invertir</button>
                </div>
                <div className="contratodiv2">

                    <img src={augury} alt="" />
                    <h1 className='contratoh1'>contrato 01</h1>
                    <h1 className='contratoh1'>45</h1>
                    <h1 className='contratoh1' >0.07%</h1>
                    <h1 className='contratoh1'>3%</h1>
                    <button className='botoninvertir'>invertir</button>
                </div>
                
                <div className="contratodiv3 especial">

                    <img src={augury} alt="" />
                    <h1 className='contratoh'>contrato 01</h1>
                    <h1 className='contratoh'>45</h1>
                    <h1 className='contratoh' >0.07%</h1>
                    <h1 className='contratoh'>3%</h1>
                    <button className='botoninvertir'>invertir</button>
                </div>
                <div className="contratodiv1">

                    <img src={augury} alt="" />
                    <h1 className='contratoh1'>contrato 01</h1>
                    <h1 className='contratoh1'>45</h1>
                    <h1 className='contratoh1' >0.07%</h1>
                    <h1 className='contratoh1'>3%</h1>
                    <button className='botoninvertir'>invertir</button>
                </div>
                <div className="der">
                <h1>Restricciones</h1>
                <ul>
                    <li className='der-li'>la cantidad minima de inversion es de 100 usdt</li>
                    <li className='der-li'>si es tu primera vez en la plataforma debes aprobar el contrato para poder invertir</li>
                </ul>
                <center> 
                <button className='boton2'>aprobar contrato</button>
                </center>
                <img src={restricciones} alt="" className='img-1' />

            </div>
            </div>
            
        </div>

        </Investor>
        </>
    );
}
 
export default Contrato;