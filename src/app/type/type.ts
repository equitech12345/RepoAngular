export type product = {
    id: string;
    name: string;
    brand: string;
    category: string;
    price: number;
    quantity: string;
    in_stock: boolean;
    stock_quantity: number;
    image: string;
    description: string;
}

export type carrito = {
    id?: string;
    name: string;
    price: number;
    quantity: number;
}