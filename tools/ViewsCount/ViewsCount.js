



const ViwesCount = async () => {
  // base url 
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000" ;
  // console.log(baseUrl);
    
 if (typeof window !== "undefined") {
      const slug = window.location.pathname;
console.log(slug);

       await fetch(`${baseUrl}/api/views?slug=${slug}`, {
          headers: {
            "x-client-key":process.env.NEXT_PUBLIC_SECRETE_KEY,
          }})
 }

}



export default ViwesCount 