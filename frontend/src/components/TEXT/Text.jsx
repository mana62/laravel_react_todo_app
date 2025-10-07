import styles from './Text.module.css'

export function Text(props) {
    const {children} = props;
    return (
        <p className={styles.text}>{children}</p>
    )
}