import { Investor } from '../../../components/Invesor';

export const UsersRanges = () => {

    return (

        <>
        
            <Investor>
                <div className="container mx-auto">
                    
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-8">

                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-6">
                                    <div className="bg-white border shadow-lg rounded-lg p-4">
                                        <p className='uppercase'>Tiempo restante</p>
                                        <p className='font-semibold text-3xl'>12D : 22H : 25M : 32S</p>
                                    </div>
                                    <div className="bg-white border shadow-lg rounded-lg p-4 my-4">
                                        <p className='uppercase'>Referidos directos</p>
                                        <p className='font-semibold text-3xl'>0</p>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <div className="bg-white border shadow-lg rounded-lg p-4">
                                        <p className='uppercase'>Invertido por usuario</p>
                                        <p className='font-semibold text-3xl'>0</p>
                                    </div>
                                    <div className="bg-white border shadow-lg rounded-lg p-4 my-4">
                                        <p className='uppercase'>Invertido por referidos</p>
                                        <p className='font-semibold text-3xl'>0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                            <div className="text-base font-medium text-cyan-700">
                            Builder
                            </div>
                            
                            <div className="text-base font-medium text-cyan-700">
                                Junior
                            </div>
                            
                            <div className="text-base font-medium text-cyan-700">
                            Oasis
                            </div>
                            
                            <div className="text-base font-medium text-cyan-700">
                            Lamecca
                            </div>
                            
                            <div className="text-base font-medium text-cyan-700">
                            Master Key

                            </div>
                            
                            <div className="text-base font-medium text-cyan-700">
                            Ambassador
                            </div>
                            
                            <div className="text-base font-medium text-cyan-700">
                            Executive Ambassador

                            </div>
                            
                            <div className="text-base font-medium text-cyan-700">
                            Alfa Ambassador

                            </div>
                            
                            </div>


                        </div>
                        <div className="col-span-4">
                            <div className="bg-sky-800 rounded-lg text-white p-4">
                                <p className="font-bold text-lg mb-3 flex items-center"><span className=''>SISTEMA DE RANGOS</span></p>

                                <p className="my-2">¡Bienvenido al Sistema de Rangos de nuestra plataforma!</p>
                                <p className="my-2">Para subir de rango y participar en los distintos niveles, deberás cumplir con los siguientes criterios:</p>

                                <ol className="relative border-l border-white dark:border-gray-700">                  
                                    <li className="mb-5 ml-4">
                                        <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
                                        <p className="mb-4 text-base font-normal text-white dark:text-gray-400">Realizar un monto de inversión mínimo en cada temporada.</p>
                                    </li>
                                    <li className="mb-5 ml-4">
                                        <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
                                        <p className="text-base font-normal text-white dark:text-gray-400">Tener un número mínimo de referidos directos activos.</p>
                                    </li>
                                    <li className="mb-2 ml-4">
                                        <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
                                        <p className="text-base font-normal text-white dark:text-gray-400">Obtener una cantidad de inversión mínima por parte de tus referidos.</p>
                                    </li>
                                </ol>

                                <p className="my-2">Recuerda que cada rango tiene su propia temporada con una duración específica. Al finalizar la temporada, los montos de inversión del usuario y sus referidos serán reiniciados a 0, por lo que deberás mantener un rendimiento constante para mantener tu rango o avanzar a uno superior.</p>

                            </div>

                        </div>
                    </div>

                </div>
            </Investor>

        </>

    )

}