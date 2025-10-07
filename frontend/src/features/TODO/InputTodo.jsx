import { Text } from '../../components/TEXT/Text';
import { Button } from '../../components/BUTTON/Button'
import { Input } from '../../components/INPUT/Input'

export function InputTodo(props) {
    const {text, inputValue, addTodo} = props;
    return (
        <>
        <Text>Todoを入力してください</Text>
        <Input
            text={text}
            inputValue={inputValue}
        />
        <Button
            onClick={addTodo}>
            追加
        </Button>
        </>
    )
}