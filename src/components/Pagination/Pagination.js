import RouterPush from "@/utils/routerPush";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const Pagination = ({ blogsData }) => {
    const router = useRouter();
    const pageNum = router.query.page || 1;
    let pages = [];
    const { totalPages } = blogsData;

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    console.log(blogsData);

    const clickHandler = (e, page) => {
        if (page !== 1) {
            if (!router.query.sort) {
                router.query.sort = "newest";
            }
            router.query.page = page;
        } else {
            const { page, ...query } = router.query;
            if (router.query.sort !== "newest") {
                router.query = query;
            } else {
                const { sort, ...otherQuery } = query;
                router.query = otherQuery;
            }
        }
        RouterPush(router);
    };

    const prevHandler = (pageNum) => {
        if (parseInt(pageNum) - 1 === 1) {
            const { page, ...query } = router.query;
            if (router.query.sort !== "newest") {
                router.query = query;
            } else {
                const { sort, ...otherQuery } = query;
                router.query = otherQuery;
            }
        } else {
            if (!router.query.sort) {
                router.query.sort = "newest";
            }
            router.query.page = pageNum - 1;
        }
        RouterPush(router);
    };

    const nextHandler = (pageNum) => {
        if (!router.query.sort) {
            router.query.sort = "newest";
        }
        router.query.page = parseInt(pageNum) + 1;
        RouterPush(router);
    };

    return (
        <div className="w-full flex justify-center">
            <ul className="flex gap-x-4">
                    <button disabled={pageNum <= 1 ? true : false  } onClick={() => prevHandler(pageNum)}>
                        <ChevronRightIcon className="h-6 w-6" />
                    </button>
                {pages.map((page) => (
                    <li
                        key={page}
                        onClick={(e) => clickHandler(e, page)}
                        className={`h-8 w-8 text-center leading-8 rounded-lg cursor-pointer ${
                            parseInt(pageNum) === parseInt(page)
                                ? "bg-blue-300 text-blue-800"
                                : "bg-neutral-200"
                        }`}
                    >
                        {page}
                    </li>
                ))}
                <button
                    disabled={pageNum >= totalPages ? true : false}
                    onClick={() => nextHandler(pageNum)}
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
            </ul>
        </div>
    );
};

export default Pagination;
