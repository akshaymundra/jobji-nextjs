// *** variants ***

export const rootVariant = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    enter: {
        opacity: 1,
        scale: 1,
    }
}


export const sideLinkFill = {
    hidden: {
        scale: 0.5,
        opacity: 0,
    },
    enter: {
        scale: 1,
        opacity: 1,
    }
}


// *** transitions ***
export const rootTransition = {
    type: 'ease-out',
}