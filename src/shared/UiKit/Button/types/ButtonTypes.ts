export interface IButton {
    type: 'link' | 'btn';
    btnType?: "submit" | "reset" | "button" | undefined;
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

