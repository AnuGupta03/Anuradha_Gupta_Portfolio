import { Projectcards } from "./Cards/Projectscards"
export function Projects(){
    return <div id = "projectdiv">

                <div  className="h-full py-2 w-full bg-sky-600">
                <div className="pt-10 pl-20 text-4xl font-bold text-white">Projects</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 px-20">
                    <Projectcards images="https://anugupta03.github.io/AnuradhaPortfolio/assets/img/steadofoods.jpg" alt = "FoodOrdering Website to order food from anywhere and anytime." names="STeaDoFooDS" description="SteadoFoods revolutionizes your dining experience with a user-friendly food ordering website" desc="Technology: ReactJs, Javascript, CSS, HTML, JWT Tokens" github="https://github.com/AnuGupta03/STeaDoFooDS" golive="https://s-tea-do-foo-ds.vercel.app/"/>
                    <Projectcards images="https://anugupta03.github.io/AnuradhaPortfolio/assets/img/e-booking.png" alt = "E-Booking Application Order Hotel from Anywhere, Anytime." names="E-Booking Application" description="E-Booking Application is a fully responsive home booking platform using new Technology." desc="Technology: ReactJs, Javascript, Tailwind CSS, HTML, Next JS, TypeScrit, Prisma, MongoDB" github="https://github.com/AnuGupta03/Property-Booking-App" golive="https://renting-app-one.vercel.app/"/>
                    <Projectcards images="https://cdn.pixabay.com/photo/2022/04/04/12/58/customer-support-7111206_640.png" alt="ANUTECHICAL Provide Any type of technical Services."names="ANUTECHNICAL" description="ANUTECHNICAL is a Technical Service Provide Platform in which anyone can take Technical Services" desc="Technology: ReactJs, Javascript, CSS, HTML, MongoDB" github="https://github.com/AnuGupta03/ANUTECHNICAL" golive="https://anugupta03.github.io/ANUTECHNICAL/"/>
                    {/* <Projectcards images="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" names="React JS" description="ANUTECHNICAL is a Technical Service Provide Platform in which anyone can take Technical Services" desc="Technology: ReactJs, Javascript, CSS, HTML"/> */}

                </div>
            </div>

    </div>
}