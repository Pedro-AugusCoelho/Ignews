import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";
import styles from './styles.module.scss';


interface GoBackPageProps {
    redirect:string;
}


export const GoBackPage = ({redirect}:GoBackPageProps) => {
    
    const Router = useRouter();

    const handleBackPage = () => {
        Router.push(redirect);
    }
    
    return(
        <div onClick={handleBackPage} className={styles.ButtonBack}>
            <FaArrowLeft size={20} className={styles.Icon} />
        </div>
    )
}