import Layout from "@/containers/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

const Profile = () => {
    const {user} = useAuth() ;
    const router = useRouter() ;
    console.log(router.query);
    return (
        <Layout>
            <div>{user?.name}</div>
            <div>{user?.email}</div>
            <div>{user?.phoneNumber}</div>
        </Layout>
    );
};

export default Profile;
