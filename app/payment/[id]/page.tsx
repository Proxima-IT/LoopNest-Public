"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  CreditCard,
  Smartphone,
  Building2,
  Shield,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import { courses } from "@/utils/data";
import { isLoggedIn } from "@/utils/auth";
import axios from "axios";
import { useParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

export default function PaymentPage() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]); // Mock selected course
  const [paymentMethod, setPaymentMethod] = useState("mobile");
  const [mobileProvider, setMobileProvider] = useState("bkash");
  const [cuponCode, setCuponCode] = useState("");
  let code = cuponCode.toUpperCase();
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Form data states
  const [mobileNumber, setMobileNumber] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const router = useRouter();
  const params = useParams();
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASEURL}course/${params.id}`
        );
        // console.log("Course data:", response.data);
        if (response.data.success && response.data.data) {
          setSelectedCourse(response.data.data);
        } else {
          console.error("Failed to fetch course:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    if (params.id) {
      fetchCourse();
    }
  }, [params.id]);

  const subtotal = selectedCourse?.price || 0;
  let finalAmount = subtotal - discount;
  //  finalAmount = subtotal - (subtotal * discount / 100);

  const applyCoupon = (e: any) => {
    e.preventDefault();
    // post api
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASEURL}coupon/use`,
        { cuponCode: code, courseId: params.id },
        { withCredentials: true }
      )
      .then((result) => {
        if (result?.data?.data?.discountType === "amount") {
          console.log(result?.data?.data?.discountAmount);
          setDiscount(result?.data?.data?.discountAmount);
          toast.success("token successfully apply", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
        } else if (result?.data?.data?.discountType === "percentage") {
          setDiscount(result?.data?.data?.discountAmount);
          toast.success("token successfully apply", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
        }

        console.log(result?.data?.data?.discountValue);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        toast.error(err?.response?.data?.message, {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
    if (value !== "mobile") {
      setMobileProvider("");
    }
  };

  const handlePayment = async () => {
    console.log("Payment method:", paymentMethod);
    console.log("Course ID:", params.id);
    console.log("Final amount:", finalAmount);

    // Validate required fields based on payment method
    if (paymentMethod === "mobile") {
      if (!mobileProvider) {
        toast.error("Please select a mobile banking provider", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        return;
      }
      if (!mobileNumber.trim()) {
        toast.error("Please enter your mobile number", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        return;
      }
      if (!transactionId.trim()) {
        toast.error("Please enter your transaction ID", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        return;
      }
    } else if (paymentMethod === "bank") {
      if (!accountName.trim()) {
        toast.error("Please enter your account name", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        return;
      }
      if (!accountNumber.trim()) {
        toast.error("Please enter your account number", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        return;
      }
      if (!bankName.trim()) {
        toast.error("Please enter your bank name", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        return;
      }
    }

    setIsLoading(true);

    try {
      let requestBody;

      if (paymentMethod === "mobile") {
        // Mobile banking payment
        requestBody = {
          courseId: params.id,
          paymentType: "mobile_banking",
          paymentMethod: mobileProvider,
          price: finalAmount,
          cuponCode,
          transaction_id: transactionId,
          send_number: mobileNumber,
        };
      } else if (paymentMethod === "bank") {
        // Bank transfer payment
        requestBody = {
          courseId: params.id,
          paymentType: "bank",
          paymentMethod: "bank",
          cuponCode,
          price: finalAmount,
          account_name: accountName,
          bank_name: bankName,
          account_number: accountNumber,
        };
      } else {
        // Card payment (if needed in future)
        requestBody = {
          courseId: params.id,
          paymentType: "card",
          cuponCode,
          paymentMethod: "card",
          price: finalAmount,
        };
      }

      console.log("Sending payment request:", requestBody);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}payment`,
        requestBody,
        {
          withCredentials: true, // This sends cookies
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success(
          "Payment successful! You are now enrolled in the course.",
          {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          }
        );

        router.push("/student-dashboard");
      } else {
        alert("Payment failed: " + (response.data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedCourse) {
    return (
      <div className="min-h-screen bg-[#010019e7]">
        <Navbar />
        <div className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
                <p className="text-white text-lg">Loading course details...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#010019e7]">
      <Navbar />

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.back()}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">
                Complete Your Purchase
              </h1>
              <p className="text-gray-600">
                Secure checkout powered by industry-standard encryption
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Course Summary */}
              <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                <CardHeader>
                  <CardTitle className="text-white">Course Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    {/* <Image
                      src={selectedCourse.image}
                      alt={selectedCourse.title}
                      width={100}
                      height={60}
                      className="rounded-lg object-cover"
                    /> */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-200">
                        {selectedCourse?.title || "Loading..."}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {selectedCourse?.batchName || ""}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{selectedCourse?.moduleCount || 0} modules</span>
                        <span>
                          {selectedCourse?.projectCount || 0} projects
                        </span>
                        <span>
                          {selectedCourse?.assignmentCount || 0} assignments
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">
                        ৳{selectedCourse?.price || 0}
                      </div>
                      {selectedCourse?.originalPrice &&
                        selectedCourse.originalPrice > 0 && (
                          <div className="text-sm text-gray-400 line-through">
                            ৳{selectedCourse.originalPrice}
                          </div>
                        )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={handlePaymentMethodChange}
                  >
                    <div className="space-y-4">
                      {/* <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="card" id="card" />
                        <CreditCard className="w-5 h-5 text-gray-400" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          Credit/Debit Card
                        </Label>
                        <div className="flex space-x-2">
                          <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                            VISA
                          </div>
                          <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                            MC
                          </div>
                        </div>
                      </div> */}

                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="mobile" id="mobile" />
                        <Smartphone className="w-5 h-5 text-gray-400" />
                        <Label
                          htmlFor="mobile"
                          className="flex-1 cursor-pointer"
                        >
                          Mobile Banking
                        </Label>
                      </div>

                      {/* Mobile Banking Providers - Only show when mobile is selected */}
                      {paymentMethod === "mobile" && (
                        <div className="ml-8 space-y-3 border-l-2 border-gray-600 pl-4">
                          <RadioGroup
                            value={mobileProvider}
                            onValueChange={setMobileProvider}
                          >
                            <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                              <RadioGroupItem value="bkash" id="bkash" />
                              <div className="w-6 h-6 bg-pink-600 rounded text-white text-xs flex items-center justify-center font-bold">
                                bK
                              </div>
                              <Label
                                htmlFor="bkash"
                                className="flex-1 cursor-pointer"
                              >
                                bKash
                              </Label>
                            </div>

                            <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                              <RadioGroupItem value="nagad" id="nagad" />
                              <div className="w-6 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                                NG
                              </div>
                              <Label
                                htmlFor="nagad"
                                className="flex-1 cursor-pointer"
                              >
                                Nagad
                              </Label>
                            </div>

                            <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                              <RadioGroupItem value="rocket" id="rocket" />
                              <div className="w-6 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                                RK
                              </div>
                              <Label
                                htmlFor="rocket"
                                className="flex-1 cursor-pointer"
                              >
                                Rocket
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      )}

                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="bank" id="bank" />
                        <Building2 className="w-5 h-5 text-gray-400" />
                        <Label htmlFor="bank" className="flex-1 cursor-pointer">
                          Bank Transfer
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Details Form */}
              {paymentMethod === "card" && (
                <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                  <CardHeader>
                    <CardTitle>Card Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {paymentMethod === "mobile" && mobileProvider && (
                <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                  <CardHeader>
                    <CardTitle>
                      Mobile Banking -{" "}
                      {mobileProvider.charAt(0).toUpperCase() +
                        mobileProvider.slice(1)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber">Mobile Number</Label>
                      <Input
                        id="mobileNumber"
                        placeholder="+880 1234 567890"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="transactionId">Transaction ID</Label>
                      <Input
                        id="transactionId"
                        placeholder="TraxID123"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                      />
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        <p>
                          <strong>
                            আমাদের বিকাশ/নগদ/রকেট নম্বর &quot;01904814714&quot;,
                            এই নম্বরে সেন্ডমানী করুন এবং আপনার পেমেন্ট ইনফরমেশন
                            দিয়ে পেমেন্ট সম্পূর্ণ করুন। wm
                          </strong>
                        </p>
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        You will receive a payment request on your{" "}
                        {mobileProvider} app after clicking &quot;Confirm
                        Payment&quot;.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {paymentMethod === "bank" && (
                <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                  <CardHeader>
                    <CardTitle>Bank Transfer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-gray-50 border rounded-lg">
                      <h4 className="font-semibold mb-2">Bank Details:</h4>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p>
                          <strong>Bank:</strong> Islami Bank Bangladesh PLC
                        </p>
                        <p>
                          <strong>Account Name:</strong> TAHSIN AHMAD
                        </p>
                        <p>
                          <strong>Account No:</strong> 20507146700016100
                        </p>
                        <p>
                          <strong>Branch:</strong> Monipuri Para Sub-Branch,
                          Farmgate
                        </p>
                        <p>
                          <strong>Routing No:</strong> 714
                        </p>
                        <p>
                          <strong>Swift Code:</strong> IBBLBDDH
                        </p>
                        <p>
                          <strong>Amount:</strong> ৳
                          {finalAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accountName">Account Name</Label>
                      <Input
                        id="accountName"
                        placeholder="Your Account Name"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input
                        id="accountNumber"
                        placeholder="Your Account Number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bankName">Bank Name</Label>
                      <Input
                        id="bankName"
                        placeholder="Your Bank Name"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Course Price</span>
                        <span>৳{subtotal.toLocaleString()}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount</span>
                          <span>-৳{discount.toLocaleString()}</span>
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-accent">
                        ৳{finalAmount.toLocaleString()}
                      </span>
                    </div>

                    {/* Coupon Code */}
                    <div className="space-y-2">
                      <Label htmlFor="coupon">Coupon Code</Label>
                      <div className="flex space-x-2">
                        <Input
                          id="coupon"
                          placeholder="Enter coupon"
                          value={cuponCode}
                          onChange={(e) => setCuponCode(e.target.value)}
                        />
                        <Button
                          onClick={applyCoupon}
                          variant="outline"
                          size="sm"
                        >
                          Apply
                        </Button>
                      </div>
                      {/* <p className="text-xs text-gray-500">Try &quot;welcome10&quot; for 10% off</p> */}
                    </div>

                    <Button
                      onClick={handlePayment}
                      className="w-full bg-accent hover:bg-accent-light text-white text-lg font-semibold py-3"
                      disabled={isLoading}
                    >
                      {isLoading
                        ? "Processing..."
                        : `Pay ৳${finalAmount.toLocaleString()}`}
                    </Button>

                    {/* <div className="text-center text-xs text-gray-500 space-y-1">
                      <div className="flex items-center justify-center space-x-1">
                        <Shield className="w-3 h-3" />
                        <span>Secure 256-bit SSL encryption</span>
                      </div>
                      <p>30-day money-back guarantee</p>
                    </div> */}
                  </CardContent>
                </Card>

                {/* What You'll Get */}
                <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                  <CardHeader>
                    <CardTitle>কোর্স থেকে আপনি কি কি পাবেনঃ </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedCourse.courseFeatures &&
                        selectedCourse.courseFeatures.map(
                          (feature: any, index: number) => (
                            <div
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">
                                {feature.value}
                              </span>
                            </div>
                          )
                        )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}
