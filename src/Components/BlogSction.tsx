import BlogCard from "./BlogCard";
const data =[
{ img:"/public/image/post__1.webp",
  title: "Healthy Food Healthy Life",
  date: "Aug 27,2023",
  comment:8,
},
{ img:"/public/image/post__2.webp",
  title: "Healthy Food Healthy Life",
  date: "Aug 25,2023",
  comment:1,
},
  { img:"/public/image/post__3.webp",
  title: "Healthy Food Healthy Life",
  date: "Aug 30,2023",
  comment:6,
},

]; 

const BlogSction = () => {
  return (
    <div className="container pt-16">
        <h2 className="font-bold text-2xl">Latest News </h2>
        <p className="text-gray-500">Present posts in a best way to hightlight intersting moments of yourblogs.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {data.map((el)=>
            (<BlogCard 
             key={el.date}
             img={el.img}
             title={el.title}
             date={el.date}
             comment={el.comment}
             
             />))}
             </div>

    </div>
  )
}

export default BlogSction;