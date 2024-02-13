<script setup>
const darkMode = ref(false)
</script>

<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div class="grid grid-cols-12 md:max-w-7xl md:px-2">
          <!--        Left-->
          <div class="hidden md:block xs:col-span-1 md:col-span-2">
            <div
                class="sticky top-0">
              <SidebarLeft/>
            </div>
          </div>

          <!--        Main-->
          <main class="md:col-span-7 col-span-12">
          </main>

          <!--        Right-->
          <div class="hidden md:block col-span-3">
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