'use client'
import BrandLogo from '@/components/brand/logo'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Image from 'next/image'
import GoogleLogo from "@/assets/other_branding/google-icon.svg"
import { motion } from "framer-motion"
import { signIn } from 'next-auth/react'
export default function SignInComponent() {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const googleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            await signIn("google", {
                callbackUrl: "/dashboard",
                redirect: true
            });
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(true);
        }
    }


    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
            }}
            className='container flex flex-col items-center justify-center gap-6 shadow-2xl rounded-2xl max-w-[400px] min-w-[320px] p-6'>
            <BrandLogo className={"text-6xl md:text-7xl"} />
            <form onSubmit={googleSignin} className='flex flex-col items-center justify-center gap-y-2 w-full'>
                <p>Sign In | Let&apos;s get started.</p>
                <div className="w-full flex items-center justify-center py-4 border-t border-black/10">
                    <Button disabled={isLoading} type='submit' className='rounded-none'>
                        Sign In with <Image src={GoogleLogo} alt="Google Logo" height={30} className='ml-1' />
                    </Button>
                </div>
            </form>
        </motion.div>
    )
}
