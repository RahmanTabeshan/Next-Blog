import Layout from "@/containers/layout/Layout";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import * as Yup from "yup";
import Input from "@/components/FormInput/Input";
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux" ;
import { signinUser } from "@/redux/user/userActions";

const initialValues = {
    email: "",
    password: "",
};
const validationSchema = Yup.object({
    email: Yup.string()
        .required("ایمیل را وارد کنید")
        .email("ایمیل نامعتبر است"),
    password: Yup.string()
        .required("رمز عبور را وارد کنید")
        .min(8, "رمز عبور باید حداقل شامل 8 کاراکتر باشد"),
});

const RegisterForm = () => {

    const {loading , user , error} = useSelector(state => state.userSignin) ;
    const dispatch = useDispatch() ;
    const router = useRouter();

    const onSubmit = (values) => {
        const { email, password } = values;
        dispatch(signinUser({email , password})) ;
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    if(user){
        Router.push("/")
    }

    return (
        <Layout>
            <Head>
                <title>My Website - SignIn</title>
            </Head>
            <div className="md:max-w-md px-4 container mx-auto">
                {error && <div>{error}</div>}
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col space-y-4"
                >
                    <h1 className="font-black text-2xl text-violet-700 mb-4">
                        ورود
                    </h1>
                    <Input label="ایمیل" name="email" formik={formik} />
                    <Input
                        label="رمز ورود"
                        name="password"
                        type="password"
                        formik={formik}
                    />
                    <button
                        type="submit"
                        disabled={!formik.isValid || loading }
                        className="w-full py-2 rounded-lg bg-violet-800 text-white"
                    >
                        {loading ? "در حال انجام درخواست..." : "ورود"}
                    </button>
                    <Link href="/signup">
                        <p className="mt-4 py-4 cursor-pointer">
                            هنوز ثبت نام نکردی ؟ ثبت نام
                        </p>
                    </Link>
                </form>
            </div>
        </Layout>
    );
};

export default RegisterForm;
