import { useQuery } from "react-query"
// import axios from "axios"

const Location = () => {
   const able = useQuery("location",()=>{
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(({coords}) => {
            console.log(coords)
          },(error) => {
            console.error(error);
          }, {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity
          });
        } else {
          alert('GPS를 지원하지 않습니다')
        }},{staleTime:1000*60,
            cacheTime:1000*60,
            refetchInterval:1000*60,
            refetchOnWindowFocus :false,
            refetchIntervalInBackground:true
        
        })
        console.log(able) //ajax요청이아닌경우 able object안 data property에 들어오지 않는다

// const able = useQuery("imta" , async()=>await axios("https://jsonplaceholder.typicode.com/posts/1"))
// console.log(able)
   return(<>
    
    </>)
}
export default Location