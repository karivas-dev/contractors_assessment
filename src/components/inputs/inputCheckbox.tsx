import * as React from "react";

export default function InputCheckbox({children, id, name, value, checked}: {
    children: React.ReactNode,
    id: string,
    name: string,
    value: string,
    checked: boolean
}) {
    return (
        <div className="flex gap-2">
            <div className="flex h-6 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">
                    <input
                        defaultChecked={checked}
                        id={id}
                        name={name}
                        value={value}
                        type="checkbox"
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300
                        bg-white checked:border-main checked:bg-main indeterminate:border-main
                        indeterminate:bg-main focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-main disabled:border-gray-300 disabled:bg-gray-100
                        disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center
                        stroke-white group-has-disabled:stroke-gray-950/25"
                    >
                        <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                        />
                        <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                        />
                    </svg>
                </div>
            </div>
            <div className="text-sm/6">
                <label htmlFor="comments" className="">
                    {children}
                </label>
            </div>
        </div>
    );
}