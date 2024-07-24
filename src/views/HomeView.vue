<script setup lang="ts">
import SampleArea from '@/components/SampleArea.vue'
import ChildArea from '@/components/ChildArea.vue'
import { useApiState } from '@/composable/api-state'
import { ref } from 'vue'
const paramId = ref('1')

const apiState = useApiState(paramId)
</script>

<template>
  <p>sample-page-home</p>
  <input type="text" v-model="paramId" />
  <div>
    {{ apiState?.isFetched }}
    <div v-if="apiState?.isFetched">
      <p>{{ apiState?.data }}</p>
    </div>
    <SampleArea></SampleArea>
    <ChildArea></ChildArea>
  </div>
</template>
