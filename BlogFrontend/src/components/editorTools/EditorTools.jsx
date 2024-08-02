import axios from 'axios'
// importing tools 

import Embed from '@editorjs/embed';
import List from '@editorjs/list'
import Image from '@editorjs/image'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import inlineCode from '@editorjs/inline-code'
import ImageTool from '@editorjs/image';

// const uploadImageByUrl = (e) => {
//     let link = new Promise((resolve,reject) => {
//         try {
//             resolve(e)
//         } catch (error) {
//             reject(error)
//         }
//     })
//     return link.then(url => {
//         return {
//             file: {url}
//         }
//     })
// }

// const uploadImageByFile = () => {

// }

export const tools = {
    embed: Embed,
    list: {
        class: List,
        inlineToolbar: true
    },
    // image: Image,
    image: {
        class: Image,
        config: {
            // uploader:{
            //     uploadByUrl: ImageTool,
            // }
            // endpoints: {
            //     byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
            //     byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            //   }
            image: {
                class: ImageTool,
                config: {
                  uploader: {
                    async uploadByFile(file) {
                      // your own uploading logic here
                      const formData = new FormData();
                      formData.append("file", file);
      
                      const response = await axios.post(
                        `http://localhost:4001/api/uploadImage/create`,
                        formData,
                        {
                          headers: {
                            "Content-Type": "multipart/form-data",
                          },
                          withCredentials: false,
                        }
                      );
      
                      if (response.data.success === 1) {
                        return response.data;
                      }
                    },
                    // async uploadByUrl(url) {
                    //   const response = await axios.post(
                    //     `http://localhost:4001/api/uploadImage/createByUrl`,
                    //     {
                    //       url,
                    //     }
                    //   );
      
                    //   if (response.data.success === 1) {
                    //     return response.data;
                    //   }
                    // },
                  },
                  inlineToolbar: true,
                },
              },
        }
    },
    header: {
        class: Header,
        config:{
            placeholder: "Type Heading...",
            levels: [2,3],
            defaultLevel: 2
        }
    },
    inlineCode: inlineCode,
    quote: {
        class: Quote,
        inlineToolbar: true
    },
    marker: Marker,
}