"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import { signup } from "@/utils/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../types/register";
import axios from "axios";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    const { fullName, auth_input, password, confirmPassword, acceptTerms } =
      data;
    // Remove confirmPassword & acceptTerms before sending
    const payload = { fullName, auth_input, password };

    // Validation inside RHF
    if (password !== confirmPassword) {
      setError("confirmPassword", { message: "Passwords do not match" });
      setIsLoading(false);
      return;
    }

    if (!acceptTerms) {
      setError("acceptTerms", { message: "You must accept the terms" });
      setIsLoading(false);
      return;
    }

    // send user data in database
    axios
      .post(process.env.NEXT_PUBLIC_BASEURL + "user/register", payload)
      .then((res) => {
        alert("data successfully add");
        console.log(res.data.data.role);
        //  export data = res?.data
        signup(res?.data?.data?.fullName, res?.data?.data?.auth_input, res?.data?.data?.password, res?.data?.data?.role);
        router.push("/otp");
        // }
      })
      .catch((err) => console.log(err?.response?.data?.message));
    // console.log(payload)

    //   try {
    //     const success = await signup(fullName, auth_input, password);
    //     if (success) {
    //       router.push('/otp');
    //     } else {
    //       setError("root", { message: "Failed to create account. Please try again." });
    //     }
    //   } catch (err) {
    //     setError("root", { message: "An error occurred. Please try again." });
    //   } finally {
    //     setIsLoading(false);
    //   }
  };

  return (
    <div className="min-h-screen  ">
      <Navbar />

      <div className="flex items-center justify-center min-h-screen pt-20 pb-12 px-4 md:px-0 bg-[#19182F] ">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Join Loop Nest
            </h1>
            <p className="text-gray-600">Start your learning journey today</p>
          </div>

          <Card className="shadow-lg bg-[#11102794] border-gray-700 ">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-white">
                Create Account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Global error */}
                {errors.root && (
                  <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                    {errors.root.message}
                  </div>
                )}

                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                      className="pl-10"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email or Phone
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="auth_input"
                      type="text"
                      placeholder="Enter your email or phone"
                      {...register("auth_input", {
                        required: "Email is required",
                      })}
                      className="pl-10"
                    />
                  </div>
                  {errors.auth_input && (
                    <p className="text-xs text-red-500">
                      {errors.auth_input.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                      })}
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <input
                    id="terms"
                    type="checkbox"
                    {...register("acceptTerms")}
                    className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded mt-1"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-700 leading-5"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-accent hover:text-accent-light"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-accent hover:text-accent-light"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.acceptTerms && (
                  <p className="text-xs text-red-500">
                    {errors.acceptTerms.message}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-white py-3 text-lg font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
