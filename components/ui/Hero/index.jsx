import NavLink from "../NavLink";
import Image from 'next/image';
import img from '../../../public/images/hero.png';

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Welcome to MediPulse, Your partner in health
                </h1>
                <p className="max-w-xl mx-auto">
                    Explore our comprehensive medical services effortlessly with our 24/7 Chat Bot, designed to assist you with detailed information and appointment scheduling.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                    >
                        Book an Appointment
                    </NavLink>
                    <a
                href="https://github.com/Dneth04/MediPulse"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-900 dark:text-black-400">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span> View on Github</span>
              </a>
                </div>
                <div className="flex justify-center">
                    <Image
                        src={img} 
                        width="300"
                        height="200"
                        className="object-cover"
                        alt="Hero Illustration"
                        loading="eager"
                        placeholder="blur"
                    />
                </div>
 <p style={{
    fontSize: "18px",                   
    lineHeight: "1.6",                  
    color: "#333",                       
    backgroundColor: "#ffff",         
    padding: "15px",                     
    borderLeft: "5px solid #00000",    
    borderRadius: "8px",                
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.6)", 
    maxWidth: "600px",                  
    margin: "20px auto"
}}>
    
    Looking for a <strong>quick</strong> and <strong>easy</strong> way to get answers? Our <strong>chatbot</strong> is ready to assist with all your <strong>hospital service</strong>, <strong>lab report</strong>, and <strong>general queries</strong>. Get the information you need <strong>instantly</strong>!
    </p>
                <div className="flex items-center justify-center">
    <ul className="text-gray-700 flex justify-center items-center space-y-6 md:space-x-6 md:space-y-0 md:text-gray-600 md:font-medium">
        <li>
            <NavLink
                href="https://medi-pulse-chatbot.vercel.app/"
                className="block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline"
            >
                Live-Chat Support
            </NavLink>
        </li>
    </ul>
</div>
            </div>
        </div>
    </section>
);

export default Hero;
