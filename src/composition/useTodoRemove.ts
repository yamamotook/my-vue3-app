import { Ref } from "vue";
import { TodoItem } from "../interface/Todo";

export default function(todoListRef : Ref<TodoItem []>){

    const handleTodoRemove = (todo : TodoItem)=>{
        todoListRef.value = todoListRef.value.filter(item => item !== todo);
    }
    
    const handleRemoveCompleted = ()=>{
        todoListRef.value = todoListRef.value.filter(item => !item.isCompleted)
    }

    return {
        handleTodoRemove,
        handleRemoveCompleted
    }

}