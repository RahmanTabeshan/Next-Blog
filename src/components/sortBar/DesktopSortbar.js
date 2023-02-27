import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState } from "react";

const DesktopSortbar = () => {
    const router = useRouter();
    const [sort, setSort] = useState(router.query.sort || "newest");

    const sortOptions = [
        { label: "جدیدترین", id: "newest" },
        { label: "پربازدیدترین", id: "most" },
        { label: "محبوب ترین", id: "popular" },
    ];

    const query = (router, id) => {
        let query;
        if (router.query.categorySlug === "blogs") {
            if (id !== "newest") {
                query = {
                    sort: id,
                };
            }
            
        } else {
            if (id !== "newest") {
                query = {
                    sort: id,
                    categorySlug: router.query.categorySlug,
                };
            } else {
                query = {
                    categorySlug: router.query.categorySlug,
                };
            }
        }
        return query;
    };

    const sortHandler = (id) => {
        setSort(id);
        router.push(
            {
                query: query(router, id),
                pathname: router.pathname,
            },
            undefined,
            { scroll: false }
        );
    };

    return (
        <div className="flex items-center bg-white rounded-lg px-4">
            <div className="flex items-center gap-x-2 ml-4">
                <AdjustmentsHorizontalIcon className="w-6 h-6" />
                <span className="block">مرتب سازی بر اساس : </span>
            </div>
            <ul className="flex items-center">
                {sortOptions.map((s) => (
                    <li
                        onClick={() => sortHandler(s.id)}
                        className={`cursor-pointer py-4 rounded-lg text-center w-24 ${
                            sort === s.id ? "text-blue-600 bg-blue-200" : ""
                        }`}
                        key={s.id}
                    >
                        {s.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DesktopSortbar;
