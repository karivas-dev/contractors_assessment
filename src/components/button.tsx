import * as React from "react";

export default function Button({children, text, variant, ...rest}: {
    children?: React.ReactNode,
    text?: string,
    variant: "main" | "secondary" | "neutral" | "outline"
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const variants = {
        main: "bg-white outline outline-[#deceff] text-black hover:bg-[#831ee3] hover:outline-0 hover:text-white active:bg-main disabled:text-[#828282] disabled:bg-transparent disabled:outline-0",
        secondary: "text-[#023939] bg-secondary hover:bg-secondary-300 focus-visible:ring-4 focus-visible:ring-[#0C66E433] active:bg-[#22bebe] disabled:bg-[#b3eded] disabled:text-[#22b1b1]",
        neutral: "text-[#18243e] bg-white outline outline-[#b4bac5] hover:bg-neutral-50 focus-visible:ring-4 focus-visible:ring-[#0C66E433] active:bg-[#ecedf2] disabled:bg-[#ecedf2] disabled:text-[#888fa8]",
        outline: "outline outline-secondary-400 text-secondary-400 hover:outline-[#3ce0e0] hover:text-[#3ce0e0] active:outline-[#28b9b9] active:text-[#28b9b9] disabled:text-secondary disabled:outline-secondary disabled:bg-transparent",
    }

    return (
        <button
            type="button" {...rest}
            className={`rounded-full px-[16px] py-[12px] text-sm font-medium focus-visible:outline focus-visible:outline-[#2a9fff] ${variants[variant]}`}
        >
            {children || text}
        </button>
    );
}