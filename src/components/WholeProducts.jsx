import React, { useState } from 'react'
import productsData from '../Data/ProductsData';
import { useDispatch } from 'react-redux';
import { TiTick } from 'react-icons/ti';

const WholeProducts = () => {
    const {id} = useParams();
    const details = productsData[id-1];
    const {images,title,info,rateCount,finalPrice,originalPrice,category} = details;
    const [displayImage, setDisplayImage] = useState(images[0]);
    const dispatch  = useDispatch()

    let star = '';
    const rating = () =>{
        for(let i=1; i<=rateCount;i++){
            star += "⭐"
        }
        return star
    }
    let discountPrice = originalPrice - finalPrice;
    const AddCart = (list) =>{
        dispatch(add(list));
    }
  return (
    <>
      <div className='container-fluid pt-5 mt-5'>
         <div className='row'>
            <div className='col-lg-1'>
              {
                images.map(image =>(<img src={image} style={{width:'150px', cursor:'pointer'}}
                className='border m-3 p-2'
                alt='image.id'
                key={image} onClick={() => setDisplayImage(image)}/>))
              }
            </div>
             <div className='col-lg-1'></div>
             <div className='col-lg-6'>
                <img src={displayImage} style={{width:'700px'}} className='image-fluid' alt=''/>
             </div>
             <div className='col-lg-3 text-start text-light'>
                <h3 className='mt-4'>{title}</h3>
                <h6>{info}</h6>
                <p className='border-bottom pb-4'>{rating()}</p>
                <p className='fs-4 fw-bold mt-4'>Rs.{finalPrice}<strike className='fs-5 text-secondary'>Rs.{originalPrice}</strike></p>
                <div className='d-flex justify-content-between'>
                    <div className='text-success'>you Save: Rs. {discountPrice}</div>
                    <buton className='btn btn-success'><TiTick className='text-dark'/></buton>
                </div>
                <div className='text-secondary mt-2 border-bottom pb-4'>(inclusive of all taxes)</div>
                <h5 className='mt-4'>Offers and discount</h5>
                <div className='d-flex mt-4 border-bottom pb-4'>
                   <buton className='btn btn-outline-secondary me-2 text-start'>No cost EMI on credit Card</buton>
                   <button className='btn btn-outline-secondary text-start'>pay Later and Available Casback</button>
                </div>
                <button className='btn text-light mt-5 px-5' id='btn' onClick={() =>{AddCart(details)}}>Add to Cart</button>
             </div>
         </div>
      </div>
      <ProductsDetailsOverview details = {details}/>
    </>
  )
}

export default WholeProducts
