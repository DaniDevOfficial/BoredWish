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
        primary: "bg-blue-500 hover:bg-blue-600 text-white",
        secondary: "bg-gray-500 hover:bg-gray-600 text-white",
        danger: "bg-red-500 hover:bg-red-600 text-white"
    };

    return <button className={clsx(className, BUTTON_VARIANTS[variant])} onClick={onClick}>{children}</button>;
}