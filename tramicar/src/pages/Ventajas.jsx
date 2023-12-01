import Testimonios from '../components/Testimonios';
import ItemsVentajas from '../components/ItemsVentajas';
import '../components/Layout.css';

function Ventajas() {
    const handleTransferir = () => {
        document.querySelectorAll('svg').forEach((e) => {
            if (e.id != 'search') {
                e.classList.toggle('svg_activo');
            }
        });
    };

    return (
        <div>
            <div className='md:w-full bg-gray-100 px-5 pt-5'>
                <div className='m-auto mb-6 font-bold text-2xl md:w-1/3 text-center'>
                    <span className='text-indigo-600'>Ventajas</span> de hacer
                    el cambio de titularidad online con Tramicar.
                </div>
                <div
                    className='bg-white text-sm shadow-md py-5 px-20 m-auto font-semibold text-justify md:w-1/2 rounded-lg
                table'
                >
                    {/* <div className='md:flex content-start justify-end w-full mt-2'> */}
                    <div className='table-cell w-1/2'> </div>
                    <div className='table-cell w-1/4'>
                        <div className='md:flex font-semibold text-base justify-center'>
                            <img
                                className='w-6 h-5 mx-0'
                                src='/static/img/logo.png'
                                alt='Logo'
                            />
                            tramicar
                        </div>
                    </div>
                    <div className='table-cell w-1/4'>
                        <p className='text-center text-base font-semibold uppercase'>
                            Gestoría
                        </p>{' '}
                    </div>
                    <ItemsVentajas
                        valor={
                            'Comprador y vendedor pueden estar en lugares diferentes, pueden tramitar por separado, cuando y desde donde quieran'
                        }
                    />
                    <hr />
                    <ItemsVentajas
                        valor={
                            'Identificamos a las partes y al coche online, al instante.'
                        }
                    />
                    <hr />
                    <ItemsVentajas
                        valor={
                            'Firma telemática de los documentos. No tienes que enviarlos a ningun sitio.'
                        }
                    />
                    <hr />
                    <ItemsVentajas
                        valor={
                            'Envío a tu domicilio de tu nuevo Permiso de Ciculación.'
                        }
                    />
                </div>
                <div className='md:flex justify-center pb-20'>
                    <input
                        type='submit'
                        className='btn btn_center'
                        value='Transfiere tu coche'
                        onClick={handleTransferir}
                    />
                </div>
            </div>
            <div>
                <Testimonios />
            </div>
        </div>
    );
}

export default Ventajas;
