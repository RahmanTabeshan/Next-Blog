import Link from "next/link";
import { useRouter } from "next/router";

const MobileCategory = ({ category }) => {
    const router = useRouter();
    if (!router.query.categorySlug) {
        router.query.categorySlug = "blogs";
    }

    return (
        <div className="flex gap-x-4 pb-4 ">
            <Link
                className={`block border border-gray-400 text-sm rounded-lg py-2 px-4  mb-1 whitespace-nowrap 
                ${(router.query.categorySlug === "blogs"
                    ? "bg-blue-200 text-blue-700"
                    : "hover:bg-blue-100")}`
                }
                href="/blogs"
            >
                همه مقالات
            </Link>
            {category.data.map((c) => (
                <Link
                    key={c._id}
                    className={`block border border-gray-400 text-sm rounded-lg py-2 px-4 mb-1 
                    ${(router.query.categorySlug.toLowerCase() === c.title.toLowerCase()
                        ? "bg-blue-200 text-blue-700"
                        : "hover:bg-blue-100")}`
                    }
                    href={`/blogs/${c.englishTitle}`}
                >
                    {c.title}
                </Link>
            ))}
        </div>
    );
};

export default MobileCategory;
