import React, { useState } from 'react'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import { comments } from './comments';
import { userPost } from './UserPost';

const Photo = () => {
   const [like, setLike] = useState(15)
   const [dislike, setDislike] = useState(10)
   const [comment, setcomment] = useState(" ")

   const submitComment=(e)=>{
   }
  return (
<>
    {
        userPost.map((item)=> (
<div className="w-full bg-bggray my-2  rounded-md text-[9px] text-lightgray" key={item.id}>
        <img
        className="mx-auto h-[240px] rounded-t-md object-contain my-auto"
            src={item.img}
        />
        <div className=" h-min flex flex-col mx-1 p-2">
            <div className="grid grid-cols-5">
            <div className="col-span-1">
             <img
             className="w-8 h-8 rounded-full object-cover my-auto mx-2"
                src={item.profile}
             />
             </div>
             <div className="flex flex-col col-span-3 mx-2">
               <div className="flex">
                 <div className="text-left text-blue font-semibold px-3">
                    {item.name}
                 </div>
                 <div className="text-green px-3">
                    following
                 </div>
               </div>

               <div>
                  {item.status}
               </div>
             </div>

             <div className="grid grid-cols-2 gap-2 ">
               <div className="text-green m-auto flex">
                 <AiFillLike
                    fontSize={12}
                    className="mx-1 cursor-pointer" onClick={()=>setLike(like+1)}
                 />
                 <span className='select-none'>{like}</span>
               </div>
               <div className="text-red m-auto flex"  >
                    <AiFillDislike
                        fontSize={12}
                        className="mx-1 cursor-pointer"
                        onClick={()=>setDislike(dislike+1)}
                    />
                    <span className='select-none'>{dislike}</span>
               </div>
             </div>
            </div>

           <div
           className="font-semibold ml-16 border-y-[1px] border-lightgray py-2 w-4/5"
           >
           {item.text}
           </div>

           <div
           className="font-semibold ml-16 py-2 w-4/5"
           > 
             {
                comments.map((item) => (
                   <div className="flex my-2">
                   <img
                   className="w-7 h-7 rounded-full object-cover"
                    src={item.img}
                   />
                    <div className="mx-1">
                    <span className="text-blue">{item.name}</span> {item.text}
                    </div>

                   </div> 
                ))
             }
             <div className="flex">
             <img
             className="w-6 h-6 rounded-full mr-3"
                src="https://th.bing.com/th/id/OIP.YWFSHmhVvwHHmColuR-sjAHaFj?pid=ImgDet&rs=1"
             />
             <input value={comment} onSubmit={submitComment}
             placeholder="Post a Comment"
                className="border white items-center my-auto rounded-sm px-2"
             />
             </div>
           </div>

        </div>
    </div>
        ))
    
    }
    </>
  )
}

export default Photo