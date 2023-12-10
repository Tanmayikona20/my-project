import React from 'react'

function About() {
  return (
    <div>
      <div className="  px-4 mx-7 container   flex flex-row space-x-4 items-center ">
        <div className=" shadow-xl
         m-7
         rounded-2xl  w-1/2  h-96 
         bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600
         aspect-video ">
          <img src="C:\Users\Tanmayi Kona\Desktop\about\about\public\photo-1630569267625-157f8f9d1a7e.png" className="opacity-25"></img>
         </div>
        <div className="my-7 float-right">
          <h1 class=" text-gray-900 font-bold text-3xl leading-9 mt-1 tracking-tight  px-50">
            On a mission to empower remote teams
          </h1>
          <div className="max-w-xl">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Et vitae blandit facilisi magna lacus commodo. Vitae
            sapien duis odio id et. Id blandit molestie auctor fermentum
            dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius
            vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac
            tempor et ut. Ac lorem vel integer orci. Et vitae blandit facilisi
            magna lacus commodo. Vitae sapien duis odio id et. Id blandit
            molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus
            in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.
            Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
          </div>
          <dl className="flex flex-row mt-14 row-span-4 border-opacity-60 gap-8 border-y border-gray-900 items-center px-20 ">
        <div>
          <dt className="opacity-70 text-xl" >Founded</dt>
          <dd className="font-bold text-3xl" >2021</dd>
        </div>
        <div>
          <dt className="opacity-70 text-xl">Employees</dt>
          <dd className="font-bold text-3xl">37</dd>
        </div>
        <div>
          <dt className="opacity-70 text-xl">Countries</dt>
          <dd className="font-bold text-3xl">12</dd>
        </div>
        <div>
          <dt className="opacity-70 text-xl">Raised</dt>
          <dd className="font-bold text-3xl">$25M</dd>
        </div>
      </dl>
        </div>

      </div>
      <div class="  container  ml-12 flex flex-row space-x-5 items-center">
        <div class="shadow-lg rounded-lg w-44 h-20 max-w-sm max-h-sm bg-blue-300 ascept-video"></div>
        <div class="shadow-lg rounded-lg  w-44 h-20 max-w-sm max-h-sm bg-blue-300 ascept-video"></div>
        <div class="shadow-lg rounded-lg  w-44 h-20 max-w-sm max-h-sm bg-blue-300 ascept-video"></div>
      </div>
  
    </div>
  );
}

export default About;