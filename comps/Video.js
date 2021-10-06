import styles from '../styles/video.module.css'

const Video = () => {
    return ( 
        <div className={styles.container}>
        <div className={styles.title}>
                <h2>ویدئو معرفی ما را تماشا کنید</h2>
            <ul>
                <li>این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات .بیشتری بدست آورند</li>
                <li>این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات .بیشتری بدست آورند</li>
            </ul>
        </div>
            <video className={styles.video} src="./video.mp4" controls></video>
        </div>
     );
}
 
export default Video;