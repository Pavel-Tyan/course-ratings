import {FirstLevelMenuItem} from "@/interfaces/menu.interface";
import CourseIcon from "@/helpers/icons/courses.svg";
import {TopLevelCategory} from "@/interfaces/page.interface";
import ServicesIcon from "@/helpers/icons/services.svg";
import BooksIcon from "@/helpers/icons/books.svg";
import ProductsIcon from "@/helpers/icons/products.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CourseIcon/>, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products }
];