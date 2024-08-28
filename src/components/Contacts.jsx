import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Send } from 'lucide-react';
import axios from 'axios'
import { useState } from 'react';

export function Contacts(){

    // form states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); 

    // submit event
    const handleSubmit=(e)=>{
      e.preventDefault();

      const data = {
        Name:name,
        Email:email,
        Message:message
      }

      axios.post('https://sheet.best/api/sheets/f5e759e6-0e8b-4575-8830-edb7d84787d3',data).then((response)=>{
        console.log(response);
        // clearning form fields
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitted(true); //Update Submission status to true

        // Hide message after 5 seconds
        setTimeout(() =>{
          setIsSubmitted(false); //Set isSubmitted to false after 5 seconds
        }, 3000);

      });
    };

    return (
        <address style={{margin: 0, padding: 0}}>
            <div id = "contactid" className="h-full w-full">
              
              <div className='bg-sky-600 text-white w-full mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center justify-center'>
                <div className="w-full md:w-1/2 mt-10 items-center justify-center text-center">

                    <form autoComplete = "off" className='form-group' 
                    onSubmit={handleSubmit}>
                      <h1 className='text-2xl md:text-4xl'>Contact Form</h1>
            
                      <div className="flex items-center gap-2 mb-7 mt-5 ml-30 sm:ml-24">
                          <User className="h-8 w-6 opacity-70" />
                          <input type="text" name="your-name" className="h-8 w-96 text-black px-5" placeholder="Your Name"
                          onChange={(e)=>setName(e.target.value)} value={name} ></input>
                      </div>

                      <div className="flex items-center gap-2 mb-7 mt-5 ml-30 sm:ml-24">
                          <Mail className="h-8 w-6 opacity-70" />
                          <input type="text" name="your-mail" className="h-8 w-96 text-black px-5" placeholder="Your Email"
                          onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                      </div>

                      <div className="flex items-center gap-2 mb-4 mt-5 ml-30 sm:ml-24">
                          <Send className="h-8 w-6 opacity-70" />
                          <input type="text" name="your-message" className="h-16 w-96 text-black px-5" placeholder="Your Message"
                          onChange={(e)=>setMessage(e.target.value)} value={message}></input>
                      </div>

                      <div>   
                      <button type="submit" value="Submit" id='submit' className="bg-[#ff9e1e] pt-1 pb-1 mb-10 pr-8 pl-8 rounded">Send</button>
                      </div> 

                      {/* Conditionally render success message */}
                      {isSubmitted && <p className='text-white-600  mb-20 font-bold text-xl'>Your form is submitted!</p>}
                    </form>


                </div>

              </div>
            
              <div className='px-4 sm:px-10 md:px-20 lg:px-40 pb-20 border-black bg-sky-600'>
                    <iframe className='w-full h-[200px] sm:h-[260px] md:h-[260px] rounded-box border-[2px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30776078.063939493!2d60.9180044792702!3d19.676597196316774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1720445878069!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

                
            </div>
    
        </address>
      )
    }