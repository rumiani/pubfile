import { useRouter } from "next/dist/client/router";
import Link from "next/link"
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();
useEffect(()=>{
setTimeout(() => {
    // router.go(-1)
    router.push('/')
}, 3000);
},[])
    return ( 
        <div className="not-found">
            <h1>!متاسفیم</h1>
            <h2>.صفحه ای یافت نشد</h2>
            <p>برگشت به  <Link href='/'><a >صفحه اصلی</a></Link></p>
        </div>
     );
}
 
export default NotFound;