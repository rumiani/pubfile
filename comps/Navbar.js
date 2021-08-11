import Image from 'next/image';
import Link from 'next/link'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Image src="/rumi.jpg" width={128} height={77} alt="" />

            </div>
            <Link href='/' exact><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/rumi'><a>Rumi Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;