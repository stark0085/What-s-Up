import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import axios from 'axios'
import { z } from "zod";
import { toast, Toaster } from "react-hot-toast";

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "At least 8 characters").required("Required")
}).required();
type FormData = Yup.InferType<typeof validationSchema>;

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm < FormData > ({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });

    const submitData = async (data: FormData) => {
        try {
            const AxiosResponse = await axios.post(
                "http://localhost:3000/api/user/signup",
                data,
                {
                    validateStatus: (status) => {
                        return status < 600;
                    },
                })
            if (AxiosResponse.data.code == 0) {
                toast.success(AxiosResponse.data.message);
                console.log(AxiosResponse.data)
            }
            else {
                toast.error(AxiosResponse.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <section className="flex min-h-screen items-center justify-center bg-gray-100">
            <Toaster />
            <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-center text-2xl font-bold text-gray-900">
                    Create an Account
                </h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Join us for a seamless experience.
                </p>

                <form className="mt-6 space-y-4 mb-4" onSubmit={handleSubmit(submitData)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            {...register("name", { required: "Your name is required" })}
                            aria-invalid={errors.name ? "true" : "false"}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Your Email
                        </label>
                        <input
                            {...register("email", { required: "Email Address is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                            type="email"
                            className="w-full mt-1 rounded-md border border-gray-300 p-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input {...register('password', { required: "Password is required" })}
                            className="w-full mt-1 rounded-md border border-gray-300 p-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your Password"
                            type="password"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white font-medium hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-blue-600 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Signup;