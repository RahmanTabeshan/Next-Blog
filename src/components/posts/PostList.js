/* eslint-disable @next/next/no-img-element */
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import PostInteraction from "./PostInteraction";

const PostList = ({ blogs }) => {
    const { docs: data } = blogs;
    return (
        <>
            {data.map((blog) => (
                <div
                    className="flex flex-col col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-lg p-4 max-h-[360px]"
                    key={blog._id}
                >
                    <div>
                        <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                            <img
                                src={blog.coverImage}
                                alt=""
                                className="object-center h-44 w-full object-contain "
                            />
                        </Link>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg mt-4 flex flex-col justify-between flex-1">
                        <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                            <h2 className="mb-4 font-bold">{blog.title}</h2>
                        </Link>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/images/js.png"
                                    alt=""
                                    className="w-6 h-6 ring-2 ring-white rounded-full"
                                />
                                <span className="text-gray-500 text-sm">
                                    {blog.author.name}
                                </span>
                            </div>
                            <div className="text-xs px-2 py-1 rounded-lg bg-neutral-200 cursor-pointer hover:bg-neutral-300 ">
                                {blog.category.title}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <PostInteraction blog={blog} isSmall/>
                            <div className="flex gap-1 items-center">
                                <ClockIcon className="w-4 h-4" />
                                <div className="text-[10px] font-bold font-['IranYekan\_En'] text-gray-500">
                                    <span>زمان مطالعه : </span>
                                    {blog.readingTime} دقیقه
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PostList;
