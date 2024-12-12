import React from "react";
import { useDrop } from "react-dnd";

const Bin = ({ binnedItems }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "note",
    drop: () => ({ name: "the bin" }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? "lightgreen" : canDrop ? "lightyellow" : "white",
      }}
      className="border h-48"
    >
      <h2 className="text-center font-medium">Bin</h2>
      <div>
        {/* using forEach ,to check the binnedItems array to ensure that all items have unique id properties before rendering. */}
        {binnedItems.length > 0 ? (
        binnedItems.forEach((item, index) => (
          <div key={item.id || index}>
            <p>{item.text}</p>
          </div>
        ))
      ) : (
        <p>No items in the bin</p>
      )}
      </div>
    </div>
  );
};

export default Bin;
