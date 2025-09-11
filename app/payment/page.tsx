'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, CreditCard, Smartphone, Building2, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import { courses } from '@/utils/data';
import { isLoggedIn } from '@/utils/auth';

export default function PaymentPage() {
  const [selectedCourse] = useState(courses[0]); // Mock selected course
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login');
    }
  }, [router]);

  const subtotal = selectedCourse.price;
  const finalAmount = subtotal - discount;

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'welcome10') {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  const handlePayment = async () => {
    setIsLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, you would integrate with a payment gateway
    alert('Payment successful! You are now enrolled in the course.');
    router.push('/');
  };

  if (!selectedCourse) {
    return null;
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
              <h1 className="text-3xl font-bold text-white">Complete Your Purchase</h1>
              <p className="text-gray-600">Secure checkout powered by industry-standard encryption</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Course Summary */}
              <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                <CardHeader>
                  <CardTitle className='text-white'>Course Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <Image
                      src={selectedCourse.image}
                      alt={selectedCourse.title}
                      width={100}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-200">{selectedCourse.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{selectedCourse.batchName}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{selectedCourse.moduleCount} modules</span>
                        <span>{selectedCourse.projectCount} projects</span>
                        <span>{selectedCourse.assignmentCount} assignments</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">
                        ৳{selectedCourse.price.toLocaleString()}
                      </div>
                      {selectedCourse.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">
                          ৳{selectedCourse.originalPrice.toLocaleString()}
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
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
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
                      </div>

                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="mobile" id="mobile" />
                        <Smartphone className="w-5 h-5 text-gray-400" />
                        <Label htmlFor="mobile" className="flex-1 cursor-pointer">
                          Mobile Banking
                        </Label>
                        <div className="flex space-x-2 text-sm text-gray-600">
                          <span>bKash</span>
                          <span>•</span>
                          <span>Nagad</span>
                          <span>•</span>
                          <span>Rocket</span>
                        </div>
                      </div>

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
              {paymentMethod === 'card' && (
                <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                  <CardHeader>
                    <CardTitle>Card Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
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

              {paymentMethod === 'mobile' && (
                <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                  <CardHeader>
                    <CardTitle>Mobile Banking</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber">Mobile Number</Label>
                      <Input id="mobileNumber" placeholder="+880 1234 567890" />
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        You will receive a payment request on your mobile banking app after clicking &quot;Confirm Payment&quot;.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {paymentMethod === 'bank' && (
                <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                  <CardHeader>
                    <CardTitle>Bank Transfer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-gray-50 border rounded-lg">
                      <h4 className="font-semibold mb-2">Bank Details:</h4>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p><strong>Account Name:</strong> Loop Nest Limited</p>
                        <p><strong>Bank:</strong> Dutch-Bangla Bank</p>
                        <p><strong>Account Number:</strong> 123-456-789012</p>
                        <p><strong>Branch:</strong> Dhanmondi Branch</p>
                        <p><strong>Amount:</strong> ৳{finalAmount.toLocaleString()}</p>
                      </div>
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
                      <span className="text-accent">৳{finalAmount.toLocaleString()}</span>
                    </div>

                    {/* Coupon Code */}
                    <div className="space-y-2">
                      <Label htmlFor="coupon">Coupon Code</Label>
                      <div className="flex space-x-2">
                        <Input
                          id="coupon"
                          placeholder="Enter coupon"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <Button onClick={applyCoupon} variant="outline" size="sm">
                          Apply
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500">Try &quot;welcome10&quot; for 10% off</p>
                    </div>

                    <Button
                      onClick={handlePayment}
                      className="w-full bg-accent hover:bg-accent-light text-white text-lg font-semibold py-3"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Processing...' : `Pay ৳${finalAmount.toLocaleString()}`}
                    </Button>

                    <div className="text-center text-xs text-gray-500 space-y-1">
                      <div className="flex items-center justify-center space-x-1">
                        <Shield className="w-3 h-3" />
                        <span>Secure 256-bit SSL encryption</span>
                      </div>
                      <p>30-day money-back guarantee</p>
                    </div>
                  </CardContent>
                </Card>

                {/* What You'll Get */}
                <Card className="border-gray-800 bg-[#11102767] text-gray-400">
                  <CardHeader>
                    <CardTitle>What You&apos;ll Get</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedCourse?.features?.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}