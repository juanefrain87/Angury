import { Investor } from '../../../components/Invesor';

export const Plans = () => {

    return (

        <>
        
            <Investor>
                <div className="container mx-auto">

                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-8">
                            <div className="bg-white rounded-lg shadow-xl border">
                                <div className="rounded-t-lg bg-sky-700 p-4">
                                    <p className="font-bold uppercase text-white">Contratos de Inversión</p>
                                </div>
                                <div className="p-4">
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50">
                                                        Contrato
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Días
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50">
                                                        ROI Total
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        ROI Diario
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Inversión Mínima
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50">
                                                        Acción
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                                                        Contrato 1
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        5
                                                    </td>
                                                    <td className="px-6 py-4 bg-gray-50">
                                                        50%
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        10%
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        10 USDT
                                                    </td>
                                                    <td className="px-6 py-4 bg-gray-50">
                                                        <button className="ad-btn-secondary rounded-lg shadow">Invertir</button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                                                        Contrato 2
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        10
                                                    </td>
                                                    <td className="px-6 py-4 bg-gray-50">
                                                        50%
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        5%
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        10 USDT
                                                    </td>
                                                    <td className="px-6 py-4 bg-gray-50">
                                                        <button className="ad-btn-secondary rounded-lg shadow">Invertir</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="bg-gray-300 rounded-lg text-gray-600 p-4">
                                <p className="font-bold text-lg mb-3 flex items-center"> <box-icon name='info-circle' type='solid' color='rgb(75 85 99 / var(--tw-text-opacity))' ></box-icon> <span className='ml-1'>Restricciones</span></p>
                                <ol className="relative border-l border-gray-400 dark:border-gray-700">                  
                                    <li className="mb-5 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
                                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">La cantidad mínima de inversión es de <b>10 USDT.</b></p>
                                    </li>
                                    <li className="mb-2 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
                                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Si es tu primera vez en la plataforma, debes <b>aprobar el contrato</b> para poder invertir.</p>
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