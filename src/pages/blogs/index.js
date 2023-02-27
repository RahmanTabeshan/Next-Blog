/* eslint-disable @next/next/no-img-element */
import Styles from "../../../styles/Home.module.css";
import { useEffect, useState } from "react";
import PostList from "@/components/posts/PostList";
import DesktopCategory from "@/components/desktopCategory/DesktopCategory";
import MobileCategory from "@/components/mobileCategory/MobileCategory";
import DesktopSortbar from "@/components/sortBar/DesktopSortbar";
import Layout from "@/containers/layout/Layout";
import http from "@/services/httpServices";
import queryString from "query-string";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination/Pagination";

export default function Blogs({ blogs, category }) {
    const [mobile, setMobile] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        const updateMobile = () => {
            setMobile(window.innerWidth < 768 ? true : false);
        };

        updateMobile();
        window.addEventListener("resize", updateMobile);
        return () => {
            window.removeEventListener("resize", updateMobile);
        };
    }, []);

    return (
        <Layout>
            <div className="flex justify-center bg-gray-100">
                <div className="grid gap-4 md:grid-cols-12 grid-rows-[60px_minmax(300px,_1fr)] min-h-screen px-3 py-10 max-w-screen-xl w-full">
                    <div className="md:row-span-2 md:col-span-3 overflow-x-auto overflow-y-hidden">
                        {loading ? (
                            <div>loading...</div>
                        ) : mobile ? (
                            <MobileCategory category={category} />
                        ) : (
                            <DesktopCategory category={category} />
                        )}
                    </div>
                    <div className="hidden md:block md:col-span-9">
                        <DesktopSortbar />
                    </div>
                    <div className="md:col-span-9 grid grid-cols-6 gap-8">
                        <PostList blogs={blogs} />
                    </div>
                    {blogs.totalPages > 1 && (
                        <div className="w-full md:col-span-12">
                            <Pagination blogsData={blogs} />
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export const getServerSideProps = async (ctx) => {
    const { req, query } = ctx;
    const { data: result } = await http.get(
        `/posts?${queryString.stringify(query)}`,
        {
            headers: {
                Cookie: req.headers.cookie || "",
            },
        }
    );
    const { data: postCategory } = await http.get("/post-category");
    const { data } = result;
    return {
        props: {
            blogs: data,
            category: postCategory,
        },
    };
};
