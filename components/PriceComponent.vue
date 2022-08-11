<template>
  <div>
    <span class="display-3">
        {parseFloat(price[currency][time] / 100) || 0}
      </span>
    <span>/{{simbol}}</span>
  </div>
</template>

<script>
export default {
  new Vue({
    data:{
      type:let,
      value:simbol = currency = "eur"
    },
    computed:{
      type:let,
      value:simbol = currency = "€"
    },
    computed:{
      type:let,
      value:simbol = currency = "CHF"
    }
  }),
  props:['price','currency', 'CHF']

}
</script>

<style></style>
