import styles from '../styles/services.module.css'
import { servicesArr } from './data';
const Services = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>ما خدمات زیادی به مشتریان بزرگمان ارائه می دهیم</h3>
                <p>از این زیر عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده می کنیم.
                    با کلیک بر روی این قسمت می توانید متن خود را ویرایش کنید</p>
            </div>
            <div className={styles.services}>
                {servicesArr.map((each,index)=>{
                    return (
                        <div className={styles.service} key={index}>
                        <img src={each.img_src} alt={each.name} />
                        <div className={styles.options}>
                            <h2>{each.name}</h2>
                            <p>{each.text}</p>
                            <div className={styles.btns}>
                                <button>{each.btn_1}</button>
                                <button>{each.btn_2}</button>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Services;