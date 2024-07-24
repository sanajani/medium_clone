import PostOverviewOnHome from "../components/posts/PostOverviewOnHome"
import Recommended from "../components/recommened/Recommended"
import ShowFollowingSection from "../components/ShowFollowingSection"
import ShowSingleStufPicks from "../components/suggestions/ShowSingleStufPicks"
import WhoToFollowRecommend from "../components/whotofollowsection/WhoToFollowRecommend"

const Home = () => {
  return (
    <main className="grid lg:grid-cols-3 md:grid-cols-1 min-h-screen">
      {/* left section show posts */}
      <section className="lg:col-span-2 min-h-screen mt-8 h-[400vh]">

        {/* show followings */}
        <div className="w-[80%] mx-auto border-b pb-5 px-4 border-gray-200">
          <ShowFollowingSection />
        </div>
        {/* end of show followings */}

        <div className="mt-7">
        <PostOverviewOnHome/>
        <PostOverviewOnHome/>
        <PostOverviewOnHome/>
        </div>

      </section>

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

        
      </section>
    </main>
  )
}

export default Home