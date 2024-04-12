import { ChangeEvent } from "react";

export interface InputProps {
    placeholder: string;
    value?: string | undefined;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}