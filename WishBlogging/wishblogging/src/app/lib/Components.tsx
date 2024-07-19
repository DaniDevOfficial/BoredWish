"use client"
import clsx from 'clsx';
import React from 'react';
interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "danger";
}

export function Button({ onClick, children, className, variant = "primary" }: ButtonProps) {

    const BUTTON_VARIANTS = {
        primary: "bg-teal-500 hover:bg-teal-600 text-white py-2 px-3",
        secondary: "bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-3",
        danger: "bg-red-500 hover:bg-red-600 text-white py-2 px-3"
    };
    const BUTTON_BASE = "rounded-lg transition-colors duration-300 font-semibold text-black ";
    return <button className={clsx(className, BUTTON_BASE, BUTTON_VARIANTS[variant])} onClick={onClick}>{children}</button>;
}