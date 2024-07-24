<script setup lang="ts">
import { useApiState } from '@/composable/api-state'
import { ref } from 'vue'
const paramId = ref('1')

const apiState = useApiState(paramId)
</script>

<template>
  <div style="width: 500px; height: 200px; background: blue">
    {{ apiState?.isFetched }}
    <div v-if="apiState?.isFetched">
      <p>{{ apiState?.data }}</p>
    </div>
  </div>
</template>
