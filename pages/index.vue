<script setup>
const darkMode = ref(false)
const loading = ref(false)
const user = useSupabaseUser()
const userStore = useUserStore()
</script>

<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <LoadingPage v-if="userStore.isLoading"/>

      <div class="min-h-full">
        <div class="grid grid-cols-12 md:max-w-7xl md:px-2" v-if="user">
          <!--        Left-->
          <div class="hidden md:block xs:col-span-1 md:col-span-2">
            <div
                class="sticky top-0">
              <SidebarLeft/>
            </div>
          </div>

          <!--        Main-->
          <main class="md:col-span-7 col-span-12">
            <MainSection title="Home" :loading="loading"/>
          </main>

          <!--        Right-->
          <div class="hidden md:block col-span-3">
            <div
                class="sticky top-0">
              <SidebarRight/>
            </div>
          </div>

        </div>

        <div v-else>
          <Auth/>
        </div>
      </div>
    </div>
  </div>
</template>