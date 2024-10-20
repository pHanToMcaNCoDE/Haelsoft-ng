import React from 'react'

const Profile = () => {
  return (
    <section className='bg-[#F6F6F6] w-full min-h-screen py-[100px]'>
        <div className='max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col lg:flex-row justify-start items-start gap-[40px] lg:gap-[24px]'>
            <div className='bg-[#FF8C53] w-full md:w-[296px] h-full md:h-[418px] rounded-[4px] p-[24px] flex flex-col justify-center items-center gap-[8px]'>
                <p className='leading-[46px] font-medium text-[1.125rem] text-white'>Personal Details</p>
                    <div className='w-[120px] h-[120px] rounded-full bg-white text-[#FF8C53] leading-[29.26px] text-[1.5rem] font-semibold flex justify-center items-center text-center'>EO</div>
                <p className='leading-[46px] font-medium text-[1.125rem] text-white'>Akinola Jones</p>
                <p className='leading-[46px] font-medium text-[1.125rem] text-white'>Share profile link</p>
                <p className='leading-[46px] font-medium text-[1.125rem] text-white'>Update Visibility</p>
            </div>
            <div className='w-full lg:w-[923px] min-h-screen flex flex-col justify-center items-start gap-[32px]'>
                <div className='w-full flex flex-col justify-center items-start gap-[8px]'>
                    <h1 className='text-[#655D59] leading-[29.26px] font-semibold text-[1.5rem]'>Full name</h1>
                    <form className='p-[24px] w-full bg-white border-[2px] border-[#F7F7F7] rounded h-full md:h-[289px]' action="">
                        <div className='flex flex-col justify-center items-start gap-[8px]'>
                            <h1 className='text-[#655D59] leading-[46px] font-medium text-[1.125rem]'>First name</h1>
                            <input className='bg-[#F0F0F0] p-[10px] h-[56px] gap-[10px] rounded w-full' type="text" name="" id="" />
                        </div>
                        <div className='flex flex-col justify-center items-start gap-[8px]'>
                            <h1 className='text-[#655D59] leading-[46px] font-medium text-[1.125rem]'>Last name</h1>
                            <input className='bg-[#F0F0F0] p-[10px] h-[56px] gap-[10px] rounded w-full' type="text" name="" id="" />
                        </div>
                    </form>
                </div>
                <div className='w-full flex flex-col justify-center items-start gap-[8px]'>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className='text-[#655D59] leading-[29.26px] font-semibold text-[1.5rem]'>Headline</h1>
                        <h1 className='text-[#7F7571] leading-[19.5px] font-normal text-[1rem]'>Optional</h1>
                    </div>
                    <form className='p-[24px] w-full bg-white border-[2px] border-[#F7F7F7] rounded h-full md:h-[184px]' action="">
                        <div className='flex flex-col justify-center items-start gap-[8px]'>
                            <div className='w-full flex justify-between items-center'>
                                <h1 className='text-[#655D59] leading-[46px] font-medium text-[1.125rem]'>Professional Headine</h1>
                                <h1 className='text-[#655D59] leading-[46px] font-medium text-[1.125rem]'>80 words</h1>
                            </div>
                                <input className='bg-[#F0F0F0] p-[10px] placeholder:text-[#7F7571] text-[1.125rem] placeholder:text-[1.125rem] h-[56px] gap-[10px] rounded w-full' placeholder='Add work experience here' type="text" name="" id="" />
                        </div>
                    </form>
                </div>
                <div className='w-full flex flex-col justify-center items-start gap-[8px]'>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className='text-[#655D59] leading-[29.26px] font-semibold text-[1.5rem]'>Credentials</h1>
                        <h1 className='text-[#7F7571] leading-[19.5px] font-normal text-[1rem]'>Optional</h1>
                    </div>
                    <form className='p-[24px] w-full bg-white border-[2px] border-[#F7F7F7] rounded h-full md:h-[184px]' action="">
                        <div className='flex flex-col justify-center items-start gap-[8px]'>
                            <div className='w-full flex justify-between items-center'>
                                <h1 className='text-[#655D59] leading-[46px] font-medium text-[1.125rem]'>Certificates</h1>
                            </div>
                            <input className='bg-[#F0F0F0] p-[10px] placeholder:text-[#7F7571] text-[1.125rem] placeholder:text-[1.125rem] h-[56px] gap-[10px] rounded w-full' placeholder='Add certificates here' type="text" name="" id="" />
                        </div>
                    </form>
                </div>
                <div className='w-full flex flex-col justify-center items-start gap-[8px]'>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className='text-[#655D59] leading-[29.26px] font-semibold text-[1.5rem]'>Courses</h1>
                    </div>
                    <form className='p-[24px] w-full bg-white border-[2px] border-[#F7F7F7] rounded h-full md:h-[184px]' action="">
                        <div className='flex flex-col justify-center items-start gap-[8px]'>
                            <div className='w-full flex justify-between items-center'>
                                <h1 className='text-[#655D59] leading-[46px] font-medium text-[1.125rem]'>Completed Courses</h1>
                            </div>
                            <input className='bg-[#F0F0F0] p-[10px] placeholder:text-[#7F7571] text-[1.125rem] placeholder:text-[1.125rem] h-[56px] gap-[10px] rounded w-full' placeholder='Add certificates here' type="text" name="" id="" />
                        </div>
                    </form>
                </div>
                <div className='w-full flex flex-col justify-center items-start gap-[8px]'>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className='text-[#655D59] leading-[29.26px] font-semibold text-[1.5rem]'>Links</h1>
                        <h1 className='text-[#7F7571] leading-[19.5px] font-normal text-[1rem]'>Optional</h1>
                    </div>
                    <form className='w-full flex flex-col justify-center px-[24px] py-[12px] items-start gap-[24px] bg-white border-[2px] border-[#F7F7F7] rounded h-full md:h-[487px]' action="">
                        <input className='bg-[#F0F0F0] p-[10px] placeholder:text-[#7F7571] text-[1.125rem] placeholder:text-[1.125rem] h-[56px] gap-[10px] rounded w-full' placeholder='Website link' type="text" name="" id="" />
                        <input className='bg-[#F0F0F0] p-[10px] placeholder:text-[#7F7571] text-[1.125rem] placeholder:text-[1.125rem] h-[56px] gap-[10px] rounded w-full' placeholder='Portfolio link' type="text" name="" id="" />
                        <input className='bg-[#F0F0F0] p-[10px] placeholder:text-[#7F7571] text-[1.125rem] placeholder:text-[1.125rem] h-[56px] gap-[10px] rounded w-full' placeholder='LinkedIn link' type="text" name="" id="" />
                        <input className='bg-[#F0F0F0] p-[10px] placeholder:text-[#7F7571] text-[1.125rem] placeholder:text-[1.125rem] h-[56px] gap-[10px] rounded w-full' placeholder='Twitter link' type="text" name="" id="" />
                        <input className='bg-[#F0F0F0] p-[10px] placeholder:text-[#7F7571] text-[1.125rem] placeholder:text-[1.125rem] h-[56px] gap-[10px] rounded w-full' placeholder='Email link' type="text" name="" id="" />
                    </form>
                </div>

                    <button className='border border-[#F36400] w-[150px] h-[41px] rounded p-[10px] gap-[10px] text-main bg-white text-[.875rem] leading-[21px] font-medium'>Save</button>
            </div>
        </div>
    </section>
  )
}

export default Profile