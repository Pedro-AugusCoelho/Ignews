import { ActiveLink } from '../ActiveLink';
import styles from './style.module.scss';
import { FaHome , FaBookReader } from 'react-icons/fa';

export const MenuMobileFooter = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                
                <nav>
                    <ActiveLink activeClassName={styles.active} href='/'>
                        <a><FaHome className={styles.Icon} /></a>
                    </ActiveLink>

                    <ActiveLink activeClassName={styles.active} href='/posts'>
                        <a><FaBookReader className={styles.Icon} /></a>
                    </ActiveLink>
                </nav>

            </div>
        </footer>
    )
}