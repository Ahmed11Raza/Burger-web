export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US');
}

export function calculateDiscount(price: number, discount: number): number {
    return price - (price * (discount / 100));
}