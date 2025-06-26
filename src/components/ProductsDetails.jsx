import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import ProductsDetailsOverview from './ProductsDetailsOverview';
import RelatedProducts from './RelatedProducts';
import {add} from '../Redux/addCartReducer'
import { TiTick } from 'react-icons/ti';
import productsData from '../Data/ProductsData';
// import Footer from './Footer';
import './Style.css';


const  ProductsDetails = () => {
   
    const {id} = useParams();
    const productId = parseInt(id);
    const details = productsData.find((product) => product.id === productId);
    if(!details){
        return <div className="text-light pt-5 mt-5">Product not found</div>;
    }
    const {images,title,info,rateCount,finalPrice,originalPrice,category} = details;
    const [displayImage, setDisplayImage] = useState(images[0]);
    const dispatch = useDispatch();

    let star = '';
    const rating = () =>{
        for(let i=1; i<=rateCount; i++){
            star += "⭐"
        }
        return star
    }
    let discountPrice = originalPrice - finalPrice;

    const AddCart = (List) =>{
        dispatch(add(List));
    }
  return (
    <>
     <div className='container-fluid pt-5 mt-5'>
        <div className='row'>
         <div className="col-lg-1">
                    {
                        images.map((image, index) => (
                            
                            <img 
                                src = {image} 
                                style={{width:'150px', cursor:'pointer'}} 
                                className='border m-3 p-2' 
                                alt={`product-${index}`} 
                                key={index} onClick={() => setDisplayImage(image)}
                            />
                        ))
                    }
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                    <img src={displayImage} style={{width:'700px'}} className='image-fluid' alt='' />
                </div>
                <div className="col-lg-3 text-start text-light">
                    <h3 className='mt-4'>{title}</h3>
                    <h6>{info}</h6>
                    <p className='border-bottom pb-4'>{rating()}</p>
                    <p className='fs-4 fw-bold mt-4'>Rs.{finalPrice} <strike className='fs-5 text-secondary'> Rs.{originalPrice}</strike></p>
                    <div className="d-flex justify-content-between">
                    <div className='text-success'>You Save: Rs. {discountPrice}</div>
                        <button className='btn btn-success'><TiTick className='text-light'/> <span>In Stock</span></button>
                    </div>
                    <div className='text-secondary mt-2 border-bottom pb-4'>(Inclusive of all taxes)</div>
                    <h5 className='mt-4'>Offers and Discounts</h5>
                    <div className="d-flex mt-4 border-bottom pb-4">
                        <button className="btn btn-outline-secondary me-2 text-start">No cost EMI on Credit card</button>
                        <button className="btn btn-outline-secondary text-start">Pay Later and Avail Casback</button>
                    </div>
                    <button className='btn text-light mt-5 px-5' id='btn' onClick={() => {AddCart(details)}}>Add to Cart</button>
                </div>

        </div>
        
    </div> 
    <ProductsDetailsOverview details={details} />
    <RelatedProducts category={category} productsData={productsData} id={id}/>
    
    {/* <Footer/> */}
    
    </>
  )
}

export default ProductsDetails

