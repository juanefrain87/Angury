export function Register() {
    return (
        <>

        <div className="ad-initial-box flex items-center justify-center p-10">
            <div className="text-center ad-initial-box-internal">
            <img src="/src/assets/logoHome.svg" className='w-[200px] drop-shadow-xl mx-auto'/>
            <h1 className='font-extrabold drop-shadow-xl text-5xl mb-5 text-[#004e9a]'>Alfa DeFi</h1>
            <p className='italic font-bold drop-shadow-lg text-2xl'>Empieza a construir tu futuro</p>

            <div className="rounded-lg bg-white shadow-lg my-5 text-left">
                <div className="rounded-t-lg bg-sky-700 p-4">
                    <p className="font-bold uppercase text-white">Registrese en Alfa DeFi</p>
                </div>
                <div className="grid grid-cols-12 gap-6 p-4">
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
                <div className="mt-3 p-4">
                    <button className="ad-btn-secondary shadow rounded w-full">Registrarse</button>
                </div>

            </div>

            <p>¿Necesitas ayuda? Ingresa a nuestra comunidad en Telegram y síguenos en las redes sociales.</p>
            <div className="ad-social-bar flex items-center justify-center gap-5 mt-8">
                <a href="mailto:Alfadefitoken@gmail.com" target='_blank' rel='noreferrer'>
                <box-icon size='md' color='var(--secondary-color)' name='envelope'></box-icon>
                </a>
                <a href="https://www.facebook.com/alfadefitoken" target='_blank' rel='noreferrer'>
                <box-icon size='md' color='var(--secondary-color)' name='facebook' type='logo' ></box-icon>     
                </a>
                <a href="https://www.instagram.com/alfadefitoken/" target='_blank' rel='noreferrer'>
                <box-icon size='md' color='var(--secondary-color)' name='instagram' type='logo' ></box-icon>   
                </a>
                <a href="https://t.me/+gg3vMi0_C3BkMWYx" target='_blank' rel='noreferrer'>
                <box-icon size='md' color='var(--secondary-color)' name='telegram' type='logo' ></box-icon>          
                </a>
            </div>

            </div>
        </div>
        
        </>
    )
}