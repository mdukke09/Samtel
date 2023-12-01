import CambioNombre from './CambioNombre';
import ItemsTestimonios from './ItemsTestimonios';

function Testimonios() {
    return (
        <div className='bg-black md:h-full'>
            <h1 className='md:w-3/12 m-auto p-8 font-bold text-3xl text-blue-400 text-center'>
                - Testimonios De Nuestros Clientes -
            </h1>
            <div className='md:flex md:w-full px-5 pt-5'>
                <div className='md:flex sm:block md:w-full px-5 py-3 justify-center'>
                    <ItemsTestimonios
                        nombre={'Andrea Ochoa'}
                        perfil={'Compradora de coche'}
                        imagen={'/static/img/person2.jpeg'}
                    />
                    <ItemsTestimonios
                        nombre={'Francisco Criado'}
                        perfil={'Vendedor de moto'}
                        imagen={'/static/img/person1.jpeg'}
                    />
                </div>
            </div>
            <div className='md:w-full md:h-12 bg-gray-100'></div>
            <CambioNombre />
        </div>
    );
}

export default Testimonios;
