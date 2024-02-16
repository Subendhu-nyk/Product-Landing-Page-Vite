import { shop, shop2 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
             <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
         We Provide You          
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality</span> Products
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        At our medical store, we prioritize your health by offering only the highest quality products. From trusted medications to essential health supplies, we ensure every item meets stringent quality standards. 
        </p>

        <p className='mt-6 lg:max-w-lg info-text'>
        With a focus on excellence, we partner with trusted manufacturers and conduct rigorous quality checks. Your health and well-being are our top priorities, and we strive to provide products that not only meet but exceed industry standards. Trust us for your health care needs.
        </p>
        <div className="mt-11">
          <Button label='View details'/>
        </div>
         </div>
       <div className="flex-1 flex justify-center items-center">
        <img src={shop2}
        alt='shop'
        width={570}
        height={522}
        className="object-contain"
        />
        </div>  
    </section>
  )
}

export default SuperQuality