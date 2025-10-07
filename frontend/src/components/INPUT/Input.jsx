import styles from './Input.module.css'

export function Input(props) {
    const {text, inputValue} = props;
    return (
        <input
            className={styles.input}
            name='text'
            type="text"
            value={text}
            onChange={inputValue} />
    )
}