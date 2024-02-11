import { Investor } from '../../../components/Invesor';
import { Modal } from '../../../components/Modal';

export const User = () => {

    return (

        <>
        
            <Investor>
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-4">
                            <div className="bg-sky-700 rounded-lg shadow-xl border p-4 relative">
                                <div className="flex items-center">
                                    <div>
                                        <img src="https://unavatar.io/unknown" className='w-24 h-24 rounded-lg border-2 border-white' alt="" />
                                    </div>
                                    <div className='ml-3 text-white'>
                                        <p className='leading-tight font-semibold text-2xl'>Test User</p>
                                        <p className='leading-tight text-lg'>0x8458...a872</p>
                                        <p className='leading-tight text-lg'>05/08/1995 - Hombre</p>
                                        <p className='leading-tight text-lg'>Estados Unidos</p>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4">

                                    <Modal buttonText={<box-icon name='pencil' color='white'></box-icon>} titleModal="Editar usuario" customButton="rounded-lg bg-sky-800 hover:bg-sky-900 focus:bg-sky-900 transition flex items-center justify-center h-12 w-12">
                                        <form action="">
                                            <div className="grid grid-cols-12 gap-6">
                                                <div className="col-span-6">
                                                    <label>Nombre</label>
                                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                </div>
                                                <div className="col-span-6">
                                                    <label>Apellido</label>
                                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                </div>
                                                <div className="col-span-12">
                                                    <label>Fecha de nacimiento</label>
                                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                </div>
                                                <div className="col-span-6">
                                                    <label>País</label>
                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option value="1">Argentina</option>
                                                        <option value="2">Colombia</option>
                                                        <option value="3">México</option>
                                                        <option value="4">Venezuela</option>
                                                    </select>
                                                </div>
                                                <div className="col-span-6">
                                                    <label>Género</label>
                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option value="1">Mujer</option>
                                                        <option value="2">Hombre</option>
                                                        <option value="3">Otro</option>
                                                        <option value="4">Prefiero no decirlo</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='mt-6'>
                                                <button className='ad-btn rounded-lg shadow-lg w-full'>Modificar</button>
                                            </div>
                                        </form>
                                    </Modal>

                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-xl border mt-4">

                                <div className="rounded-t-lg bg-sky-700 p-4">
                                    <p className="font-bold uppercase text-white">Sponsor</p>
                                </div>

                                <div className="flex items-center p-4">
                                    <div>
                                        <img src="https://unavatar.io/twitter/lofigirl" className='w-24 h-24 rounded' alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <p className='leading-tight font-semibold text-2xl'>Adriana Pérez</p>
                                        <p className='leading-tight text-lg text-gray-500'>0x8323...b175</p>
                                        <p className='leading-tight text-lg text-gray-500'>16/10/1996 - Mujer</p>
                                        <p className='leading-tight text-lg text-gray-500'>México</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <div className="bg-white rounded-lg shadow-xl border">

                                <div className="rounded-t-lg bg-sky-700 p-4">
                                    <p className="font-bold uppercase text-white">Contratos Activos</p>
                                </div>

                                <div className="p-4">
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50">
                                                        Inversión
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Fecha
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50">
                                                        ROI
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Estado
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 bg-gray-50">
                                                        Acción
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                                                        <p className='font-semibold'>Contrato 1</p>
                                                        50 USDT
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        <p><box-icon size='xs' name='calendar' ></box-icon> 02.08.2023</p>
                                                        <p><box-icon size='xs' name='calendar' ></box-icon> 02.11.2023</p>
                                                    </td>
                                                    <td className="px-6 py-4 bg-gray-50">
                                                        50%
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        Finalizado
                                                    </td>
                                                    <td className="px-6 py-4 bg-gray-50">
                                                        <button className="ad-btn-secondary rounded-lg shadow">Retirar</button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                                                        <p className='font-semibold'>Contrato 1</p>
                                                        200 USDT
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        <p><box-icon size='xs' name='calendar' ></box-icon> 02.08.2023</p>
                                                        <p><box-icon size='xs' name='calendar' ></box-icon> 02.11.2023</p>
                                                    </td>
                                                    <td className="px-6 py-4 bg-gray-50">
                                                        50%
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        Finalizado
                                                    </td>
                                                    <td className="px-6 py-4 bg-gray-50">
                                                        <button className="ad-btn-secondary rounded-lg shadow">Retirar</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </Investor>

        </>

    )

}