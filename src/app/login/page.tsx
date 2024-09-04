import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {IconBrandGithub, IconBrandGoogle} from '@tabler/icons-react'
import Link from "next/link";

export default function LoginPage(){
    return (
        <div className='mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white
        md:border md:border-[#121212] dark:bg-white '>
            <h2 className='font-bold text-2xl'>Welcome to Tribe</h2>
            <p className='font-medium mt-2'>Please login.</p>
            <form className='mt-6 flex flex-col gap-3'>
                <div className='flex flex-col gap-3'>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="Enter email"
                        type="email"
                        name="email"
                    />
                    <Label>Password</Label>
                    <Input
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        name="password"
                    />
                </div>

                <button className='rounded-md mx-auto h-10 font-medium
                bg-gradient-to-br relative group/btn from-black dark:from-zinc-900
                shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
                dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]
                dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white
                ' type="submit">Login &rarr;</button>

                <p
                    className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'
                >Do not have an account? <Link href='/register'
                                               className='hover:underline underline-offset-2'>Register</Link></p>
                <div
                    className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full'>
                </div>

            </form>
            <section className='flex gap-2'>
                <form className='w-1/2'>
                    <button className='relative group/btn flex space-x-2 items-center justify-start w-full px-4
                        text-black rounded-md h-10 font-medium shadow-input bg-gray-200 dark:bg-zinc-900
                        dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]' type='submit'>
                        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">Github</span>
                    </button>
                </form>
                <form className='w-1/2'>
                    <button className='relative group/btn flex space-x-2 items-center justify-start w-full px-4
                        text-black rounded-md h-10 font-medium shadow-input bg-gray-200 dark:bg-zinc-900
                        dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]' type='submit'>
                        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">Google</span>
                    </button>
                </form>
            </section>
        </div>
    )
}