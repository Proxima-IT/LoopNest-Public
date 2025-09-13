"use client";

import { useState, useEffect, useContext } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { DataContext } from "@/providers/DataProvider";
import { toast, ToastContainer } from "react-toastify";

export default function OTPPage() {
  const params = useSearchParams();
  console.log(params);
  const auth_input = params.get("auth_input");

  console.log(auth_input)
  // const { user} = useContext(DataContext)
  // console.log(user)
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  // const [otp, setOtp] = useState('');
  // console.log(user)
  const router = useRouter();
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleVerify = async () => {
    const userData = localStorage.getItem("currentUser");
    const user = userData ? JSON.parse(userData) : null;
    // console.log({ otpCode:otp,auth_input: user?.email})
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}user/verify-otp`,
        { otpCode: otp, auth_input }
      );
      console.log(res.data);
      if (res.data?.success) {
        toast.success("Verification Successful", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        router.push("/login"); // redirect to dashboard/home
      } else {
        setError(res.data?.message || "Invalid OTP. Please try again.");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Server error. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    setCanResend(false);
    setError("");
    // TODO: Call resend OTP API
    console.log("Resending OTP...");
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}user/resend-otp`, { auth_input })
      .then((result) => {
        console.log(result?.data?.data);
        alert("otp successfully send");
        // setCourse(result?.data?.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex items-center justify-center min-h-screen pt-20 pb-12 px-4 md:px-0">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Verify Your Account
            </h1>
            <p className="text-gray-600">
              We&apos;ve sent a 6-digit verification code to your email/phone
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                Enter OTP
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}

              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                  onComplete={handleVerify}
                >
                  <InputOTPGroup>
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button
                onClick={handleVerify}
                className="w-full bg-accent hover:bg-accent-light text-white py-3 text-lg font-semibold"
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">
                  Didn&apos;t receive the code?
                </p>

                {canResend ? (
                  <Button
                    variant="link"
                    onClick={handleResend}
                    className="text-accent hover:text-accent-light p-0 h-auto font-semibold"
                  >
                    Resend OTP
                  </Button>
                ) : (
                  <p className="text-sm text-gray-500">
                    Resend OTP in {timeLeft}s
                  </p>
                )}
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  For testing purposes, use OTP: 123456
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}
