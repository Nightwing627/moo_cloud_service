<template>
   <div
        class="btn btn-light navigation-button d-none d-sm-inline-block"
        onClick={func}
      >
        <i class={'fas fa-long-arrow-alt-${classString}`'}></i>
      </div>
</template>

<script>
export default {
  new Vue({
    data:{
      type:let,
      value: direction = "next"
    },
    computed:{
      type:let,
      value: direction = "right"
    },
    computed:{
      type:let,
      value: direction = "left"
    }
  }),
  props:['next','right', 'left'],
  method:{
     goNext = () => swiper.slideNext();
     goPrev = () => swiper.slidePrev();
  },
  updated:{
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      spaceBetween: 30,

      breakpoints: {
        575: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },

      mousewheel: true,
      keyboard: true,
    });
  }
}
</script>

<style></style>
