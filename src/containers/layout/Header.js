import { useAuth, useAuthDispatch } from "@/context/AuthContext";
import Link from "next/link";

const Header = () => {
    const { user, loading } = useAuth();
    const dispatch = useAuthDispatch() ;

    return (
        <header className="bg-white shadow-md py-2 mb-8">
            <div className="container mx-auto xl:max-w-screen-xl">
                <nav className="flex justify-between">
                    <ul className="flex items-center gap-x-5">
                        <li>
                            <Link href="/" className="py-2 block">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/blogs" className="py-2 block">
                                Blogs
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-x-4">
                        {loading ? (
                            "Loading..."
                        ) : user ? (
                            <>
                                <Link className="flex items-center py-2" href="/profile">
                                    Profile
                                    <div className="mr-1 text-xs text-gray-500">
                                        خوش آمدی {user.name}
                                    </div>
                                </Link>
                                <div className="cursor-pointer" onClick={()=>dispatch({type:"SIGNOUT"})}>
                                    خروج
                                </div>
                            </>
                        ) : (
                            <>
                                <Link className="py-2 block" href="/signup">
                                    ثبت نام
                                </Link>
                                <Link className="py-2 block" href="/signin">
                                    ورود
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
