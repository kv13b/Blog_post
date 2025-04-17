import { prisma } from "./utils/db";
async function getData() {
 const data= await prisma.BlogPost.findMany({
  select:{
    title:true,
    content:true,
    imageUrl:true,
    authorImage:true,
    authorName:true,
    id:true,
    createdAt:true
  }
 });
 return data;
}
export default async function Home() {
  const data=await getData();
  return (
    <div>
     <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Proj</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {data.map((item)=>(
        <h1 key={item.title}>{item.title}</h1>
      ))}

     </div>
    </div>
  );
}
