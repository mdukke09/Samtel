/* eslint-disable react/prop-types */
function ItemsVentajas({ valor }) {
    return (
        <>
            <div className='table-row'>
                <p className='p_row'>{valor}</p>
                <div className='table-cell'>
                    <div className='md:flex table-cell justify-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='svg_blue'
                        >
                            <path
                                fillRule='evenodd'
                                d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </div>
                </div>
                <div className='table-cell'>
                    <div className='md:flex table-cell justify-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6 mt-1 text-blue-600'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemsVentajas;
