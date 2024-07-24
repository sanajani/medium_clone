import userImage from '../../assets/author.jfif'
const WhoToFollowRecommend = () => {
  return (
        <div className='my-3 max-w-[300px] mt-4'>
            {/* image div */}
            <div className='flex items-start gap-3'>
                <div className="h-[30px] w-[40px] bg-red-800 rounded-full">
                    <img className='w-full h-full rounded-full object-cover' src={userImage} alt="Writer_Pic" />
                </div>
                <div>
                    <span className='font-bold text-base'>SomeoneName you </span>
                    <p className='font-thin text-sm'>A Dangerous Null Pointer Exception Deployed On Friday</p>
                </div>
                <span className='border py-1 rounded-full inline-block border-gray-600 px-3'>Follow</span>
            </div>
        </div>
  )
}

export default WhoToFollowRecommend