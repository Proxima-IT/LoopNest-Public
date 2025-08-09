'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import Navbar from '@/components/Navbar';
import { verifyOTP } from '@/utils/auth';

export default function OTPPage() {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const success = await verifyOTP(otp);
      if (success) {
        router.push('/');
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    setCanResend(false);
    setError('');
    // In a real app, you would call an API to resend the OTP
    console.log('Resending OTP...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-screen pt-20 pb-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Account</h1>
            <p className="text-gray-600">
              We&apos;ve sent a 6-digit verification code to your email/phone
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Enter OTP</CardTitle>
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
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button
                onClick={handleVerify}
                className="w-full bg-accent hover:bg-accent-light text-white py-3 text-lg font-semibold"
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
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
    </div>
  );
}