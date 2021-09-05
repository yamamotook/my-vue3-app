interface TodoItem {
    id: string;
    title: string;
    isCompleted: boolean;
}

type filterStatus = 'active' | 'all' | 'completed';
export {
    TodoItem,
    filterStatus
}
