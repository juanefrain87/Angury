export const Membership = () => {

    const Membership = true;

    if (!Membership) {
        window.location.href = '/dashboard';
    }

    return (

        <>

            <div className="w-screen h-screen flex items-center justify-center bg-sky-700">
                <div className="text-white w-[400px]">
                    <img src="/src/assets/logo.svg" alt="" className="mb-5 w-48"/>

                    <p className="font-bold text-2xl">Membresía requerida</p>
                    <p>Necesitas comprar una membresia para continuar utilizando la plataforma, el precio es de 10 USDT</p>
                    <button className="mt-5 ad-btn-secondary rounded shadow-xl">
                        Comprar membresía
                    </button>
                </div>
            </div>

        </>

    )

}