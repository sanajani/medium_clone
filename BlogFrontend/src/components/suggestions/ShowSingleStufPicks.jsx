import userImage from '../../assets/author.jfif'
const ShowSingleStufPicks = () => {
  return (
    <div>
        <div className='my-3 max-w-[300px] mt-4'>
            {/* image div */}
            <div className='flex items-center gap-5'>
                <div className="h-[30px] w-[30px] bg-red-800 rounded-full">
                    <img className='w-full h-full rounded-full object-cover' src={userImage} alt="Writer_Pic" />
                </div>
                <span className='text-[13px]'>Writer Name</span>
            </div>
            <h1 className='m-0 p-0 font-bold '>Inside The Outages: A Dangerous Null Pointer Exception Deployed On Friday</h1>
        </div>
    </div>
  )
}

export default ShowSingleStufPicks