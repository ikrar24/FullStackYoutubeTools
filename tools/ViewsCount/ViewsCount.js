


const ViwesCount = async () => {
    
 if (typeof window !== "undefined") {
      const slug = window.location.pathname;
console.log(slug);

       await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/views?slug=${slug}`, {
          headers: {
            "x-client-key":process.env.NEXT_PUBLIC_SECRETE_KEY,
          }})
 }

}



export default ViwesCount 