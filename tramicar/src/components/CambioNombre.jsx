function CambioNombre() {
    return (
        <div className='md:w-full bg-indigo-600 px-5 pt-5 md:flex'>
            <div className='bg-indigo-600 block ml-10 w-1/2 mr-5'>
                <img className='m-auto' src='/static/img/Imagen2.png' alt='' />
            </div>
            <div className='text-white m-auto block ml-10 w-1/2 mr-5 md:p-10'>
                <h1 className='font-bold text-3xl mb-2'>
                    ¿Cómo hacer el cambio de nombre de coche?
                </h1>
                <h3 className='font-bold text-1xl'>
                    En Tramicar, sabemos que la burocracia es muy pesada...
                </h3>
                <p>
                    Y somos conscientes de los problemas que acarrea el cambio
                    de nombre de coche: pérdida de tiempo, cargas que bloquean
                    la transferencia del vehículo, dudas, incertidumbre...
                </p>
                <input
                    type='submit'
                    className='btn_white bg-white text-indigo-600 md:w-1/2 mt-8 p-3'
                    value='Te ayudamos a transferir tu coche ->'
                />
            </div>
        </div>
    );
}

export default CambioNombre;
