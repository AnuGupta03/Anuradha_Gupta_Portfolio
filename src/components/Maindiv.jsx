import React from 'react';
import { TypeAnimation } from 'react-type-animation';
export function Maindiv(){
    return <div className="h-screen flex">
        
                <div className="h-full w-2/4 pl-10  bg-sky-600 text-white">
                    <div className="p-6 mt-28  my-12 font-bold text-6xl">Hello, I'm
                        <div className=" bg-sky-600 pt-5 font-bold ">

                        <TypeAnimation
                                sequence={[
                                    'Anuradha Gupta',
                                    1000,
                                    'FrontEnd Developer',
                                    1000,
                                    'Web developer',
                                    1000,
                                    'ReactJS Developer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block', color: "#ffcd67" }}
                                repeat={Infinity}
                                />
                        </div>
                    </div>
                    <div className='font-bold my-[-60px] p-7 text-xl'>Transforming ideas into seamless digital experiences with MERN Stack magic</div>
                        <div className='m-8 mt-20 h-12 w-36 font-bold p-3 border-2 border-[#ffcd67] text-l text-center rounded-2xl  hover:bg-[#ff9e1e]'>
                                    <a href="https://github.com/AnuGupta03/MyCV/blob/main/Anuradha_Resume.pdf">Download CV</a>
                        </div>
                </div>

                <div className="w-2/4 h-full bg-sky-600 flex justify-center items-center">
                    <div className="border-[30px] text-white w-86 h-96 bg-whitey rounded-full overflow-hidden">
                        <img src="https://nextjs-portfolio-mu-tawny.vercel.app/_next/image?url=https%3A%2F%2Fsbinnovations.in%2Fimages%2Fweb.gif&w=384&q=75" alt="photo" className="w-full h-full object-cover"/>
                    </div>
                </div>
        </div>    
}
