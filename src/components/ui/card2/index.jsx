const Card2 = ({ img,title,p }) => {
    return (
     <div className="border  w-[300px] h-[400px] rounded-4xl relative overflow-hidden">
  <img 
    src={`/items/logo/${img}`}
    className="object-cover rounded-4xl w-[100%] h-[100%]  "
  />

 
  <div className="absolute bottom-0 w-full h-[200px] blur-gradient"></div>
  <div  className="absolute bottom-5 left-5  ">
    <h1 className="text-2xl font-tittle ">{title}</h1>
    <p className="text-md -mt-2">{p}</p>
  </div>
  
</div>
    )
}

export default Card2;