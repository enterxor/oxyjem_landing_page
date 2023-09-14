<script setup>
import { reactive } from 'vue'

defineProps({
  msg: {
    type: String,
    required: false
  },

});

const state = reactive({isOpen: false})

function toggleMenuOpen() {
  state.isOpen = !state.isOpen
}

</script>

<template>
  <div class="text-textcolor tracking-wide bg-white dark:bg-gray-900 min-h-screen antialiased transition-colors duration-500 flex flex-col place-content-center">
    <main class="w-screen">
      <section class="bg-white dark:bg-gray-900">
        <nav  class="container mx-auto pt-8 pb-2 px-4 lg:p-6 lg:px-28 lg:flex lg:items-center lg:justify-between">
          <div class="flex items-center justify-between ">
            <div class="mr-20 whitespace-nowrap">
                  <img class="inline-block" src="@/assets/logo.svg" alt="Logo" />
                  <a class="text-xl align-middle font-semibold lg:font-bold text-gray-800 dark:text-white dark:hover:text-gray-300" href="#">Oxyjem</a>
            </div>

            <!-- Mobile menu button -->
            <div class="flex lg:hidden">
                <button @click="toggleMenuOpen(); console.log(state.isOpen)" type="button" class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400" aria-label="toggle menu">
                <svg v-if="!state.isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                </svg>

                <svg v-if="state.isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div :class="[state.isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'] " class="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-full lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent">
            <div class="flex justify-between w-full items-center">
              <div class="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 lg:gap-8 items-center">
                  <a class="text-xl font-medium transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" href="#">Home</a>
                  <a class="text-xl font-medium transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" href="#">About</a>
                  <a class="text-xl font-medium transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" href="#">Services</a>
                  <a class="text-xl font-medium transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" href="#">What we offer</a>
              </div>

              <div class="flex w-auto justify-items-end">
                <div class="flex items-center">
                  <img src="@/assets/icon13.svg" alt="">
                  <a class="text-xl font-medium transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mr-8 lg:ml-2" href="#">Eng</a>
                </div>
                <a class=" block rounded-full bg-white px-5 py-3 text-xl text-center font-medium leading-5 text-black hover:bg-gray-100 h-13 border-gray-500 border-solid border-[1px]" href="#"> Contact us </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
      
      <section class="bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4 lg:px-auto pt-12 lg:py-16 text-center">
            <div>
              <h1 class="text-[32px] leading-[42px] lg:text-6xl font-bold text-gray-800 dark:text-white">
                We Build Your <p class="text-blue-500">Cloud Infrastructure</p>
              </h1>
              <p class="mt-4 leading-5 lg:mt-6 text-base lg:text-2xl font-medium dark:text-gray-300">
                DevOps Solutions, System administration, Software development, 
                Private cloud and infrastructure provider
              </p>
              <button class="w-full lg:w-auto mt-8 lg:mt-10 rounded-full bg-blue-600 px-6 py-2.5 text-center text-sm font-medium leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0">Read more</button>
            </div>
              
            <div class="flex flex-col items-center mt-10 lg:mt-auto">
              <img class="object-cover overflow-x-visible h-[200px] lg:object-none lg:h-auto lg:max-w-fit lg:max-h-fit" src="@/assets/illustration01.svg"  alt="Team"/>
            </div>
        </div>
        <div class="container mx-auto pt-20 px-4 lg:px-0">
            <h1 class="text-center text-3xl lg:text-6xl font-bold text-gray-800 dark:text-white ">
              Our <div class="text-blue-500 inline">team</div>
            </h1>

            <p class="mt-4 tracking-wider text-base lg:text-xl font-medium leading-5 lg:leading-normal text-center dark:text-gray-300">Oxyjem is a strong consultancy and professional DevOps services provider that helps organizations worldwide turn innovative technologies into products with a sustainable competitive advantage. We offer strategy consulting, full-cycle project support, hands-on implementation, and management. <br>
            <br> Our team of experienced DevOps professionals specializes in using technologies such as Terraform, Kubernetes, and Docker to help our clients streamline their development workflows, reduce operational costs, and accelerate time to market. <br>
            <br> Whether you need help with cloud infrastructure, containerization, or automating your deployment pipelines, we have the expertise and experience to deliver customized solutions that meet your specific needs.
            </p>

          <img class="h-auto w-full rounded-xl object-cover lg:w-4/5 lg:m-auto" src="@/assets/illustration02.svg"  alt="Team"/>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900 mt-20">
      <div class="container mx-auto px-4 lg:px-0 lg:py-10">
          <div>
            <h1 class="text-center text-3xl lg:text-6xl font-bold leading-10 lg:leading-[72px] text-gray-800 dark:text-white ">
              What we <div class="text-blue-500 inline">do</div>
            </h1>
            <p class="mt-4 text-center dark:text-gray-300 font-medium leading-normal text-base lg:text-xl">
              We enhance your operational processes and get stability, durability, and <br>
              availability for the core operations with pure-play cloud solutions and tools.
            </p>
          </div>

          <div class="mt-10 lg:mt-20 flex flex-col lg:flex-row items-center lg:gap-8">
            <div class="">
              <img class="max-w-screen lg:max-w-none" src="@/assets/illustration03.svg" alt="">
            </div>
            <div class="">
              <h1 class="text-center lg:text-left text-3xl lg:text-5xl leading-relaxed font-bold text-gray-800 dark:text-white">DevOps <div class="inline text-blue-500">solutions</div></h1>
              <p class="mt-2 lg:mt-4 font-medium leading-[20px] text-base lg:text-xl text-center lg:text-left ">
                Looking to save time and money with DevOps practices 
                and services like agility, automation, continuity, and governance? Turn to 
                Oxyjem to implement DevOps best practices, including integration 
                with cloud, continuous integration and continuous delivery (CI/CD), 
                GitOps, containerization, as well as a host of other services. 
                Automate software development life cycle processes like 
                development, testing, deployment with us
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row items-center lg:gap-8">
            <div class="">
              <img class="max-w-screen lg:max-w-none" src="@/assets/illustration04.svg" alt="">
            </div>
            <div class="lg:-order-1">
              <h1 class="text-center tracking-wider lg:text-left text-3xl lg:text-5xl lg:leading-relaxed font-bold text-gray-800 dark:text-white">System <div class="inline text-blue-500">administration</div></h1>
              <p class="mt-2 lg:mt-4 font-medium leading-[20px] text-base lg:text-xl text-center lg:text-left ">
                System Administration services include system and 
                operating software configuration, monitoring, 
                management, patching and troubleshooting and 
                responding to incidents while ensuring the desired level
                of service uptime at all times. We guarantee enhanced
                standards, processes and measures with guaranteed SLAs
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row items-center lg:gap-8">
            <div class="">
              <img class="max-w-screen lg:max-w-none" src="@/assets/illustration05.svg" alt="">
            </div>
            <div class="">
              <h1 class="text-center lg:text-left text-3xl lg:text-5xl leading-relaxed font-bold text-gray-800 dark:text-white">Software <div class="inline text-blue-500">development</div></h1>
              <p class="mt-2 lg:mt-4 font-medium leading-[20px] text-base lg:text-xl text-center lg:text-left ">
                We architect and engineer scalable and high-performing software 
                solutions to meet the business challenges of our clients. Using our 
                tech expertise and cross-industry experience, we evolve digital 
                transformation into digital acceleration. Our ultimate goal is to 
                create lasting value throughout the entire digital transformation journey
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row items-center lg:gap-8">
            <div class="">
              <img class="max-w-screen lg:max-w-none" src="@/assets/illustration06.svg" alt="">
            </div>
            <div class="lg:-order-1">
              <h1 class="text-center lg:text-left text-3xl lg:text-5xl leading-relaxed font-bold text-gray-800 dark:text-white">Provate <div class="inline text-blue-500">clouds</div></h1>
              <p class="mt-2 lg:mt-4 font-medium leading-[20px] text-base lg:text-xl text-center lg:text-left ">
                We infuse engineering excellence in the design 
                and implementation of cloud applications - 
                across all cloud providers, third-party 
                ecosystems and open-source technologies - to 
                solve your unique challenges
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row items-center lg:gap-8">
            <div class="">
              <img class="max-w-screen lg:max-w-none" src="@/assets/illustration07.svg" alt="">
            </div>
            <div class="">
              <h1 class="text-center lg:text-left text-3xl lg:text-5xl leading-relaxed font-bold text-gray-800 dark:text-white">Infrastructure <div class="inline text-blue-500">provider</div></h1>
              <p class="mt-2 lg:mt-4 font-medium leading-[20px] text-base lg:text-xl text-center lg:text-left ">
                We build and support the infrastructure, create a developer-friendly 
                environment, and implement DevOps best practices. Our team will 
                create the infrastructure and migrate services there. We build all the 
                necessary environments. Working closely with your team, we adapt 
                your application to get all the benefits
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row items-center lg:gap-8">
            <div class="">
              <img class="max-w-screen lg:max-w-none" src="@/assets/illustration08.svg" alt="">
            </div>
            <div class="lg:-order-1">
              <h1 class="text-center lg:text-left text-3xl lg:text-5xl leading-relaxed font-bold text-gray-800 dark:text-white ">Design <div class="inline text-blue-500">everything</div></h1>
              <p class="mt-2 lg:mt-4 font-medium leading-[20px] text-base lg:text-xl text-center lg:text-left ">
                We design landing pages, websites, internal systems, CRM, BPM, 
                personal accounts and 3D. Our team of professionals possesses a 
                deep understanding of user experience and interface design. Our 
                main goal is to provide your users with a memorable and effective 
                experience that supports the growth of your business. We carefully 
                study your needs and goals to create a custom design that reflects 
                your uniqueness and helps you stand out in the market.
              </p>
            </div>
          </div>
      </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
      <div class="container mx-auto px-6 py-10">
          <div class="text-center">
            <h1 class="text-center text-3xl lg:text-6xl  font-bold text-gray-800 dark:text-white ">
              What we <div class="text-blue-500 inline">offer</div>
            </h1>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3 justify-center">
            <div class="text-center ">
                <img class="inline" src="@/assets/icon1.svg" alt="" />
                <h1 class="text-center tracking-normal lg:mt-6 text-2xl lg:text-3xl leading-10 font-bold text-gray-800 dark:text-white">DevOps <br class="invisible lg:visible"> solutions</h1>
            </div>
            <div class="text-center">
                <img class="inline" src="@/assets/icon2.svg" alt="" />
                <h1 class="text-center tracking-normal lg:mt-6 text-2xl lg:text-3xl leading-10 font-bold text-gray-800 dark:text-white">NetOps</h1>
            </div>
            <div class="text-center">
                <img class="inline" src="@/assets/icon3.svg" alt="" />
                <h1 class="text-center tracking-normal lg:mt-6 text-2xl lg:text-3xl leading-10 font-bold text-gray-800 dark:text-white">System <br class="invisible lg:visible" >Administration</h1>
            </div>
            <div class="text-center">
                <img class="inline" src="@/assets/icon4.svg" alt="" />
                <h1 class="text-center tracking-normal lg:mt-6 text-2xl lg:text-3xl leading-10 font-bold text-gray-800 dark:text-white">Software <br class="invisible lg:visible">Development</h1>
            </div>
            <div class="text-center">
                <img class="inline" src="@/assets/icon5.svg" alt="" />
                <h1 class="text-center tracking-normal lg:mt-6 text-2xl lg:text-3xl leading-10 font-bold text-gray-800 dark:text-white">Private clouds</h1>
            </div>
            <div class="text-center">
                <img class="inline" src="@/assets/icon6.svg" alt="" />
                <h1 class="text-center tracking-normal lg:mt-6 text-2xl lg:text-3xl leading-10 font-bold text-gray-800 dark:text-white">Infrastructure <br class="invisible lg:visible">provider</h1>
            </div>
          </div>
      </div>

    <div class="bg-white dark:bg-gray-900 mb-20">
      <div class="container mx-auto px-6 lg:py-8">
          <div class="rounded-[1.875rem] h-[144px] bg-blue-50/50 dark:bg-slate-50/10 text-center align-middle flex justify-center py-8">
            <p class="text-3xl font-bold text-gray-800 dark:text-white">Aaaaand 
              <img class='inline mx-8' src="@/assets/icon7.svg" alt="" />
            </p>
          </div>
      </div>
    </div>
    
    <div class="bg-white dark:bg-gray-900">
      <div class="container mx-auto px-6 lg:py-10 mb-20">
          <div class="rounded-[1.875rem] h-[224px] lg:p-14 bg-rocket bg-no-repeat bg-cover flex flex-col lg:flex-row justify-around items-center">
            <div class="min-w-fit text-white text-2xl lg:text-5xl font-semibold lg:font-bold text-center lg:text-left">Looking to collaborate?<br> Let’s get in touch!</div>
            <div class="flex justify-center lg:justify-end items-center w-full px-4 lg:px-0">
              <a class=" block rounded-full w-full lg:w-auto bg-white px-5 py-3 text-xl text-center  font-semibold capitalize leading-5 text-black hover:bg-gray-500 h-13" href="#"> Let's go! </a>
            </div>
          </div>
      </div>
    </div>
    </section>

  </main>
  <footer class="bg-black text-white dark:bg-gray-900 w-screen relative bottom-0 left-0">
    <div class="container mx-auto px-6 py-8 lg:ty-20">
      <div class="flex flex-col lg:flex-row lg:gap-8 mb-14">
        
        <div class="basis-1/4 order-1">
          <div class="flex mb-8 items-center">
                    <img src="@/assets/logo2.svg" alt="Logo" >
                    <a class="ml-2 text-xl font-semibold text-white dark:text-white" href="#">Oxyjem            </a>
          </div>
          <div class="lg:w-[280px] text-base font-normal leading-6">
            Oxyjem is a multi-cloud consulting company, delivering innovative DevOps solutions, System Administration, Software Development, Private Clouds and Infrastructure provider
          </div>
        </div>

        <div class="basis-1/4 order-3 lg:order-2 pt-8 lg:pt-0">
          <div class="mb-4 lg:mb-8 leading-relaxed font-medium text-xl">Contacts</div>
          <ul class="flex flex-col gap-2 md:flex-row md:justify-between lg:justify-normal lg:flex-col">
            <li><img class="inline" src="@/assets/icon10.svg"> Georgia, Tbilisi, 12 str.</li>
            <li><img class="inline" src="@/assets/icon11.svg"> hello@oxyjem.com</li>
            <li><img class="inline" src="@/assets/icon12.svg"> +995 555 55 55</li>
          </ul>
        </div>

        <div class="basis-1/4 order-2 lg:order-3 pt-8 md:pt-0">
          <div class="lg:mb-8 leading-relaxed font-medium text-xl invisible lg:visible">Company</div>
          <ul class="flex flex-col gap-3 text-xl md:flex-row md:gap-8 lg:block lg:text-base">
            <li>About</li>
            <li>Services</li>
            <li>What we offer</li>
          </ul>
        </div>

        <div class="basis-1/4 order-4 pt-8 lg:pt-0">
          <div class="mb-8 leading-relaxed font-medium text-xl">
            Subscribe for updates
          </div>
          <div class="md:flex md:flex-row md:gap-10 md:items-start lg:block">
            <div class="mb-8 ">
              <div class="flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
                <div class="w-full">
                    <input type="email" class="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                        placeholder="E-mail">
                </div>
                <div>
                    <button type="submit" class="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="14" viewBox="0 0 23 14" fill="none">
                        <g clip-path="url(#clip0_208_4220)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6916 0.989193L22.1009 6.39856C22.4329 6.7305 22.4329 7.26869 22.1009 7.60064L16.6916 13.01C16.3596 13.342 15.8214 13.342 15.4895 13.01C15.1576 12.6781 15.1576 12.1399 15.4895 11.808L19.4478 7.8496H1.4999C1.03046 7.8496 0.649902 7.46904 0.649902 6.9996C0.649902 6.53016 1.03046 6.1496 1.4999 6.1496H19.4478L15.4895 2.19127C15.1575 1.85933 15.1575 1.32114 15.4895 0.989193C15.8214 0.657248 16.3596 0.657248 16.6916 0.989193Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_208_4220">
                        <rect width="22" height="14" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </button>
                </div>
              </div>

            </div>
            <div class="flex flex-row gap-4 md:mt-1">
              <div>
                <img src="@/assets/icon8.svg" alt="" srcset=""/>
              </div>
              <div>
                <img src="@/assets/icon9.svg" alt="" srcset=""/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="bg-gray-600 mb-3"/>

      <div class="flex flex-col lg:flex-row justify-between p-4 font-normal tracking-tight text-sm lg:text-base gap-4">
        <div>Copyright © 2023. Oxyjem. All rights reserved</div>
        <div class="flex flex-row gap-4 flex-grow">
          <div class="underline">
            Privacy Policy
          </div>
          <div class="underline" >
            Terms of Use
          </div>
        </div>
        <div class="mt-4">
          Created by
          <div class="bg-blue-500 rounded-md inline p-3 whitespace-nowrap">Mihail Nezhnik</div>
        </div>
      </div>
    </div>
  </footer>
</div>
</template>

<style scoped>
</style>
