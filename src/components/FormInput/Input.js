const InputComponent = ({
    label,
    formik,
    name,
    type,
    className,
    placeholder = "",
}) => {
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="flex flex-row mb-2 text-sm text-gray-500"
            >
                {label}
                {formik.touched[name] && formik.errors[name] ? (
                    <div className="flex-1 ml-2 text-rose-500 text-left text-xs">
                        {formik.errors[name]}
                    </div>
                ) : null}
            </label>
            <input
                className="text-left border p-2 text-sm rounded boredr-gray-200 outline-none w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type={type || "text"}
                dir="ltr"
                placeholder={placeholder}
                id={name}
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
            />
        </div>
    );
};

export default InputComponent;
