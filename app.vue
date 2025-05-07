<script setup>
const { locale, locales } = useI18n()
const i18nHead = useLocaleHead({
  addDirAttribute: true,
  addVariantTags: true // или addLangAttribute: true
})
useHead({
  titleTemplate: (title) => {
    return title ? `${title} | AVTOMIR` : "AVTOMIR"
  },
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs.lang,
    dir: () => i18nHead.value.htmlAttrs.dir,
  },
  // link: i18nHead.value.link,
  // meta: i18nHead.value.meta,
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

