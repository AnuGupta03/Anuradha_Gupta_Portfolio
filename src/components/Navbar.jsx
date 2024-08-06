export function Navbar(){
    return <div id="Homeid">
        <div className="shadow-md fixed top-0 z-50 left-0 h-[10%] w-full bg-sky-600 text-white hover:shadow-lg hover:shadow-[#ffcd67] transition-all duration-500">
            <div className="flex items-center justify-between h-full">   
                <h1 className="ml-36 font-bold text-xl">Anuradha Gupta</h1>             
                 <ul className="flex space-x-10 mr-20 font-black">
                    <li className="mx-10 my-10 font-black">
                        <a href="#Homeid">Home</a>
                    </li>
                    <li className="mx-10 my-10 font-black">
                        <a href="#Aboutid">About</a>
                    </li>
                    <li className="mx-10 my-10 font-black">
                        <a href="#projectdiv">Projects</a>
                    </li>
                    <li className="mx-10 my-10 font-black">
                        <a href="#contactid">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}


