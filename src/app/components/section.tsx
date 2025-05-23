import React from "react";

type SectionProps = {
    title: string;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Section({title, children, ...props}: SectionProps) {
    return(
        <>
            <h2 {...props}>{title}</h2>
            {children}
        </>
    )
};