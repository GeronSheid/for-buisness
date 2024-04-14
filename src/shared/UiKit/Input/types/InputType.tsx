import { ChangeEvent } from "react";

export interface InputProps {
    placeholder: string;
    value?: string;
    message?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}