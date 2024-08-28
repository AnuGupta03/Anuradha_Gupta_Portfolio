export function Projectcards({images, names, description, desc, github, golive}){
    return <div className="h-full w-full px-8 py-4">
        <div className="rounded-t-md rounded-md border-2 border-orange-500">
        <img className="hover:scale-110 w-full h-50 transition-all duration-500" width={50} src={`${images}`}/>
        <div className="bg-neutral-600 pb-5  rounded-b-md text-center text-lg font-bold text-[#ff9e1e] ">{names}
            <div className="text-white text-sm p-2">{description}</div>
            <div className="text-white text-sm p-2">{desc}</div>
        </div>
        </div>
        <div>
            <button className="text-dec border-none rounded-md p-1 mt-4 ml-16 sm:ml-12 text-white bg-[#ff9e1e]">
                <a href={github} style={{textDecoration: 'none', color: 'inherit'}}>Git Hub</a></button>
            <button className="border-none rounded-md p-1 mt-4 ml-2 text-white bg-[#ff9e1e]">
                <a href={golive} style={{textDecoration: 'none', color: 'inherit'}}>Go Live</a></button>
        </div>
        
        
    </div>
}