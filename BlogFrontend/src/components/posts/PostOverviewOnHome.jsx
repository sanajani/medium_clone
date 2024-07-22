// Post Overview pre-read section for users to read the posts
import { BiSolidLike,BiSolidMessageRounded,BiDotsVerticalRounded } from "react-icons/bi";
import authorImage from '../../assets/author.jfif'
import codingImage from '../../assets/coding.jfif'

import { CiCircleMinus } from "react-icons/ci";
import { BsSave } from "react-icons/bs";
import AuthorInfo from "./AuthorInfo";
import PostInfo from "./PostInfo";

const PostOverviewOnHome = () => {
  return (
    <section className="p-10">
      {/* <div className="flex mx-auto items-center gap-5 border-b border-black max-w-[80%]"> */}
      <div className="grid grid-cols-12 mx-auto items-center gap-5 border-b border-black max-w-[80%]">
        {/* post information  */}
        <div className="col-span-9">
            {/* author info above post */}
            <AuthorInfo authName={"Sana"} authImage={authorImage} />
            {/*end of author info above post */}
            {/* post Info */}
            <PostInfo/>
            {/*end post Info */}
            <div className="flex justify-between my-3">
              <div className="flex gap-4">
                <span>13 Jul</span>
                <span className="gap-1 flex items-center"><BiSolidLike/> 455</span>
                <span className="flex gap-1 items-center"><BiSolidMessageRounded/> 455</span>
              </div>
              <div className="flex gap-5 items-center">
                <span><CiCircleMinus size={24}/></span>
                <span><BsSave size={16} /></span>
                <span><BiDotsVerticalRounded size={20} /></span>
              </div>
            </div>
        </div>
        {/* post image */}
        <div className="col-span-3 bg-red-700">
          <img src={codingImage} className="h-full" alt="coding_image" />
        </div>
      </div>
    </section>
  )
}

export default PostOverviewOnHome