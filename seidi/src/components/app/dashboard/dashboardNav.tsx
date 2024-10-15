import { authOptions, CustomSession } from '@/app/api/auth/[...nextauth]/options';
import { cn } from '@/lib/utils'
import { getServerSession } from 'next-auth';
import React from 'react'
import HeaderClient from './headerClient';
export default async function DashboardNav() {


    const session: CustomSession | null = await getServerSession(authOptions);

    return (
        <>
        {/* <header className={cn('py-4 px-6 sticky top-0 z-10')}> */}
            <HeaderClient session={session} />
        {/* </header> */}
        
        </>
    )
}
