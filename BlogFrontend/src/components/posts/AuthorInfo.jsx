/* eslint-disable react/prop-types */

const AuthorInfo = ({authName,authImage}) => {
  return (
    <div className="flex items-center gap-4 text-gray-600">
        <span className="inline-block max-w-[30px] h-[30px] rounded-full w-[30px] overflow-hidden">
          <img className="w-full" src={authImage} alt="Author of the post" />
        </span>
        <span className="text-sm">Author Name : ${authName}</span>
    </div>
  )
}

export default AuthorInfo