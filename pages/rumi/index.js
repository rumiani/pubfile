import Link from 'next/link';
import styles from '../../styles/rumi.module.css'
export const getStaticProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props:{rumies:data}
    }
}
const rumi = ({rumies}) => {
    return ( 
        <div>
            <h1>rumi</h1>
            {rumies.map((rumi)=>(
                <Link href={`/rumi/${rumi.id}`} key={rumi.id}>
                    <a className={styles.single}>
                        <h3>{rumi.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default rumi;