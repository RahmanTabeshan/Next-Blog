import http from "@/services/httpServices";
import RouterPush from "@/utils/routerPush";
import {
    BookmarkIcon,
    ChatBubbleBottomCenterTextIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";
import {
    HeartIcon as HeartSolid,
    BookmarkIcon as BookmarkSolid,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const PostInteraction = ({ blog, isSmall }) => {

    const router = useRouter()
    const iconSize = isSmall ? "w-4 h-4 " : "w-6 h-6";

    const likeHandllr = async (postId)=>{
        try {
            const {data} = await http.put(`/posts/like/${postId}`)
            RouterPush(router) ;
        } catch (error) {
            
        }
        
    }
    const bookmarkHandlre = async (postId)=>{
        try {
            const {data} = await http.put(`/posts/bookmark/${postId}`)
            RouterPush(router) ;
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <div className={`flex items-center ${isSmall ? "gap-x-2" : "gap-x-4"}`}>
            <div className="flex items-center rounded-lg gap-1 bg-gray-200 p-1 cursor-pointer transition-all duration-150 hover:bg-gray-500 hover:text-white">
                <ChatBubbleBottomCenterTextIcon className={iconSize} />
                <span className="text-xs font-['IranYekan\_En']">
                    {blog.commentsCount}
                </span>
            </div>
            <div
                className="flex items-center rounded-lg text-red-600 font-bold bg-red-100 p-1 gap-1 cursor-pointer transition-all duration-150 hover:bg-red-500 hover:text-white"
                onClick={() => likeHandllr(blog._id)}
            >
                {blog.isLiked ? (
                    <HeartSolid className={iconSize} />
                ) : (
                    <HeartIcon className={`${iconSize} stroke-2`} />
                )}
                <span className="text-xs font-['IranYekan\_En']">
                    {blog.likesCount}
                </span>
            </div>
            <div className="flex items-center rounded-lg p-1 bg-blue-100 text-blue-600 cursor-pointer transition-all duration-150 hover:bg-blue-500 hover:text-white" onClick={()=>bookmarkHandlre(blog._id)}>
                {blog.isBookmarked ? (
                    <BookmarkSolid className={iconSize} />
                ) : (
                    <BookmarkIcon className={`${iconSize} stroke-2`} />
                )}
            </div>
        </div>
    );
};

export default PostInteraction;
