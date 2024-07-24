import ReadingList from "../readinglest/ReadingList"
import Recommended from "../recommened/Recommended"
import ShowSingleStufPicks from "../suggestions/ShowSingleStufPicks"
import WhoToFollowRecommend from "../whotofollowsection/WhoToFollowRecommend"

const RightSideBar = () => {
  return (
      <>
    
      {/* right section show details */}
      <section className="hidden lg:block border-l border-gray-200 sticky top-0 mt-8 h-fit">
        {/* pick section start */}
        <div className="px-10">
          <h1 className="font-bold">Staff Picks</h1>
          <div>
            <ShowSingleStufPicks/>
            <ShowSingleStufPicks/>
            <ShowSingleStufPicks/>
          </div>
          <span className="text-sm text-green-500">See the full list</span>
        </div>
        {/* pick section end */}

        {/* recommended section started */}
        <div className="px-10 mt-10">
          <h1 className="font-bold mb-3">Recommended Topics</h1>
          <div className="max-w-[300px] flex flex-wrap gap-4">
            <Recommended text='Programming' />
            <Recommended text='Coding' />
            <Recommended text='Reading' />
            <Recommended text='Writing' />
            <Recommended text='Gaming' />
            <Recommended text='Learning' />
          </div>
          <span className="text-sm text-green-500">See more topics</span>
        </div>
        {/* recommended section ended*/}

        {/* who to follow */}
        <div className="px-10 mt-10">
          <h1 className="font-bold mb-3">who to Follow</h1>
          <div className="max-w-[300px] flex flex-wrap gap-4">
            <WhoToFollowRecommend/>
            <WhoToFollowRecommend/>
            <WhoToFollowRecommend/>
          </div>
          <span className="text-sm text-green-500">See more topics</span>
        </div>
        {/* who to follow end */}

        {/* reading section */}
        <div className="px-10 my-10">
          <h1 className="font-bold mb-3">Reading List</h1>
          <ReadingList/>
        </div>
        {/*end of reading section */}

      </section>
      
      </>
  )
}

export default RightSideBar