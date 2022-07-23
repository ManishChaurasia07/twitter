import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Manish Chaurasia",
      username: "manish56",
      userImg: "https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/master/pass/Gear-Photos-597589287.jpg",
      img: "https://images.unsplash.com/photo-1658191342762-989ac7137464?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "nice picture!",
      timestamp: "3 hours ago"
    },
    {
      id: "2",
      name: "Alisha",
      username: "alisha78",
      userImg: "https://images.unsplash.com/photo-1658104917506-67c6e95f1dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img: "https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      text: "Fantastic!",
      timestamp: "24 minutes ago"
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center jusify-center px-0 ml-auto w-9 h-9">
                 <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
  );
}
