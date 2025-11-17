

import Truck from '../../public/icons/truck.svg'




export default function FreeShipping() {
    return (
        <div className="w-full bg-primary flex flex-col lg:flex-row lg:justify-between items-center gap-y-1 p-4 lg:px-10 text-white max-w-[1400px] rounded-md">
            <h4 className='flex text-xl lg:text-3xl w-full justify-center items-center gap-x-2 lg:w-fit'><Truck className='w-15 h-15 scale-x-[-1]'/>FREE SHIPPING</h4>
            <hr className=' border-neutral-200/40 rotate-90 h-1 w-8'></hr>
            <p className='text-center'>Free delivery now on your first order and over $200</p>
            <hr className=' border-neutral-200/40 rotate-90 h-1 w-8'></hr>
            <span className='text-2xl lg:text-3xl'>- Only $200*</span>
        </div>
    );
}