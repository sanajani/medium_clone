import StoryPageNav from "../components/story/StoryPageNav"
import {useContext, useEffect} from 'react'
import { EditorContext } from "../layout/EditorLayout";
import EditorJS from '@editorjs/editorjs'
import { tools } from "../components/editorTools/EditorTools";


const NewStory = () => {
    let {blogValues ,blogValues:{title,banner,content,tags,des}, setBlogValues} = useContext(EditorContext);

    useEffect(() => {
        let editor = new EditorJS({
            holder: "textEditor",
            data: '',
            placeholder: 'let write an awesome story',
            tools,
            
        })
    }, [])

    const getTitle = (e) => {
        if(e.keyCode == 13){
            e.preventDefault();
        }
    }

    const handleTitleField = (e) =>{
        console.log(e);
        let input = e.target;
        input.style.height = 'auto';
        input.style.height = input.scrollHeight + "px";
        setBlogValues({
            ...blogValues,
            title: e.target.value
        })
    }

  return (
    <div className="max-w-[900px] w-full px-10 lg:px-0 mx-auto">
        <StoryPageNav />
        <div className="mt-3 relative w-full h-[320px] rounded-md overflow-hidden min-h-[320px] md:h-auto border border-gray-300">
            <img className=" absolute top-0 left-0 w-full h-full object-cover opacity-55" src="https://cdn.pixabay.com/photo/2018/07/25/16/00/art-3561710_640.jpg" alt="banner" />
            <label className="text-3xl capitalize absolute top-0 left-0 w-full h-full flex text-white justify-center items-center font-bold z-[1000] cursor-pointer" htmlFor="file">banner for Post</label>
            <input 
            className="hidden"
            type="file"
            id="file"
            accept=".png .jpg"
             />
        </div>
        <div className="w-full mt-5">
            <textarea
            onKeyDown={getTitle}
            placeholder="Title"
            onChange={handleTitleField}
            className="placeholder:opacity-60 w-full break-words text-3xl  md:text-4xl lg:text-5xl outline-none h-20 resize-none pl-3 border-gray-500"
            ></textarea>
        </div>
        <div id="textEditor" className="w-full">

        </div>
    </div>
  )

}

export default NewStory