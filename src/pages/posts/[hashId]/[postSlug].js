/* eslint-disable @next/next/no-img-element */
import PostInteraction from "@/components/posts/PostInteraction";
import Layout from "@/containers/layout/Layout";
import http from "@/services/httpServices";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolidBookmark } from "@heroicons/react/24/solid";
import Link from "next/link";

const PostPage = ({ post }) => {
    console.log(post);
    return (
        <Layout>
            <div className="bg-gray-100 min-h-screen p-5">
                <div className="max-w-screen-lg mx-auto">
                    <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start mb-12">
                        <div className="flex items-stretch">
                            <img
                                className="w-14 h-14 md:w-20 md:h-20 rounded-full outline outline-1 outline-blue-500 object-contain"
                                src={post.coverImage}
                                alt={post.author.name}
                            />
                            <div className="flex flex-col mr-4 justify-between">
                                <div className="flex items-center gap-2">
                                    <div>{post.author.name}</div>
                                    <Link
                                        className="p-1 border border-blue-500 text-sm text-blue-500 rounded-xl hover:bg-blue-200"
                                        href={`/blogs/${post.category.title}`}
                                    >
                                        {post.category.title}
                                    </Link>
                                </div>
                                <span className="font-normal text-xs hidden md:block my-2">
                                    {post.author.biography}
                                </span>
                                <div className="font-normal text-gray-500 text-sm">
                                    <span>
                                        {new Date(
                                            post.createdAt
                                        ).toLocaleDateString("fa-IR")}
                                    </span>
                                    <span className="mx-2">&bull;</span>
                                    <span>
                                        <span>خواندن</span>
                                        <span className="px-1">
                                            {post.readingTime}
                                        </span>
                                        <span>دقیقه</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <button>
                                <LinkIcon className="h-6 w-6 hover:text-black text-gray-500 cursor-pointer" />
                            </button>
                            <button className="mr-4 border border-gray-300 text-gray-500 hover:text-gray-600 rounded-full px-3 py-1 flex items-center">
                                <span className="ml-1 text-xs">
                                    {post.isBookmarked ? "ذخیره شده" : "ذخیره"}
                                </span>
                                {post.isBookmarked ? (
                                    <SolidBookmark className="h-6 w-6 fill-current" />
                                ) : (
                                    <BookmarkIcon className="h-6 w-6 stroke-current" />
                                )}
                            </button>
                        </div>
                    </header>
                    <main className="min-w-full prose prose-h1:text-2xl prose-img:w-full ">
                        <h1>{post.title}</h1>
                        <h2>عنوان تستی اول</h2>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا
                            با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                            علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                            ایجاد کرد، در این صورت می توان امید داشت که تمام و
                            دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
                            پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                            اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                            اساسا مورد استفاده قرار گیرد.
                        </p>
                        <img src={post.coverImage} alt="" />
                        <h2>عنوان تستی دوم</h2>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا
                            با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                            علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                            ایجاد کرد، در این صورت می توان امید داشت که تمام و
                            دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
                            پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                            اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                            اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی
                            با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                            مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                            فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                            بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                            و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                            توان امید داشت که تمام و دشواری موجود در ارائه
                            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                            نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                            گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                            از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و
                            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                            کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                            گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
                            می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                            طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                            پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
                            امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                            و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                            اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </main>
                    <section className="mt-4">
                        <div>
                            <PostInteraction blog={post} />
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default PostPage;

export const getServerSideProps = async (ctx) => {
    const { query, req } = ctx;
    const { data } = await http.get(
        `/posts/${query.postSlug}`,
        {
            headers: {
                Cookie: req.headers.cookie,
            },
        }
    );
    const { data: post } = data;
    return {
        props: {
            post: post,
        },
    };
};
