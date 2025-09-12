"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Phone, MessageCircle } from "lucide-react"

type EnrollmentStatus = "pending" | "approved"

export default function EnrollmentStatusPage() {
  // This would typically come from your backend/database
  const [status, setStatus] = useState<EnrollmentStatus>("pending")

  const handleStatusChange = () => {
    setStatus(status === "pending" ? "approved" : "pending")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4">
              {status === "pending" ? (
                <Clock className="h-16 w-16 text-amber-500" />
              ) : (
                <CheckCircle className="h-16 w-16 text-green-500" />
              )}
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {status === "pending" ? "ইনরোলমেন্ট প্রক্রিয়াধীন" : "ইনরোলমেন্ট সফল!"}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {status === "pending" ? (
              <div className="text-center space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  আপনাকে ধন্যবাদ ইনরোলমেন্ট এর জন্যে। আমাদের টিম থেকে ১২ ঘণ্টার ভিতরে আপনার ইনরোলমেন্টটি গ্রহণ করা হবে।
                </p>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <p className="text-amber-800 dark:text-amber-200 font-medium mb-3">জরুরি প্রয়োজনে যোগাযোগ করুন:</p>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold text-amber-800 dark:text-amber-200">01610362700</span>
                    <MessageCircle className="h-5 w-5 text-green-600 ml-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">(WhatsApp)</span>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="animate-pulse flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>আপনার ইনরোলমেন্ট প্রক্রিয়া করা হচ্ছে...</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  আপনার ইনরোলমেন্ট সফল হয়েছে। আপনার কোর্সটি ১ই অক্টোবর আপনার ড্যাশবোর্ডে যুক্ত হয়ে যাবে।
                </p>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <p className="text-green-800 dark:text-green-200 font-medium mb-4">
                    জয়েন করুন আমাদের কোর্সের স্পেশাল কমিউনিটি গ্রুপে
                  </p>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                    onClick={() => window.open("#", "_blank")}
                  >
                    কমিউনিটি গ্রুপে যোগ দিন
                  </Button>
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <span>আপনার কোর্স অ্যাক্সেস শীঘ্রই সক্রিয় হবে</span>
                  </div>
                </div>
              </div>
            )}

            {/* Demo button to toggle status - remove in production */}
            {/* <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button variant="outline" onClick={handleStatusChange} className="w-full text-sm bg-transparent">
                Demo: Toggle Status ({status === "pending" ? "Show Approved" : "Show Pending"})
              </Button>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
