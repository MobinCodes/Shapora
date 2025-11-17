

import Truck from '../../public/icons/truck.svg'




export default function FreeShipping() {
  return (
    <div className="w-full bg-primary flex flex-col lg:flex-row lg:justify-between items-center gap-y-2 p-5 lg:px-10 text-white">
        <h4 className='flex text-xl'><Truck />FREE SHIPPING</h4>
          <p>Free delivery now on your first order and over $200</p>
          <span>- Only $200*</span>
    </div>
  );
}