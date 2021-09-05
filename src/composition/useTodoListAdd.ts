import { generateId } from '../utils/todoStorage'
import { Ref, ref } from 'vue'
import { TodoItem } from '../interface/Todo'

export default function(todoListRef :  Ref<TodoItem[]>){
    //input 值
    const textRef = ref('');
    function todoListAdd(){
        const text = textRef.value.trim();
        if(text === '') return;
        const addTarget : TodoItem= {
            id : generateId(),
            title : text,
            isCompleted : false
        }
        todoListRef.value.push(addTarget)
        textRef.value = ''
    }
    return{
        textRef,
        todoListAdd
    }
}
