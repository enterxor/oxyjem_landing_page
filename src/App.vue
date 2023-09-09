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
  <main class="">
    <section class="bg-white dark:bg-gray-900">
    <nav  class="container mx-auto p-6 px-[112px] lg:flex lg:items-center lg:justify-between">
        <div class="flex items-center justify-between ">
        <div class="flex lg:mr-[80px]">
              <img src="@/assets/logo.svg" alt="Logo" >
              <a class="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl" href="#">Oxyjem            </a>
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
            <div class="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 items-center">
                <a class="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8" href="#">Home</a>
                <a class="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8" href="#">About</a>
                <a class="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8" href="#">Services</a>
                <a class="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8" href="#">What we offer</a>
            </div>

            <div class="flex w-auto justify-items-end">
              <div class="flex items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="18" rx="2" fill="#BAD2E8"/>
                <path d="M5 6.8H11.3636M9.54545 5V6.8C9.54545 10.7762 7.51 14 5 14M5.90909 10.4C5.90909 12.3296 8.59273 13.9172 12 14" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="14" y="14" width="18" height="18" rx="2" fill="#D2E3F3"/>
                <path d="M19 27L23 18L27 27M26.1 25H19.9" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28.35 12C28.35 12.359 28.641 12.65 29 12.65C29.359 12.65 29.65 12.359 29.65 12H28.35ZM19.5404 5.54038C19.2865 5.79422 19.2865 6.20578 19.5404 6.45962L23.677 10.5962C23.9308 10.85 24.3424 10.85 24.5962 10.5962C24.85 10.3424 24.85 9.9308 24.5962 9.67696L20.9192 6L24.5962 2.32304C24.85 2.0692 24.85 1.65765 24.5962 1.40381C24.3424 1.14997 23.9308 1.14997 23.677 1.40381L19.5404 5.54038ZM29.65 12V8H28.35V12H29.65ZM27 5.35L20 5.35V6.65L27 6.65V5.35ZM29.65 8C29.65 6.53645 28.4636 5.35 27 5.35V6.65C27.7456 6.65 28.35 7.25442 28.35 8H29.65Z" fill="black"/>
                <path d="M3.65 20C3.65 19.641 3.35898 19.35 3 19.35C2.64102 19.35 2.35 19.641 2.35 20H3.65ZM12.4596 26.4596C12.7135 26.2058 12.7135 25.7942 12.4596 25.5404L8.32304 21.4038C8.0692 21.15 7.65765 21.15 7.40381 21.4038C7.14997 21.6576 7.14997 22.0692 7.40381 22.323L11.0808 26L7.40381 29.677C7.14997 29.9308 7.14997 30.3424 7.40381 30.5962C7.65765 30.85 8.0692 30.85 8.32304 30.5962L12.4596 26.4596ZM2.35 20V24H3.65V20H2.35ZM5 26.65H12V25.35H5V26.65ZM2.35 24C2.35 25.4636 3.53645 26.65 5 26.65V25.35C4.25442 25.35 3.65 24.7456 3.65 24H2.35Z" fill="black"/>
                <path d="M48.0098 15.04H55.2098V16.74H48.0098V15.04ZM48.1898 21.26H56.3498V23H46.1898V9H56.0698V10.74H48.1898V21.26ZM64.9683 12.3C65.8349 12.3 66.5949 12.4667 67.2483 12.8C67.9149 13.1333 68.4349 13.64 68.8083 14.32C69.1816 15 69.3683 15.86 69.3683 16.9V23H67.4483V17.12C67.4483 16.0933 67.1949 15.32 66.6883 14.8C66.1949 14.28 65.4949 14.02 64.5883 14.02C63.9083 14.02 63.3149 14.1533 62.8083 14.42C62.3016 14.6867 61.9083 15.08 61.6283 15.6C61.3616 16.12 61.2283 16.7667 61.2283 17.54V23H59.3083V12.4H61.1483V15.26L60.8483 14.5C61.1949 13.8067 61.7283 13.2667 62.4483 12.88C63.1683 12.4933 64.0083 12.3 64.9683 12.3ZM77.5616 27C76.5882 27 75.6416 26.86 74.7216 26.58C73.8149 26.3133 73.0749 25.9267 72.5016 25.42L73.4216 23.94C73.9149 24.3667 74.5216 24.7 75.2416 24.94C75.9616 25.1933 76.7149 25.32 77.5016 25.32C78.7549 25.32 79.6749 25.0267 80.2616 24.44C80.8482 23.8533 81.1416 22.96 81.1416 21.76V19.52L81.3416 17.42L81.2416 15.3V12.4H83.0616V21.56C83.0616 23.4267 82.5949 24.8 81.6616 25.68C80.7282 26.56 79.3616 27 77.5616 27ZM77.3216 22.56C76.2949 22.56 75.3749 22.3467 74.5616 21.92C73.7616 21.48 73.1216 20.8733 72.6416 20.1C72.1749 19.3267 71.9416 18.4333 71.9416 17.42C71.9416 16.3933 72.1749 15.5 72.6416 14.74C73.1216 13.9667 73.7616 13.3667 74.5616 12.94C75.3749 12.5133 76.2949 12.3 77.3216 12.3C78.2282 12.3 79.0549 12.4867 79.8016 12.86C80.5482 13.22 81.1416 13.78 81.5816 14.54C82.0349 15.3 82.2616 16.26 82.2616 17.42C82.2616 18.5667 82.0349 19.52 81.5816 20.28C81.1416 21.04 80.5482 21.6133 79.8016 22C79.0549 22.3733 78.2282 22.56 77.3216 22.56ZM77.5416 20.88C78.2482 20.88 78.8749 20.7333 79.4216 20.44C79.9682 20.1467 80.3949 19.74 80.7016 19.22C81.0216 18.7 81.1816 18.1 81.1816 17.42C81.1816 16.74 81.0216 16.14 80.7016 15.62C80.3949 15.1 79.9682 14.7 79.4216 14.42C78.8749 14.1267 78.2482 13.98 77.5416 13.98C76.8349 13.98 76.2016 14.1267 75.6416 14.42C75.0949 14.7 74.6616 15.1 74.3416 15.62C74.0349 16.14 73.8816 16.74 73.8816 17.42C73.8816 18.1 74.0349 18.7 74.3416 19.22C74.6616 19.74 75.0949 20.1467 75.6416 20.44C76.2016 20.7333 76.8349 20.88 77.5416 20.88Z" fill="#11111B"/>
                </svg>
                <a class="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mr-8 lg:ml-2" href="#">Eng</a>

              </div>
              <a class=" mt-4 block rounded-lg bg-blue-600 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-blue-500 lg:mt-0 lg:w-auto" href="#"> Contact us </a>
            </div>
          </div>
        </div>
    </nav>

    <div class="container mx-auto px-6 py-16 text-center">
        <div class="mx-auto max-w-lg">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">We Build Your</h1>
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl"> <p class="text-blue-500">Cloud Infrastructure</p></h1>
        <p class="mt-6 text-gray-500 dark:text-gray-300">DevOps Solutions, System administration, Software development, DevOps Solutions, System administration, Software development, Private cloud and infrastructure providerPrivate cloud and infrastructure provider</p>
        <button class="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">Read more</button>
<!--        <p class="mt-3 text-sm text-gray-400">No credit card required</p>-->
        </div>

        <div class="mt-10 flex justify-center">
          

        <img class="h-96 w-full rounded-xl object-cover lg:w-4/5" src="@/assets/illustration01.svg"  alt="Team"/>
        </div>
    </div>
    </section>

    <section class="bg-white dark:bg-gray-900">
    <div class="container mx-auto px-32 py-10">
        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl ">Our <div class="text-blue-500 inline">team</div></h1>

        <p class="mt-4 text-center text-gray-500 font-medium dark:text-gray-300">Oxyjem is a strong consultancy and professional DevOps services provider that helps organizations worldwide turn innovative technologies into products with a sustainable competitive advantage. We offer strategy consulting, full-cycle project support, hands-on implementation, and management. <br>
Our team of experienced DevOps professionals specializes in using technologies such as Terraform, Kubernetes, and Docker to help our clients streamline their development workflows, reduce operational costs, and accelerate time to market. <br>
Whether you need help with cloud infrastructure, containerization, or automating your deployment pipelines, we have the expertise and experience to deliver customized solutions that meet your specific needs.</p>

       <img class="h-auto w-full rounded-xl object-cover lg:w-4/5 lg:m-auto" src="@/assets/illustration02.svg"  alt="Team"/>
<!--        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">-->
<!--        <div>-->
<!--            <img class="h-96 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80" alt="" />-->
<!--            <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Best website collections</h2>-->
<!--            <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">Website</p>-->
<!--        </div>-->

<!--        <div>-->
<!--            <img class="h-96 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />-->
<!--            <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Block of Ui kit collections</h2>-->
<!--            <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">Ui kit</p>-->
<!--        </div>-->

<!--        <div>-->
<!--            <img class="h-96 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />-->
<!--            <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Ton’s of mobile mockup</h2>-->
<!--            <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">Mockups</p>-->
<!--        </div>-->
<!--        </div>-->
    </div>
    </section>
    <section class="bg-white dark:bg-gray-900">
    <div class="container mx-auto px-32 py-10">
        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl ">What we <div class="text-blue-500 inline">do</div></h1>

        <p class="mt-4 text-center text-gray-500 dark:text-gray-300 lg:w-4/6 lg:m-auto">We enhance your operational processes and get stability, durability, and availability for the core operations with pure-play cloud solutions and tools.</p>

        <div class="flex mt-20">
          <div class="flex">
            <div class="flex w-5/12 items-center justify-center">
              <img class="h-auto w-max" src="@/assets/illustration03.svg" alt="">
            </div>
            <div class="w-7/12 flex flex-col items-left justify-center">
              <h1 class="text-left text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">DevOps <div class="inline text-blue-500">solutions</div></h1>
              <p>Looking to save time and money with DevOps practices and services like agility, automation, continuity, and governance? Turn to Oxyjem to implement DevOps best practices, including integration with cloud, continuous integration and continuous delivery (CI/CD), GitOps, containerization, as well as a host of other services. Automate software development life cycle processes like development, testing, deployment with us</p>
            </div>
          </div>
        </div>
        <div class="flex m-auto">
          <div class="w-7/12 flex flex-col items-left justify-center">
            <h1 class="text-left text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">System <div class="inline text-blue-500">administration</div></h1>
            <p>System Administration services include system and operating software configuration, monitoring, management, patching and troubleshooting and responding to incidents while ensuring the desired level of service uptime at all times. We guarantee enhanced standards, processes and measures with guaranteed SLAs</p>
          </div>

          <div class="flex w-5/12 items-center justify-center">
            <img class="h-auto w-max" src="@/assets/illustration04.svg" alt="">
          </div>
        </div>
        <div class="flex m-auto">
          <div class="flex">
            <div class="flex w-5/12 items-center justify-center">
              <img class="h-auto w-max" src="@/assets/illustration05.svg" alt="">
            </div>
            <div class="w-7/12 flex flex-col items-left justify-center">
              <h1 class="text-left text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Software <div class="inline text-blue-500">development</div></h1>
              <p>We architect and engineer scalable and high-performing software solutions to meet the business challenges of our clients. Using our tech expertise and cross-industry experience, we evolve digital transformation into digital acceleration. Our ultimate goal is to create lasting value throughout the entire digital transformation journey</p>
            </div>
          </div>
        </div>
        <div class="flex m-auto">
          <div class="w-7/12 flex flex-col items-left justify-center">
            <h1 class="text-left text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Provate <div class="inline text-blue-500">clouds</div></h1>
            <p>We infuse engineering excellence in the design and implementation of cloud applications - across all cloud providers, third-party ecosystems and open-source technologies - to solve your unique challenges</p>
          </div>

          <div class="flex w-5/12 items-center justify-center">
            <img class="h-auto w-max" src="@/assets/illustration06.svg" alt="">
          </div>
        </div>
        <div class="flex m-auto">
          <div class="flex">
            <div class="flex w-5/12 items-center justify-center">
              <img class="h-auto w-max" src="@/assets/illustration07.svg" alt="">
            </div>
            <div class="w-7/12 flex flex-col items-left justify-center">
              <h1 class="text-left text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Infrastructure <div class="inline text-blue-500">provider</div></h1>
              <p>We build and support the infrastructure, create a developer-friendly environment, and implement DevOps best practices. Our team will create the infrastructure and migrate services there. We build all the necessary environments. Working closely with your team, we adapt your application to get all the benefits</p>
            </div>
          </div>
        </div>
      <div class="flex m-auto">
          <div class="w-7/12 flex flex-col items-left justify-center">
            <h1 class="text-left text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Design <div class="inline text-blue-500">everything</div></h1>
            <p>We design landing pages, websites, internal systems, CRM, BPM, personal accounts and 3D. Our team of professionals possesses a deep understanding of user experience and interface design. Our main goal is to provide your users with a memorable and effective experience that supports the growth of your business. We carefully study your needs and goals to create a custom design that reflects your uniqueness and helps you stand out in the market.</p>
          </div>

          <div class="flex w-5/12 items-center justify-center">
            <img class="h-auto w-max" src="@/assets/illustration06.svg" alt="">
          </div>
        </div>
    </div>
    </section>

    <section class="bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 py-10">
        <div class="text-center">
        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl ">What we <div class="text-blue-500 inline">offer</div></h1>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        <div class="m-auto">
            <div class="relative">
            <img class="h-32 w-auto rounded-lg object-cover object-center lg:h-32" src="@/assets/icon1.svg" alt="" />

            </div>
            <h1 class="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">DevOps solutions</h1>
        </div>
        <div class="m-auto">
            <div class="relative">
            <img class="h-32 w-auto rounded-lg object-cover object-center lg:h-32" src="@/assets/icon2.svg" alt="" />

            </div>
            <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">NetOps</h1>
        </div>
        <div class="m-auto">
            <div class="relative">
            <img class="h-32 w-auto rounded-lg object-cover object-center lg:h-32" src="@/assets/icon3.svg" alt="" />

            </div>
            <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">System Administration</h1>
        </div>
        <div class="m-auto">
            <div class="relative">
            <img class="h-32 w-auto rounded-lg object-cover object-center lg:h-32" src="@/assets/icon4.svg" alt="" />

            </div>
            <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">Software Development</h1>
        </div>
                <div class="m-auto">
            <div class="relative">
            <img class="h-32 w-auto rounded-lg object-cover object-center lg:h-32" src="@/assets/icon5.svg" alt="" />

            </div>
            <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">Private clouds</h1>
        </div>
        <div class="m-auto">
            <div class="relative">
            <img class="h-32 w-auto rounded-lg object-cover object-center lg:h-32" src="@/assets/icon6.svg" alt="" />

            </div>
            <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">Infrastructure provider</h1>
        </div>
        </div>
    </div>

  <div class="bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 py-8">
        <div class="rounded-[1.875rem] h-[144px] bg-blue-50/50 text-center align-middle flex justify-center py-8">
          <p class="text-3xl font-bold text-gray-800 dark:text-white">Aaaaand 
            <img class='inline mx-8' src="@/assets/icon7.svg" alt="" />
          </p>
        </div>
    </div>
  </div>
  
  <div class="bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 py-8">
        <div class="rounded-[1.875rem] h-[224px] p-14 bg-rocket bg-no-repeat bg-cover flex">
          <div class="min-w-fit text-white text-5xl font-bold">Looking to collaborate?<br> Let’s get in touch!</div>
          <div class="flex justify-end items-center w-full">
            <a class=" block rounded-full bg-white px-5 py-3 text-xl text-center  font-semibold capitalize leading-5 text-black hover:bg-gray-500 h-13" href="#"> Let's go!` </a>
          </div>
        </div>
    </div>
  </div>
  </section>

</main>
    <footer class="bg-black dark:bg-gray-900 w-screen relative bottom-0 left-0">
    <div class="container mx-auto px-6 py-12">
        <div class="md:-mx-3 md:flex md:items-center md:justify-between">
        <h1 class="text-3xl font-semibold tracking-tight text-white dark:text-gray-800 md:mx-3 xl:text-4xl">Subscribe our newsletter to get update.</h1>

        <div class="mt-6 shrink-0 md:mx-3 md:mt-0 md:w-auto">
            <a href="#" class="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2 text-sm text-white duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <span class="mx-2">Sign Up Now</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-2 h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </a>
        </div>
        </div>

        <hr class="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
            <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

            <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Home</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Who We Are</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Our Philosophy</a>
            </div>
        </div>

        <div>
            <p class="font-semibold text-gray-800 dark:text-white">Industries</p>

            <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Retail & E-Commerce</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Information Technology</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Finance & Insurance</a>
            </div>
        </div>

        <div>
            <p class="font-semibold text-gray-800 dark:text-white">Services</p>

            <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Translation</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Proofreading & Editing</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Content Creation</a>
            </div>
        </div>

        <div>
            <p class="font-semibold text-gray-800 dark:text-white">Contact Us</p>

            <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">+880 768 473 4978</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">info@merakiui.com</a>
            </div>
        </div>
        </div>

        <hr class="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

        <div class="flex flex-col items-center justify-between sm:flex-row">
        <a href="#" class="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300">Brand</a>

        <p class="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">© Copyright 2021. All Rights Reserved.</p>
        </div>
    </div>
    </footer>

</template>

<style scoped>
</style>
