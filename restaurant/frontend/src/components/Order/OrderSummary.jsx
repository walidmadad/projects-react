const OrderSummary = ({ items }) => (
    <div className="p-4 bg-gray-100 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">Résumé de la commande</h2>
        <ul className="list-disc list-inside mb-2">
            {items.map((item, index) => (
                <li key={index} className="text-gray-700">{item.name}</li>
            ))}
        </ul>
        <p className="font-semibold">Total : ${items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
    </div>
);

export default OrderSummary;
