import styles from './ContainerDB.module.scss';

const ContainerDB = ({ children }) => {
    return (
        <div className={styles.containerDB}>
            {children}
        </div>
    )
}

export default ContainerDB