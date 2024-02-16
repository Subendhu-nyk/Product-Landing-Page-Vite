import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
   <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
    <div className="flex-1 border border-red-400 border-spacing-3">
      <img src={offer} width={633} height={587} className="object-contain w-full"/>
    </div>
    <div className="flex flex-1 flex-col justify-center lg:ps-16">
             <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            
          <span className='text-coral-red'> Special </span>
          Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Check out our special offer! Enjoy up to 20% off on all your favorite health care essentials. Plus, we've got some sweet deals on wellness products to keep you feeling your best. 
        </p>        
        <p className='mt-6 lg:max-w-lg info-text'>
        Hurry, these savings won't stick around forever. Treat yourself to some health and wellness love without breaking the bank!.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label='Shop now' iconURL={arrowRight}/>
          <Button label='Learn more' backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
         </div>
   </section>
  )
}

export default SpecialOffer