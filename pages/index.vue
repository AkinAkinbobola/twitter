<script setup>
const darkMode = ref(false)
const loading = ref(false)
const {useAuthUser, initAuth, useAuthLoading} = useAuth();
const isAuthLoading = useAuthLoading()
const user = useAuthUser()
onBeforeMount(() => {
  initAuth()
})
</script>

<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <div v-if="isAuthLoading">
        loading
      </div>
      <div class="min-h-full" v-else-if="user">
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
      </div>

      <div v-else>
        <Auth/>
      </div>
    </div>
  </div>
</template>