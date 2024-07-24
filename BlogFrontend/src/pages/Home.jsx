import PostOverviewOnHome from "../components/posts/PostOverviewOnHome"
import RightSideBar from "../components/rightSidebar/RightSideBar"
import ShowFollowingSection from "../components/ShowFollowingSection"

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
      <RightSideBar />
      
    </main>
  )
}

export default Home