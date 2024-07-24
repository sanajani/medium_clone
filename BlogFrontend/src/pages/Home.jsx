import PostOverviewOnHome from "../components/posts/PostOverviewOnHome"
import ShowFollowingSection from "../components/ShowFollowingSection"


const Home = () => {
  return (
    <main className="grid lg:grid-cols-3 md:grid-cols-1 min-h-screen">
      {/* left section show posts */}
      <section className="lg:col-span-2 h-[400vh] mt-8">

        {/* show followings */}
        <div className="w-[80%] mx-auto">
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
      <section className="hidden lg:block bg-pink-400 sticky top-0 max-h-screen">

      </section>
    </main>
  )
}

export default Home