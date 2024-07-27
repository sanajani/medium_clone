import { createContext } from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const blogStructure = {
  title: "",
  banner: "",
  content: [],
  tags:[],
  des:'',
  author: {
    personal_info: {}
  }
}


export const EditorContext = createContext(blogStructure);

const EditorLayout = () => {
    const [blogValues,setBlogValues] = useState(blogStructure)

  return (
    <EditorContext.Provider value={{blogValues, setBlogValues}}>
        <div>
            <Outlet />
        </div>
    </EditorContext.Provider>
  )
}

export default EditorLayout