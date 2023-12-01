import CambioTitularidad from '../components/CambioTitularidad';
import ItemsRequisitos from '../components/ItemsRequisitos';

function Requisitos() {
    const handleNext = () => {
        document
            .querySelector('.table_row_invs')
            .classList.toggle('table_row_invs');
        document.querySelector('.table_row_invs').classList.toggle('table_row');
    };

    return (
        <div>
            <div className='md:w-full bg-gray-100 px-5 pt-5'>
                <div className='m-auto mb-6 font-bold text-2xl md:w-1/3 text-center'>
                    <span className='text-indigo-600'>Requisitos</span> para
                    hacer la transferencia de un coche:
                </div>
                <div
                    className='bg-white text-sm shadow-md py-5 px-20 m-auto font-semibold text-justify md:w-1/2 rounded-lg
            table'
                >
                    {/* <div className='md:flex content-start justify-end w-full mt-2'> */}
                    <div className='table-cell w-1/2'>
                        <p className='font-semibold text-base text-center'>
                            REQUISITOS
                        </p>
                        <div className='md:flex font-semibold text-base justify-center mb-3'>
                            <img
                                className='w-6 h-5 mx-0'
                                src='/static/img/logo.png'
                                alt='Logo'
                            />
                            tramicar
                        </div>{' '}
                    </div>
                    <div className='table-cell w-1/4'>
                        <p className='text-center text-base font-semibold uppercase'>
                            Gestoría
                        </p>{' '}
                    </div>
                    <ItemsRequisitos
                        valor={'DNI o NIE del conprador y del vendedor'}
                        cont={1}
                    />
                    <hr />
                    <ItemsRequisitos valor={'Datos del vehículo.'} cont={2} />
                    <hr />
                    <ItemsRequisitos
                        valor={'Acceso a un correo electrónico.'}
                        cont={3}
                    />
                    <hr />

                    <div className='table-row'>
                        <p className='p_row text-indigo-600 text-xl'>
                            ¿Así de sencillo, seguro y rápido!
                        </p>
                    </div>
                </div>
                <div className='md:flex justify-center pb-20'>
                    <input
                        type='submit'
                        className='btn btn_center md:w-1/5'
                        value='¡Quiero que Tramicar me ayude!'
                        onClick={handleNext}
                    />
                </div>
            </div>
            <CambioTitularidad />
        </div>
    );
}

export default Requisitos;
