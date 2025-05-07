<template>
  <div class="preloader">
    <div class="karkara-preloader">
      
    </div>
  </div>
</template>
<style>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
  opacity: 1;
  visibility: visible;
}
.preloader.hidden {
  opacity: 0;
  visibility: hidden;
}

</style>