export function Stats({ items }) {
  if (items.length === 0) {
    return <p className="stats"> Start adding items! 🥼👕👖👟👞👠👚👗👛👢👜</p>;
  }
  const itemsLength = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = (packedItems / itemsLength) * 100;
  return (
    <footer className="stats">
      <em>
        {packedItems === itemsLength
          ? `You are ready to go 🚀`
          : `💼 You have ${itemsLength} items on your list ,and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
