import { PageCategory, PageModel } from "@/interface/page.interface";
import { ProductModel } from "@/interface/propdutc.interface";

export interface CoursePageComponentProps {
    firstCategory: PageCategory;
    page: PageModel;
    products: ProductModel[];
}