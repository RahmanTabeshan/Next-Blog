import Layout from "@/containers/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <div className="flex flex-col items-center w-full h-screen py-5">
                <h1 className="text-xl font-bold">This is Home Page</h1>
            </div>
        </Layout>
    );
};

export default Home;
