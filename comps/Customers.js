import styles from '../styles/customers.module.css'
import { customersArr, iconsArr } from './Data';

const Customers = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>مشتریان ما در موردمان چه می گویند</h3>
                <p>از این زیر عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده می کنیم. با کلیک بر روی این قسمت می توانید متن خود را ویرایش کنید</p>
            </div>
        <div className={styles.customers}>
            {customersArr.map((customer,index)=>{
                return <div className={styles.customer} key={index}> 
                            <div className={styles.comment}>
                                <div>
                                    <p>{customer.comment}</p>
                                </div>
                                <div className={styles.name_job}>
                                    <strong>{customer.name}</strong>
                                    <h4>{customer.company}، {customer.job}</h4>
                                </div>
                            </div>
                            <div className={styles.image}>
                                <img  src={customer.img_src} alt={customer.name} />
                            </div>
                        </div>
            })}
        </div>
        <div className={styles.icons}>
            {iconsArr.map((icon,index)=>{
                return <span key={index}>
                    <img src={icon} alt={`icon_${index}`} />
                </span>
            })}
        </div>
        </div>
     );
}
 
export default Customers;