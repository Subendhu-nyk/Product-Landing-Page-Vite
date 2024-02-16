const ProductCard = ({imgURL,changebigProductImage,bigProductImg}) => {
    const handleClick=()=>{
        if(bigProductImg !==imgURL.bigProduct)
        {
            changebigProductImage(imgURL.bigProduct)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigProductImg===imgURL.bigProduct ? 'border-coral-red' :'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
    <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} alt="shoe collection" width={95} height={90} className="object-contain" />
    </div>
    </div>
  )
}

export default ProductCard