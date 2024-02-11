import { Investor } from '../../../components/Invesor';

export const History = () => {

    return (

        <>
        
            <Investor>
                <div className="container mx-auto">

                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-8">

                            <div className="mb-3">
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="Transacciones">Transacciones</option>
                                    <option value="Ganancias">Ganancias</option>
                                </select>
                            </div>

                            <div className="bg-white rounded-lg shadow-xl border">

                                <div className="rounded-t-lg bg-sky-700 p-4">
                                    <p className="font-bold uppercase text-white">Transacciones</p>
                                </div>
                                <div className="p-4">

                                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50">
                                                        Concepto
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Fecha
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50">
                                                        Monto
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                                                        Depósito
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        <p><box-icon size='xs' name='calendar' ></box-icon> 02.08.2023</p>
                                                        <p><box-icon size='xs' name='alarm' ></box-icon> 12:35 AM</p>
                                                    </td>
                                                    <td className="px-6 py-4 bg-gray-50">
                                                        200,00 USDT
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                                                        Depósito
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        <p><box-icon size='xs' name='calendar' ></box-icon> 02.08.2023</p>
                                                        <p><box-icon size='xs' name='alarm' ></box-icon> 12:38 AM</p>
                                                    </td>
                                                    <td className="px-6 py-4 bg-gray-50">
                                                        50,00 USDT
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">

                            <div className='mb-8'>

                                <p className="font-bold text-lg mb-3">Estado de tu cuenta</p>

                                <div className="bg-white rounded-lg shadow-xl border mt-4 p-4">
                                    <p className="uppercase">Total capital invertido</p>
                                    <p className="font-semibold text-4xl">250,00 USDT</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-xl border mt-4 p-4">
                                    <p className="uppercase">Ganancias totales</p>
                                    <p className="font-semibold text-4xl">125,00 USDT</p>
                                    <small><a href="#" className='hover:underline' >Detalles</a></small>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <button className='ad-btn-secondary shadow rounded-lg'>Reclamar</button>
                                    <button className='ad-btn shadow rounded-lg'>Reinvertir</button>
                                </div>

                            </div>

                            <div className="bg-gray-300 rounded-lg text-gray-600 p-4">
                                <p className="font-bold text-lg mb-3 flex items-center"> <box-icon name='info-circle' type='solid' color='rgb(75 85 99 / var(--tw-text-opacity))' ></box-icon> <span className='ml-1'>Restricciones</span></p>
                                <ol className="relative border-l border-gray-400 dark:border-gray-700">                  
                                    <li className="mb-5 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">El capital no se puede retirar hasta cumplir el tiempo de inversión.</p>
                                    </li>
                                    <li className="mb-5 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
                                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Solo se pueden hacer retiros diarios provenientes de las ganancias totales y de las recompensas por referidos.</p>
                                    </li>
                                    <li className="mb-2 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
                                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">La cantidad maxima de retiros es de 5.000 USDT, <b>los dividendos que excedan esa cantidad</b> se devuelven a la cuenta de forma automática.</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>
            </Investor>

        </>

    )

}