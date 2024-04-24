'use client';

import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipProvider } from "../ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { sideLinkFill } from "@/animation-variants";

interface sidelinkProps {
    href: string;
    label: string;
    tooltip?: string;
    icon?: React.ReactNode;
}

const SideLink: React.FC<sidelinkProps> = ({
    href,
    label,
    tooltip,
    icon,
}) => {

    const path = usePathname();

    const linkClass = clsx(
        'rounded-lg flex justify-center items-center h-10 w-10 relative overflow-hidden',
        {
            'text-primary-foreground': path === href,
            'bg-transparent text-background hover:text-primary': path !== href,
        }
    )

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    href={href}
                    aria-label={label}
                    className={linkClass}
                >
                    {href === path &&
                        <motion.div
                            className={`absolute w-10 h-10 rounded-lg bg-primary`}
                            variants={sideLinkFill}
                            initial="hidden"
                            animate="enter"
                            transition={{ type: 'ease-out' }}
                        ></motion.div>
                    }
                    <div className="z-10">
                        {icon ? icon : label}
                    </div>
                </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
                <span>{tooltip}</span>
            </TooltipContent>
        </Tooltip>
    )
}

export default SideLink;