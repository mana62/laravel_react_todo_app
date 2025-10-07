import { Button } from '../../components/BUTTON/Button'
import { Text } from '../../components/TEXT/Text';
import styles from './TodoList.module.css'

export function TodoList(props) {
    const {todoList, doneTodo} = props;
    return (
        <>
            <Text>Todo List</Text>
            <ul className={styles.todoList}>
                {todoList.map((todo,index) => (
                    <li
                        key={todo.id}
                        className={styles.todoItem}>
                        {todo.content}
                        <Button
                            onClick={() => doneTodo(index)}>
                            完了
                        </Button>
                    </li>
                ))}
            </ul>
        </>
    );
}