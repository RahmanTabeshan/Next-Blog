import Layout from "@/containers/layout/Layout";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import * as Yup from "yup";
import Input from "@/components/FormInput/Input";
import { useAuthDispatch } from "@/context/AuthContext";

const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
};

const validationSchema = Yup.object({
    name: Yup.string()
        .required("نام و نام خانوادگی را وارد کنید")
        .min(6, "نام و نام خانوادگی باید حداقل شامل 6 کاراکتر باشد"),
    email: Yup.string()
        .required("ایمیل را وارد کنید")
        .email("ایمیل نامعتبر است"),
    phoneNumber: Yup.string()
        .required("شماره موبایل را وارد کنید")
        .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
        .nullable(),
    password: Yup.string()
        .required("رمز عبور را وارد کنید")
        .min(8, "رمز عبور باید حداقل شامل 8 کاراکتر باشد"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "رمز عبور همخوانی ندارد")
        .required("رمز عبور خود را وارد کنید"),
});

const Signup = () => {

    const dispatch = useAuthDispatch();

    const onSubmit = (values) => {
        const {confirmPassword , ...value} = values;
        dispatch({ type: "SIGNUP", values: value });
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return (
        <Layout>
            <Head>
                <title>My Website - SignUp</title>
            </Head>
            <div className="md:max-w-md px-4 container mx-auto">
                <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
                    <h1 className="font-black text-2xl text-violet-700 mb-4">
                        ثبت نام
                    </h1>
                    <Input
                        label="نام و نام خانوادگی"
                        name="name"
                        formik={formik}
                    />
                    <Input label="ایمیل" name="email" formik={formik} />
                    <Input
                        label="شماره همراه"
                        type="tel"
                        name="phoneNumber"
                        formik={formik}
                        placeholder="09123456789"
                    />
                    <Input
                        label="رمز ورود"
                        name="password"
                        type="password"
                        formik={formik}
                    />
                    <Input
                        label="تکرار رمز ورود"
                        name="confirmPassword"
                        type="password"
                        formik={formik}
                    />
                    <button
                        type="submit"
                        disabled={!formik.isValid}
                        className="w-full py-2 rounded-lg bg-violet-800 text-white"
                    >
                        ثبت نام
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

export default Signup;
