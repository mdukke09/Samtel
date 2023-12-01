import { Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
    return (
        <div className='min-h-screen'>
            <div className='md:min-w-screen'>
                <div className='md:flex sm:block md:w-full bg-gray-100 px-5 py-3 top-0 sticky'>
                    <div className='md:flex content-start justify-center w-1/6 mt-2'>
                        <a href='/' className='md:flex font-semibold text-3xl'>
                            <img
                                className='w-8 h-8 align-text-bottom'
                                src='/static/img/logo.png'
                                alt='Logo'
                            />
                            tramicar
                        </a>
                    </div>
                    <div className='md:flex md:justify-center sm:justify-start md:w-4/6'>
                        <a className='nav_a' href='#'>
                            ¿Cómo funciona?
                        </a>
                        <a className='nav_a' href='#'>
                            Trámites
                        </a>
                        <a className='nav_a' href='#'>
                            Informe DGT
                        </a>
                        <a className='nav_a' href='#'>
                            Notificación de venta
                        </a>
                        <a className='nav_a' href='#'>
                            Blog
                        </a>
                        <a className='nav_a' href='/Requisitos'>
                            Requisitos
                        </a>
                    </div>
                    <div className='md:relative justify-center mt-2 mr-8 w-1/6'>
                        <input
                            type='text'
                            name='search'
                            id='search'
                            placeholder='  N° Localizador o Trámite'
                            className='border border-gray-300 py-1.5 placeholder-gray-400 rounded-xl md:w-full
                            focus:border-gray-400 focus:outline-none focus:shadow-md my-auto'
                        />
                        <div className='md:absolute inset-y-5 right-3 flex items-center md:visible lg:visible sm:invisible invisible md:pb-2 md:top-5 top-2'>
                            <svg
                                id='search'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-6 h-6 text-indigo-500 rounded-md cursor-pointer'
                            >
                                <path d='M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z' />
                                <path
                                    fillRule='evenodd'
                                    d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='md:flex sm:block md:w-full bg-gray-100 px-5 py-3 justify-center'>
                    <div className='block ml-10 w-2/5'>
                        <h3 className='font-bold text-1xl uppercase'>
                            Transferencia de coche
                        </h3>
                        <h1 className='font-bold text-3xl mb-2'>
                            ¡Transfiere tu {''}
                            <span className='text-blue-600'>coche</span> desde
                            tu teléfono!
                        </h1>
                        <p className='text-justify'>
                            En Tramicar contamos con un equipo de expertos que
                            te ayudaran a cambiar de nobre tu vehículo online,
                            desde cualquier parte, los 365 días del año
                        </p>
                    </div>
                    <div className='block ml-10 w-2/5'>
                        <img src='/static/img/Imagen1.png' alt='' />
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
            <div className='bottom-0 md:w-full bg-gray-100 px-5 py-3'>
                <h1 className='font-semibold mx-auto text-center mb-4'>
                    Nuestro trabajo es posible gracias a la confianza de
                    nuestros partners.
                </h1>
                <div className='md:flex justify-center mx-auto'>
                    <img
                        className='m-2'
                        src='/static/img/cochesnet.png'
                        alt=''
                    />
                    <img className='m-2' src='/static/img/dgt.png' alt='' />
                    <img
                        className='m-2'
                        src='/static/img/milanuncios.png'
                        alt=''
                    />
                    <img
                        className='m-2'
                        src='/static/img/valoracion.png'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
}

export default Layout;
