export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(rumi=>{
        return {
            params:{id : rumi.id.toString()}
        }
    })
    return {
        paths,
        fallback:false
    }
}
export const getStaticProps = async (context)=>{
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json();
    console.log(data);
    return {
        props:{rumi:data}
    }
}
const Details = ({rumi}) => {
    console.log(rumi);
    return ( 
        <div>
            <h1>{rumi.name}</h1>
            <p>{rumi.email}</p>
            <p>{rumi.website}</p>
            {/* <p>{rumi.address.city}</p> */}
        </div>
     );
}
 
export default Details;