import { Daniel, Patrick, Kira, Jonathan, Jeanette } from './assets';
import './App.css';

function App() {
  return (
    <div className="App bg-lightgray w-100 grid lg:grid-cols-4 lg:grid-rows-2  lg:justify-center lg:align-middle lg:p-28 lg:gap-8 h-auto lg:h-[100vh]">
{/* DANIEL'S CARD */}
      <div className='bg-violet flex flex-col w-[80%] mx-auto rounded-lg purple-card my-8  shadow-xl lg:col-span-2 lg:w-[100%] lg:m-0'>
        <div className="flex z-10 mb-2 ml-8 mt-6 items-center ">
        <img className='w-8 h-8 mr-4 rounded-full border-2 border-danielring' src={Daniel} alt="Daniel Avatar"/>
        <div className="flex flex-col justify-center text-left">
        <h1 className="text-lightgray font-medium text-base ">Daniel Clifford</h1>
        <p className='text-subtext font-medium'>Verified Graduate</p> 
        </div>
        </div>
        <div className="lg:w-100"></div>
        <p className='text-white font-semibold text-left text-xl leading-[26px] w-[80%] tracking-[1.18px] ml-8 lg:w-[90%] lg:mt-2'>
  I received a job offer mid -
  
  course, and the subjects I
   learned were current, if not more so, 
  in the company I joined. I honestly feel I got every penny’s worth.
  </p>
  <p className="text-reviewtext text-left leading-[21px] w-80 tracking-wide mt-3 mb-8 ml-8 lg:w-[90%] lg:mt-4 lg:leading-[23px]">
  “ I was an EMT for many years before I joined the  bootcamp. I’ve been looking to make a 
  transition  and have heard some people who had an  amazing experience here. I signed up 
  for the free intro course and found it incredibly fun! I  enrolled shortly thereafter. 
  The next 12 weeks  was the best - and most grueling - time of my   life. Since completing 
  the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
  </p>
  </div>
{/* END OF FIRST CARD */}
{/* JONATHAN'S CARD */}
<div className=' bg-grayblue flex flex-col w-[80%] mx-auto rounded-lg mb-8 shadow-xl lg:col-span-1 lg:m-0 lg:w-[100%]'>
  <div className='flex items-center z-10 mb-2 ml-8 mt-6'>
    
      <img className='w-8 h-8 mr-4 rounded-full border-2 border-lightgray' src={Jonathan} alt="Jonathan Profile" />

    <div className='flex flex-col text-left'>
  <h1 className='text-lightgray font-medium text-base'>Jonathan Walters</h1>
 <p className='text-subtext font-medium'> Verified Graduate</p>
  </div>
  </div>
  <p className='text-white font-semibold text-left text-xl leading-[26px] w-[80%] tracking-[1.18px] ml-8 lg:w-[80%] lg:mt-2'>
  The team was very supportive and kept me motivated
  </p>
  <p className='text-reviewtext text-left leading-[21px] tracking-wide mb-8 mt-3 ml-8 w-[78%]  lg:mt-4'>
  “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
  for a big company. This was one of the best investments I’ve made in myself. ”
  </p>
  </div>
{/* END OF SECOND CARD */}
{/* JEANETTE'S CARD */}
<div className=' bg-white flex flex-col w-[80%] mx-auto rounded-lg mb-8 shadow-xl lg:row-start-2 lg:col-span-1 lg:m-0 lg:w-[100%]'>
  <div className='flex z-10 mb-2 ml-8 mt-6 items-center'>
    <img src={Jeanette} alt="Jeanette" className="w-8 h-8 mr-4 rounded-full border-2 border-lightgray" />
    <div className='flex flex-col justify-center text-left'>
      <h1 className=' text-grayblue font-medium text-base'>
  Jeanette Harmon
  </h1>
  <p className='text-grayblue opacity-50 font-medium'>
  Verified Graduate
  </p>
  </div>
  </div>
  <p className="text-darkblue font-semibold text-left text-xl leading-[26px] w-[80%] tracking-[1.18px] ml-8 lg:mt-2 lg:w-[70%]">
  An overall wonderful and rewarding experience
  </p>
  <p className="text-grayblue opacity-70 text-left leading-[21px] tracking-wide mt-3 ml-8 mb-8 w-[75%] lg:mt-4">
  “ Thank you for the wonderful experience! I now  have a job I really enjoy, and make a good living 
  while doing something I love. ”
  </p>
  </div>
{/* END OF THIRD CARD */}
{/* PATRICK'S CARD */}
<div className='bg-darkblue flex flex-col w-[80%] mx-auto rounded-lg mb-8 shadow-xl lg:row-start-2 lg:m-0 lg:col-start-2 lg:col-span-2 lg:row-span-1 lg:w-[100%]'>
  <div className="flex items-center z-10 mb-2 ml-8 mt-6">
    <img className='w-8 h-8 mr-4 rounded-full border-2 border-danielring' src={Patrick} alt="Patrick Avatar"/>
  <div className='flex flex-col justify-center text-left'>
    <h1 className=' text-white font-medium text-base'>
  Patrick Abrams
  </h1>
  <p className='text-white opacity-50 font-medium'>
  Verified Graduate
  </p>
  </div>
  </div>
  <p className="text-white font-semibold text-left text-xl leading-[26px] w-[80%] tracking-[1.18px] ml-8 lg:mt-2">
  Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
  learning from their experiences was easy.
  </p>
  <p className="text-white opacity-70 text-left leading-[21px] tracking-wide mt-3 ml-8 mb-8 w-[80%] lg:mt-4">
  “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
  gave me the confidence necessary to be able to go out in the world and present myself as a capable 
  junior developer. The standard is above the rest. You will get the personal attention you need from 
  an incredible community of smart and amazing people. ”
  </p>
  </div>
{/* END OF FOURTH CARD */}
{/* KIRA'S CARD */}
<div className=' bg-white flex flex-col w-[80%] mx-auto rounded-lg mb-8 shadow-xl lg:row-span-2 lg:m-0 lg:col-start-4 lg:w-[88%]'>
  <div className=" items-center flex z-10 mb-2 ml-8 mt-6">
    <img className="w-8 h-8 mr-4 rounded-full border-2 border-lightgray" src={Kira} alt="Kira Avatar" />
    <div className='flex flex-col justify-center text-left'>
      <h1 className=' text-grayblue font-medium text-base'>
  Kira Whittle
  </h1>
  <p className='text-grayblue opacity-50 font-medium'>
  Verified Graduate
  </p>
  </div>
  </div>
  <p className="text-grayblue font-semibold text-left text-xl leading-[26px] w-[80%] tracking-[1.18px] lg:mt-2 ml-8">
  Such a life-changing experience. Highly recommended!
  </p>
  <p className="text-grayblue opacity-70 text-left leading-[21px] tracking-wide mt-3 ml-8 mb-8 w-[75%] lg:mt-4">
  “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
  professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
  student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
  could ever have. In fact, I’ve often referred to it during interviews as an example of my development 
  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend! ”
  </p>
  </div>
    </div>
  );
}

export default App;
