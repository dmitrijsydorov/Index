declare function sumArray(numbers: number[]): number;
type User = {
    name: string;
    age: number;
    isActive: boolean;
};
declare function createUser(name: string, age: number, isActive?: boolean): User;
declare enum OrderStatus {
    Pending = 0,
    Shipped = 1,
    Delivered = 2,
    Cancelled = 3
}
declare function getOrderStatus(status: OrderStatus): string;
export { sumArray, createUser, OrderStatus, getOrderStatus };
//# sourceMappingURL=function.d.ts.map