import Image from 'next/image'
import {Fira_Code, Roboto, Inter} from 'next/font/google'
import styles from './page.module.css'

const font = Fira_Code({
    weight: '400',
    subsets: ['latin']
})

export default function Home() {
    return (
            <div className={styles.main}>
                <h1 className={font.className}>Главная</h1>
            </div>
    )
}
