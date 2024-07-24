import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import type { Ref } from 'vue'

export const useApiState = (paramId: Ref<string>) => {
  const getTodos = async (paramId: string) => {
    console.log('fetch func')
    const { data } = await axios.get('https://zipcloud.ibsnet.co.jp/api/search')
    return data
  }
  return useQuery({
    queryKey: ['GET_PARENT', paramId.value],
    queryFn: () => getTodos(paramId.value),
    // staleTime: Infinity,
    retry: 3
  })
}
