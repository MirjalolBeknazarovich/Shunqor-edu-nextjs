import { ProductModel } from "@/interface/propdutc.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    product: ProductModel;
}