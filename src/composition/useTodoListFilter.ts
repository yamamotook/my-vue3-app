import {computed, onMounted, onUnmounted, ref, Ref} from 'vue'
import { filterStatus, TodoItem } from '../interface/Todo'


const filterStatusArr : filterStatus[] = ['active','all','completed']
export default function(todoListRef : Ref<TodoItem[]>){

    const getHash = ()=>{
        return location.hash.replace(/#\/?/, '');
    }
    const hashRef : Ref<filterStatus> = ref('all');
    const hashChangeHandler = ()=>{
        const hash  = getHash();
        if(filterStatusArr.includes(hash as any)){
            hashRef.value = hash as filterStatus;
        }else{
            hashRef.value = 'all'
        }
    }
    hashChangeHandler();

    onMounted(()=>{
        window.addEventListener('hashchange', hashChangeHandler)
    })

    onUnmounted(()=>{
        window.removeEventListener('hashchange', hashChangeHandler)
    })

    const renderListRef = computed(()=>{
        if(hashRef.value ==='all'){  
            return todoListRef.value
        }else if(hashRef.value === 'active'){
            return todoListRef.value.filter(item => !item.isCompleted)
        }else if(hashRef.value === 'completed'){
            return todoListRef.value.filter(item => item.isCompleted)
        }else{
            return []
        }
    })

    const nokoriCountRef = computed(()=>{
        return todoListRef.value.filter(item => !item.isCompleted).length
    })

    const completedTodoCountRef = computed(()=>{
        return todoListRef.value.filter(item => item.isCompleted).length
    })
    
    return{
        renderListRef,
        nokoriCountRef,
        hashRef,
        completedTodoCountRef
    }
}