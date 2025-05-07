<script setup>
const { locale, locales, setLocale } = useI18n()

async function changeLocale(code) {
  setLocale(code)
  await refreshNuxtData()
}
</script>
<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger class="text-gray-900 hover:text-abronia uppercase">
          {{ locale }}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[180px] gap-x-4 gap-y-1 p-4 grid-cols-1 bg-white">
            <li v-for="(loc, i) in locales" :key="i">
              <NavigationMenuLink as-child>
                <div @click="changeLocale(loc.code)" class="block">
                  <div class="flex select-none cursor-pointer items-center gap-2 px-2 py-2 rounded-md transition hover:bg-gray-100 text-gray-900 hover:text-abronia text-sm font-medium">
                    <span class="uppercase">
                      <img :src="`/flags/${loc.code}.png`" alt="loc.code" class="w-4" />
                    </span>
                    <span>
                      {{ loc.name }}
                    </span>
                  </div>
                </div>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
