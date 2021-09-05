import { addItems , getItems} from '../utils/todoStorage'
import { ref,  watchEffect } from 'vue'



export default function(){
    const todoListRef = ref(getItems());
    watchEffect(()=>{
        addItems(todoListRef.value) 
    })
    return {
        todoListRef
    }
}
