const sales = [
    { amount: 10000, quantity: 10 },
    { amount: 8000, quantity: 8 },
    { amount: 60000, quantity: 6 },
    { amount: 4000, quantity: 4 },
];

const orderedSales = sales
    .map(sale => ({ ...sale, Total: sale.amount * sale.quantity }))
    .sort((a, b) => b.Total - a.Total);

console.log(orderedSales);
