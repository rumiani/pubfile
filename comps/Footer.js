import styles from '../styles/footer.module.css'
const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <section className={styles.section}>
                <h1>اگر علاقه مند به همکاری با ما هستی</h1>
                <p>از این زیر عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده می کنیم. با کلیک
                  بر روی این قسمت می توانید متن خود را ویرایش کنید </p>  
                <div className={styles.btns}>
                    <button>فرم تماس با ما</button>
                    <button>ارسال رزومه</button>
                </div>
            </section>
            
            <p className={styles.copyright}>
            Copyright rumi © 2021
            </p>
        </div>
     );
}
 
export default Footer;