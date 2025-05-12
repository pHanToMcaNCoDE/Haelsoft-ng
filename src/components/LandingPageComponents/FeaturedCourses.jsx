import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdOutlineBroadcastOnPersonal } from 'react-icons/md'
import secureLocalStorage from 'react-secure-storage'

const FeaturedCourses = () => {

  const [currentTab, setCurrentTab] = useState("Featured");
  const [features, setFeatures] = useState([]);
  const [latest, setLatest] = useState([]);


  useEffect(() => {
    const triggerFetch = () => {
      let endpoint = '';

      if(currentTab === 'Featured'){
        endpoint = 'featured'
      }else{

        endpoint = 'latest'
      }
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}courses/${endpoint}`,)
      
      .then((response) => {

        console.log(`${endpoint} Response`, response.data)

        if(currentTab === 'Featured'){
          setFeatures(response.data.data)
        } else {
          setLatest(Array.isArray(response.data.data) ? response.data.data : [])
        }
        
      })

      .catch((error) => console.log(`${endpoint} Error`, error))
    }

    if(currentTab) triggerFetch()
  }, [currentTab])


  
  const handleAddToCartRequest = async () => {
    setIsLoading(true);

    
      // const cartItems = await fetchCartItems();
      // const alreadyInCart = cartItems.some(item => item.course.id === courses.course_id);

      // if (alreadyInCart) {
      //   toast.info("Course already in cart");
      //   return;
      // }

      if(token){
          try {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_BASE_URL}cart/add-to-cart/${id}`,
              {},
              {
                headers: {
                  Accept: 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            toast.success(response.data.message);
            
            if (typeof window !== "undefined") {
              window.location.href = '/dashboard/shopping-cart';
            }

          } catch (error) {
            toast.error(error.response.data.message)
          } finally {
            setIsLoading(false);
          }
      }else{
        window.location.href = '/signin'
      }
  };
                
    
  return (
    <section className='h-full px-5 py-25 flex flex-col gap-10 py-[40px]'>

      <div className='w-full border-b border-neutral-200 flex justify-start items-center gap-4'>
        {
          ['Featured', 'Latest'].map((tab) => (
            <div onClick={() => setCurrentTab(tab)} className='cursor-pointer text-lg flex flex-col gap-2 justify-center items-center font-medium text-grayTwo relative'>
              {tab}
              <div className='w-[50px] h-[3px] bg-yellow-300 absolute inset-x-0'></div>
            </div>
          ))
        }

        {/* <div onClick={() => setCurrentTab('Latest')} className='cursor-pointer text-lg flex flex-col gap-2 justify-center items-center font-medium text-grayTwo relative'>
          Latest
          <div className='w-[50px] h-[3px] bg-yellow-300 absolute inset-x-0'></div>
        </div> */}
      </div>
      
      <div className='w-full'>
        {
          currentTab === 'Featured' && (
            <>
              <h1 className='text-[1.5rem] lg:text-[2rem] font-semibold text-black'>Featured Courses</h1>
              {
                Array.isArray(features) && features.map((feature) => (
                  <div
                    key={feature.uid}
                    className="bg-white w-full h-full lg:h-[425px] border border-[#cfcece] rounded-[6px] flex flex-col justify-between gap-2 items-start cursor-pointer"
                  >
                    {/* <div
                      className="h-[200px] w-full bg-cover bg-center bg-no-repeat rounded-t-[6px]"
                      style={{ backgroundImage: `url(${course?.img_course ? `https://res.cloudinary.com/dmpqdaupc/image/upload/${course.img_course}` : "/fallback-image.jpg"})` }}
                    ></div> */} 
                    {/* <div className="relative overflow-hidden w-fit h-fit"> */}
                      <Image
                        width={523}
                        height={300}
                        className="object-cover rounded-tl-[6px] rounded-tr-[6px] w-[523px] h-[300px] overflow-hidden"
                        src={
                          feature?.cover_image
                            ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${feature.cover_image}`
                            : "/fallback-image.jpg"
                        }
                        alt={feature.title}
                      />
                    {/* </div> */}
                      
                    <div className="px-3 pb-5 flex flex-col justify-end items-start w-full gap-2">
                      <h1 className="text-black text-xl font-semibold">{feature.title.substr(0, 40) + '...'}</h1>
                      <p className="text-grayTwo text-sm text-[.75rem]">{feature.sub_title.substr(0, 30) + '...'}</p>
                      <div className="flex flex-wrap justify-between items-center w-full gap-5">
                        <Rating
                          style={{ maxWidth: 80 }}
                          value={rating || 0}
                          onChange={setRating}
                        />
                        <p className="text-grayTwo text-base text-[.75rem]">(1000)</p>
                      </div>
                      <div className="flex flex-col justify-center items-start gap-2">
                        <p className="text-grayTwo font-bold text-lg text-[.75rem]">
                          ₦{Number(feature.price).toLocaleString() || "N/A"}
                        </p>
                        <button
                          className="py-8 flex justify-center items-center h-[72px] rounded-bl-[30px] rounded-br-[30px] w-full text-white font-semibold bg-main"
                          onClick={handleAddToCartRequest}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              }


            </>
          )
        }

        {
          currentTab === 'Latest' && (
            <>
              <h1 className='text-[1.5rem] lg:text-[2rem] font-semibold text-black'>Latest Courses</h1>

              
            </>
          )
        }
      </div>
    </section>
  )
}

export default FeaturedCourses