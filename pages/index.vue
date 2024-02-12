<script setup>
const darkMode = ref(false)
</script>

<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl
      lg:px-8">
          <!--        Left-->
          <div class="hidden md:block xs:col-span-1 lg:col-span-2">
            <div
                class="sticky top-0">
              <SidebarLeft/>
            </div>
          </div>

          <!--        Main-->
          <main class="md:col-span-6 lg:col-span-7 col-span-12 bg-red-400">
            fg
          </main>

          <!--        Right-->
          <div class="hidden md:block xs:col-span-1 lg:col-span-3">
            <div
                class="sticky top-0">
              <SidebarRight/>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>