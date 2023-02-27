import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const DesktopCategory = ({ category }) => {
    
    const [isOpen, setOpen] = useState(true);
    const router = useRouter();
    if(!router.query.categorySlug){
        router.query.categorySlug = "blogs"
    }
    const {categorySlug , limit , ...query} = router.query ;

    return (
        <div className="bg-white rounded-lg overflow-hidden">
            <div
                onClick={() => setOpen(!isOpen)}
                className="flex justify-between p-4 cursor-pointer bg-blue-200"
            >
                <span>دسته بندی مقالات</span>
                <ChevronDownIcon
                    className={`w-6 h-6 stroke-blue-500 transition-all duration-150 ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </div>
            <div className={` ${isOpen ? "flex" : "hidden"} flex-col mt-1`}>
                <Link
                    className={`block py-2 pr-4 mb-1 ${
                        router.query.categorySlug.toLowerCase() === "blogs"
                            ? "bg-blue-200"
                            : "hover:bg-blue-100"
                    }`}
                    href={{
                        pathname:"/blogs/" ,
                        query : query ,
                    }}
                >
                    همه مقالات
                </Link>
                {category.data.map((c) => (
                    <Link
                        key={c._id}
                        className={`block py-2 pr-4 mb-1 ${
                            router.query.categorySlug.toLowerCase() === c.title.toLowerCase()
                                ? "bg-blue-200"
                                : "hover:bg-blue-100"
                        }`}
                        href={{
                            pathname:`/blogs/${c.englishTitle}` ,
                            query : query ,
                        }}
                    >
                        {c.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DesktopCategory;
