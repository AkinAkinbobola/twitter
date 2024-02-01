<script setup>
const darkMode = ref(false)
</script>

<template>
  <div :class="{'dark': darkMode}">
    <div class="min-h-full">
      <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl
      lg:px-8 lg:gap-5">
        <!--        Left-->
        <div class="bg-red-400 md:block xs:col-span-1 xl:col-span-2">
          <div
          class="sticky top-0">
            <SidebarLeft/>
          </div>
        </div>

        <!--        Main-->
        <div>

        </div>

        <!--        Right-->
        <div>

        </div>

      </div>
    </div>
  </div>
</template>