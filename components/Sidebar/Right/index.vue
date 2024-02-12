<script setup>
const whatsHappeningItems = ref([
  {
    title: "SUPERSLIME",
    count: "400 Tweets"
  }, {
    title: "King of the Hill",
    count: "12k Tweets"
  }, {
    title: "Anyways",
    count: "200k Tweets"
  },
])
const whoToFollowItems = ref([
  {
    name: "SUPERSLIME",
    handle: "@bigbad",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpBk-y8-DXxBs1YBoCbVlFue72d4vHXYGzoBpMm4H9uPcOjFNa"
  },{
    name: "SUPERSLIME",
    handle: "@bigbad",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpBk-y8-DXxBs1YBoCbVlFue72d4vHXYGzoBpMm4H9uPcOjFNa"
  },{
    name: "SUPERSLIME",
    handle: "@bigbad",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpBk-y8-DXxBs1YBoCbVlFue72d4vHXYGzoBpMm4H9uPcOjFNa"
  },
])
</script>

<template>
  <div class="flex flex-col">
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem v-for="item in whatsHappeningItems">
        <div>
          <h1 class="font-bold text-gray-800 text-base dark:text-white">{{ item.title }}</h1>
          <p class="text-sm text-gray-400">{{ item.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem v-for="item in whoToFollowItems">
        <div class="p-2 flex items-center justify-between gap-2">
          <div class="flex gap-2">
            <div>
              <img :src="item.image" :alt="item.name" class="h-10 w-10 rounded-full object-cover">
            </div>
            <div class="flex flex-col">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{item.name}}</h1>
              <p class="text-xs text-gray">{{item.handle}}</p>
            </div>
          </div>

          <div class="flex items-center h-full">
            <button class="px-4 py-2 text-xs font-bold text-white bg-black dark:text-black dark:bg-white rounded-full">Follow</button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>