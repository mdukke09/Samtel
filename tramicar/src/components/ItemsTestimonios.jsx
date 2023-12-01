/* eslint-disable react/prop-types */
function ItemsTestimonios({ nombre, perfil, imagen }) {
    return (
        <div className='block ml-10 w-1/4 mr-5'>
            <div className='border-gray-400 bg-white p-4 flex-col rounded-xl'>
                <div className='flex items-center mb-4'>
                    <img
                        className='w-16 h-16 rounded-full mr-4'
                        src={imagen}
                        alt='Andrea'
                    />
                    <div className='text-sm'>
                        <p className='font-bold text-xl'>{nombre}</p>
                        <p className='text-gray-600'>{perfil}</p>
                    </div>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6 m-auto text-indigo-700'
                    >
                        <path
                            fillRule='evenodd'
                            d='M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z'
                            clipRule='evenodd'
                        />
                    </svg>
                </div>
                <hr />
                <div className='mt-4 mx-4'>
                    <p className='text-gray-700 text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ItemsTestimonios;
