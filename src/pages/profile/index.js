import Layout from "@/containers/layout/Layout";
import { useSelector } from "react-redux";

const Profile = () => {
    const {user} = useSelector(state => state.userSignin) ;

    return (
        <Layout>
            <div>{user?.name}</div>
            <div>{user?.email}</div>
            <div>{user?.phoneNumber}</div>
        </Layout>
    );
};

export default Profile;
