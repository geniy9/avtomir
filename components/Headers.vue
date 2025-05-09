<script setup>
const { menuMain, menuPhones } = useMenu()
const isOpen = ref(false)
const isScrolled = ref(false)

function toggleBurger() {
  isOpen.value = isOpen.value ? false : true
}
const scrollHandler = () => {
  if (window.scrollY > 0) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollHandler);
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
})
</script>
<template>
  <header class="fixed top-0 w-full z-20">
    <div class="bg-white transition-all" 
    :class="[isScrolled ? 'py-1 shadow-2xl' : 'py-3 shadow-none']">
      <div class="section flex justify-between gap-4 items-center">
        <div class="flex items-center gap-5">
          <NuxtLinkLocale to="/">
            <img src="/logo.svg" alt="Logo Avtomir" class="w-auto" :class="[isScrolled ? 'h-12' : 'h-16']" />
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/" class="hidden sm:flex items-center justify-start gap-2">
            <div class="shrink-0">
              <img src="/svg/logo_fine_oil.svg" alt="Fine Oil" class="w-auto" :class="[isScrolled ? 'h-10' : 'h-16']" />
            </div>
            <span class="uppercase text-[#AF2D32] text-xs text-wrap font-bold max-w-20 leading-4">
              {{ $t('text.our_partner') }}
            </span>
          </NuxtLinkLocale>
        </div>
        <nav class="hidden lg:flex">
          <ul class="flex items-center">
            <li v-for="(m, i) in menuMain" :key="i">
              <NuxtLinkLocale :to="m.to" class="block text-sm font-medium select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none uppercase">
                {{ $t(`nav.${m.name}`) }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </nav>
        
        <div class="flex items-center gap-4">
          
          <ToggleLocale />
          
          <div class="hidden lg:flex flex-col gap-2 text-right text-sm leading-3">
            <a v-for="(m, i) in menuPhones" :key="i" :href="m.to" 
              class="block bg-primary text-white px-4 py-3 font-bold rounded-md">
              {{ m.name }}
            </a>
          </div>
          
          <div @click="toggleBurger" 
            class="flex flex-col items-end justify-between lg:hidden cursor-pointer p-0 w-7 h-5 group transition" 
            aria-label="Открыть меню">
            <span class="w-full h-[2px] bg-gray-700 rounded shadow-lg"></span>
            <span class="w-4/5 h-[2px] bg-gray-700 group-hover:w-full transition-all rounded"></span>
            <span class="w-full h-[2px] bg-gray-700 group-hover:w-full transition-all rounded"></span>
          </div>

        </div>
      </div>
    </div>
    
    <div class="fixed h-screen top-0 right-0 bottom-0 z-40 shadow-2xl transition-all duration-300" 
      :class="isOpen ? 'translate-x-0 w-5/6' : 'translate-x-full w-0'">
      <div class="relative h-screen flex flex-col justify-between gap-12 p-6 bg-gray-100 rounded-l-2xl">
        <div class="relative max-w-full flex items-start justify-between">
          <NuxtLinkLocale @click="toggleBurger" to="/">
            <img src="/logo.svg" alt="logo" class="w-40 h-auto mr-4" />        
          </NuxtLinkLocale>
          <div @click="toggleBurger" 
            class="relative block cursor-pointer p-0 w-7 h-7 z-50 hover:scale-125 transition">
            <span class="absolute w-full h-[2px] bg-primary top-1/2 rotate-45"></span>
            <span class="absolute w-full h-[2px] bg-primary top-1/2 -rotate-45"></span>
          </div>
        </div>

        <nav @click="toggleBurger">
          <ul class="flex flex-col items-start">
            <li v-for="(m, i) in menuMain" :key="i">
              <NuxtLinkLocale :to="m.to" class="block text-sm text-gray-900 font-bold tracking-widest select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none uppercase">
                {{ $t(`nav.${m.name}`) }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </nav>

        <div class="flex items-center justify-start gap-2">
          <div class="shrink-0">
            <img src="/svg/logo_fine_oil.svg" alt="Fine Oil" class="w-auto h-20" />
          </div>
          <span class="uppercase text-[#AF2D32] text-sm text-wrap font-bold max-w-20 leading-4">
            {{ $t('text.our_partner') }}
          </span>
        </div>

      </div>
    </div>
    <div @click="toggleBurger" class="fixed bg-black/50 backdrop-blur-sm left-0 top-0 bottom-0 right-0 z-30" 
      :class="isOpen ? 'w-screen h-screen' : 'w-0 h-0'"></div>
  </header>
</template>
