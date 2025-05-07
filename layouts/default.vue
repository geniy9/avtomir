<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <Headers />
    <main class="flex-grow">
      <slot />
    </main>
  </div>
</template>