'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { rootTransition, rootVariant } from '@/animation-variants'

const template = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.main
            variants={rootVariant}
            initial="hidden"
            animate="enter"
            transition={rootTransition}
        >
            {children}
        </motion.main>
    )
}

export default template