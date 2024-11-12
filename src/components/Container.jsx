import Containerlist from "./containerlist";

function container() {
  const list = [
    { name: "History", id: 12 },
    {
      name: "Biology",
      id: 13,
    },
  ];

  return (
    <div className="container border border-s-4 justify-between ">
      <ul className="divide-x-2 ">
        {list.map((items) => (
          <Containerlist
            key={items.id}
            itemid={items.id}
            itemname={items.name}
          />
        ))}
      </ul>
    </div>
  );
}

export default container;
