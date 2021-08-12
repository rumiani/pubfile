import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/video.module.css'

const Video = () => {
    const [play,setPlay]=useState(false)
    const playVideo = ()=>setPlay(!play)

    return ( 
        <div className={styles.container}>
        <div className={styles.title}>
                <h2>ویدئو معرفی ما را تماشا کنید</h2>
            <ul>
                <li>این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات .بیشتری بدست آورند</li>
                <li>این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات .بیشتری بدست آورند</li>
            </ul>
        </div>
        <div className={styles.video}>
            <video >
            </video>
                <button onClick={playVideo}>
                    {play?
                        <i className="far fa-pause-circle"></i>:
                        <i className="fas fa-play-circle"></i>
                    }
                </button>
        </div>
        </div>
     );
}
 
export default Video;