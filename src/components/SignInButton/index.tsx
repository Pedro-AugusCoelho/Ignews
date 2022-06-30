import { FaGithub } from 'react-icons/fa';
import { signIn, signOut, useSession } from "next-auth/react"
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';


export const SignInButton = () => {
    
    const { data: session } = useSession();
    
    let name = session?.user?.name;

    if(name?.length > 15){
        name = name.slice(0,10).concat('...');
    }

    return session
    
    ? (
        <button type='button' className={styles.signInButton} onClick={() => signOut()}>
            <FaGithub color="#04d361" className={styles.Icon} />
            {name}
            <FiX color='#737380' className={styles.closeIcon}/>
        </button>
    ) 
    
    : (
        <button 
        type='button' 
        className={styles.signInButton}
        onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" />
            <span>Sign in with Github</span>
        
        </button>
    )
}