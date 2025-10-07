import { Text } from '../../components/TEXT/Text';
import { Button } from '../../components/BUTTON/Button'
import styles from './TodoList.module.css'

export function DoneTodo(props) {
    const { doneList, deleteTodo } = props;
    return (
    <>
        <Text>完了済み</Text>
        <ul className={styles.todoList}>
            {doneList.map((todo, index) => (
                <li key={todo.id}
                    className={styles.todoItem}>
                    {todo.content}
                    <Button
                        className={styles.DeleteButton}
                        onClick={() => deleteTodo(index)}>
                        削除
                    </Button>
                </li>
            ))}
        </ul>
        </>
    )
}