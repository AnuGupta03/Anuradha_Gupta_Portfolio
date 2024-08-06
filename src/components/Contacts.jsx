import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Send } from 'lucide-react';
export function Contacts(){
    return (
        <address>
        <div id = "contactid" className="h-full w-full">
          
          <div className='bg-sky-600 text-white max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center justify-center'>
            <div className="w-full md:w-1/2 mt-10 items-center justify-center text-center">
              <h1 className='text-2xl md:text-4xl'>Contact Form</h1>
    
              <div className="flex items-center gap-2 mb-7 mt-5 ml-24">
                  <User className="h-8 w-6 opacity-70" />
                  <input className="h-8 w-96 text-black px-5" placeholder="Your Name"></input>
              </div>

              <div className="flex items-center gap-2 mb-7 mt-5 ml-24">
                  <Mail className="h-8 w-6 opacity-70" />
                  <input className="h-8 w-96 text-black px-5" placeholder="Your Email"></input>
              </div>

              <div className="flex items-center gap-2 mb-4 mt-5 ml-24">
                  <Send className="h-8 w-6 opacity-70" />
                  <input className="h-16 w-96 text-black px-5" placeholder="Your Message"></input>
              </div>    
              <button className="bg-[#ff9e1e] btn btn-secondary pt-1 pb-2 mb-6 pr-8 pl-8">Send</button>
            </div>

          </div>
        
            <div className='pr-40 pl-40 pb-10 border:black bg-sky-600'>
                <iframe className=' container mx-auto my-100  rounded-box border-[2px]'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30776078.063939493!2d60.9180044792702!3d19.676597196316774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1720445878069!5m2!1sen!2sin" width="1230" height="235"  allowFullScreenLoading="lazy" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>   
            </div>
        </div>
    
        </address>
      )
    }