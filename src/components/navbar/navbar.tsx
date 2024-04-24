'use client';

import { signIn } from "next-auth/react"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center gap-2 bg-background p-2 px-3 h-[57px] border-b border-b-slate-200">

            <h2 className="text-xl font-semibold antialiased">
                Home
            </h2>

            <div className="flex gap-2">
                <Button
                    size={'icon'}
                    variant={"ghost"}
                >
                    Dark
                </Button>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            size={'sm'}
                            onClick={() => signIn('github')}
                        >
                            Sign in
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={5} side="right">
                        Sign in using Github
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}

export default Navbar