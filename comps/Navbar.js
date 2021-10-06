import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/nav.module.css'
const Navbar = () => {
    return ( 
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/images/logo.png" alt="Tech Lead" />
                    <h3>Tech Lead</h3>
                    <h6>Company</h6>
                </div>
                <h2>!به راحتی خدمات مورد نیاز خودت رو پیدا کن</h2>   
                <p>اینجا می توانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما چیست
                    و چه کارهایی انجام می ده</p>
                <div className={styles.btns}>
                    <button>فرم تماس با ما</button>
                    <button>مشاوره می خوام</button>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;