import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import type { Ref } from 'vue'

export const useApiChildState = (parentId: Ref<string>, childId: Ref<string>) => {
  const getTodos = async (parentId: string, childId: string) => {
    console.log('fetch child func')
    const { data } = await axios.get('https://zipcloud.ibsnet.co.jp/api/search')
    return data
  }
  return useQuery({
    queryKey: ['GET_CHILD', parentId.value, childId.value],
    queryFn: () => getTodos(parentId.value, childId.value),
    retry: 3
  })
}
