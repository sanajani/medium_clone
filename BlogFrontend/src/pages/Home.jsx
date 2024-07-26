import PostOverviewOnHome from "../components/posts/PostOverviewOnHome"
import RightSideBar from "../components/rightSidebar/RightSideBar"
import ShowFollowingSection from "../components/ShowFollowingSection"

const Home = () => {
  return (
    <main className="grid lg:grid-cols-3 md:grid-cols-1 min-h-screen">
      {/* left section show posts */}
      <section className="lg:col-span-2 min-h-[400vh] mt-8 border-r border-gray-200 ">

        {/* show followings */}
        <div className="w-[80%] mx-auto border-b pb-5 px-4 border-gray-200 hidden lg:block">
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
      <section className="hidden lg:block mt-8 sticky top-0 h-fit">
        <RightSideBar />
      </section>

    </main>
  )
}

export default Home