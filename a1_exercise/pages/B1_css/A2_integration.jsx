import styles from './A2_integration.module.css'

export default function integration(){
    return(
        <div id={styles.integration}>
            <div className={styles.red}>
                Texto #01
            </div>
            <div className={styles.blue}>
                Texto #02
            </div>
            <div className={styles.white}>
                Texto #03
            </div>
        </div>
    )
}