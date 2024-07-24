<script setup lang="ts">
import { ref } from 'vue'
import { useApiState } from '@/composable/api-state'
import { useApiChildState } from '@/composable/api-state-child'

const paramId = ref('')

const childParamId = ref('12')
const apiChildState = useApiChildState(paramId, childParamId)
</script>

<template>
  <input type="text" v-model="paramId" />
  <div style="width: 500px; height: 200px; background: green">
    {{ apiChildState?.isFetched }}
    <div v-if="apiChildState?.isFetched">
      <p>{{ apiChildState?.data }}</p>
    </div>
  </div>
</template>
