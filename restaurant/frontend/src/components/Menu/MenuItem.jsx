const MenuItem = ({ item }) => (
    <div className="p-4 border rounded shadow-sm hover:shadow-md">
        {item.image && <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded mb-4" />}
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-gray-700">{item.description}</p>
        <p className="text-lg font-bold text-green-500">${item.price}</p>
    </div>
);

export default MenuItem;
