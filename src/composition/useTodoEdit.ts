import { computed, nextTick, ref, Ref } from 'vue';
import { TodoItem } from '../interface/Todo'
import useTodoRemove from './useTodoRemove'
export default function(todoListRef :  Ref<TodoItem[]>){

    const {handleTodoRemove}  = useTodoRemove(todoListRef);
    const editingTodoRef : Ref<TodoItem | null> = ref(null);
    const checkBoxRefs : Ref<HTMLElement[]> = ref([]); 
    
    let oldTitleValue:string = '';
    const handleEdit = (todo : TodoItem)=>{
        editingTodoRef.value = todo;
        oldTitleValue = todo.title;
        nextTick(()=>{
            const dom = checkBoxRefs.value.find(item => item.getAttribute('data-id') === todo.id)
            if(dom){
                dom.focus()
            }
        });
    }

   

    const handleCancelEdit = (todo : TodoItem)=>{
        todo.title = oldTitleValue;
        editingTodoRef.value = null;
    }

    const handleEditDone = ()=>{
        if(editingTodoRef.value?.title.trim() === ''){
            //need remove this
            handleTodoRemove(editingTodoRef.value);
        }
        editingTodoRef.value = null;
    }

    const isClearRef = computed({
        get(){
          return todoListRef.value.filter(item => !item.isCompleted ).length === 0;
        },
        set(val : boolean){ 
            todoListRef.value.forEach(item => item.isCompleted = val)
        }
    })

    const handleRef = (dom:HTMLElement)=>{
        checkBoxRefs.value.push(dom);
        return undefined
    }
    

    return{
        handleEdit,
        handleEditDone,
        editingTodoRef,
        handleCancelEdit,
        isClearRef,
        handleRef
    }
}