import { useState } from 'react';
import React from 'react'  
function App ()  { 
 const [zf,setzf]=useState();
  var P=2000;
  var T=640;
  var ppc=663.3;
  var tpc=374.1;

 
function calc(){

  var ppr= P/ppc;
  var tpr =T/tpc;
  var t= 1/tpr;
  var yk=0.001,yk1;


 var d= 2.18+2.82*t;
  function pre2(y)
  {
    var a=0.06125*t*Math.exp((-1.2)*(1-t)**2);
    var b= t*(14.76-(9.76*t)+(4.58*(t**2)));
    var c =t*(90.7-(242.2*t)+(42.4*(t**2)));
 
    var f=(-a*ppr)+((y+y**2+y**3-y**4)/(1-y)**3)-b*(y**2)+ (c*(y**d))
return f;
  }


  function pre3(y)
  {

    var df =((1+4*y+4*(y**2)-4*(y**3)+y**4)/((1-y)**4))-((29.52*t-19.52*(t**2)+9.16*(t**3))*y) +y**(d)*d*(90.7*t-242.2*(t**2)+42.4*(t**3))
return df;
  }
var k=0
  while( k<100)
  {
    console.log(yk);
    yk1=yk-(pre2(yk)/pre3(yk));
    k=k+1;
    if(yk===yk1)
    {
      alert(yk);
      break;
    }

yk=yk1;
  }
var  z=(0.06125*ppr*t*Math.exp(-1.2*(1-t)**2))/yk
 alert(z);
 setzf(z.toPrecision(5));
return z;
}



    return (  
     <section className=''>


<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
    
    <div class="lg:flex-grow md:w-1/2 m-2 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
   Z factor Calculator 
      </h1>
      <p class="mb-8 text-left">The Z factor is estimated using the Hall Yarborough correlation. This correlation has the highest accuracy according to the work done by Lateef in comparison to the other correlation</p>
      <div className='grid grid-cols-2'>
        
      
<span className='text-left'>Pressure</span>
<input  onChange={(e)=>{P=e.target.value}} className='w-full mb-2'/>

<span  className='text-left'>Temperature</span>
<input  onChange={(e)=>{T=e.target.value}}  className='w-full mb-2'/>
    

<span  className='text-left'>Pseudo Critical Pressure</span>
<input  onChange={(e)=>{ppc=e.target.value}}  className='w-full mb-2'/>

<span  className='text-left'>Pseudo Critical Temperature</span>

<input  onChange={(e)=>{tpc=e.target.value}}  className='w-full mb-2'/>

    
        </div>
      {
  zf&& <div className='grid grid-cols-2'> <span className='my-9 text-semibold text-black text-2xl '> Z-Factor =</span>
  <div className='  my-2 bg-white border bg-gray-100 border-gray-300 rounded-2xl drop-shadow-xl p-8'>
   
      <span className='text-2xl text-black text-semibold'> {zf}</span>
  </div></div>
  
}
      <div class="grid grid-cols-2 my-4">
        <button onClick={()=>{calc()}} class=" justify-start inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Calculate</button>

      </div>

    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://slideplayer.com/slide/13683436/84/images/4/Gas+as+compressibility+factor+%28direct+calculation%29.jpg"/>
    </div>
  </div>
</section>
{/* 
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
            <div class="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
            <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <a class="text-green-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section> */}
     </section> 
    )  
  }  
  
export default App  