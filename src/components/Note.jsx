import React from "react";
import { useDrag } from "react-dnd";

const Note = ({ note, binnedItems, setBinnedItems, setNotes }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "note",
    item: { id: note.id, name: note.text },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You threw ${item.name} into ${dropResult.name}`);

        // Avoid duplicates in binnedItems
        if (!binnedItems.some((binnedItem) => binnedItem.id === item.id)) {
          const updatedBinnedItems = [...binnedItems, { id: item.id, text: item.name }];
          setBinnedItems(updatedBinnedItems);
          localStorage.setItem("binnedItems", JSON.stringify(updatedBinnedItems));
        }

        // Remove the dropped note from notes
        setNotes((prevNotes) =>
          prevNotes.filter((note) => note.id !== item.id)
        );
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: "8px",
        margin: "4px",
        border: "1px solid black",
      }}
    >
      {note.text}
    </div>
  );
};

export default Note;
