<template>
  <svg
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.com/svgjs"
    :width="size"
    :height="size"
    x="0"
    y="0"
    viewBox="0 0 24 24"
    style="enable-background:new 0 0 512 512"
    xml:space="preserve"
    class=""
  >
    <g>
      <path
        fill="#000000"
        fill-rule="evenodd"
        d="M13.194 4.115a1.115 1.115 0 1 0-2.23 0v6.69H4.115a1.115 1.115 0 1 0 0 2.23h6.85v6.85a1.115 1.115 0 1 0 2.23 0v-6.85h6.69a1.115 1.115 0 1 0 0-2.23h-6.69z"
        clip-rule="evenodd"
        data-original="#000000"
        class=""
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'PlusIcon',
  props: {
    size: {
      type: Number,
      default: 20,
    },
  },
}
</script>
