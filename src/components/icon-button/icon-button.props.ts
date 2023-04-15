import { DetailedHTMLProps, HTMLAttributes } from "react";
import up from './icon/up.svg';
import close from './icon/close.svg';
import menu from './icon/menu.svg';



export const icons = { up, close, menu };

export type Icontype = keyof typeof icons; 

export interface IconButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: Icontype;
	appearance: 'primary' | 'white';
}