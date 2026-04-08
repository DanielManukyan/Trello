import { useState } from "react";
import { useAppDispatch } from "../../shared/lib/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { createBoard } from "../../shared/api/api";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const backgrounds = [
  "/images/bg1.jpg",
  "/images/bg2.jpg",
  "/images/bg3.jpg",
  "/images/bg4.jpg",
];

const colors = [
  "#c7d2fe",
  "#38bdf8",
  "#1d4ed8",
  "#9333ea",
  "#ec4899",
];

function CreateBoardModal({ open, onClose }: ModalProps) {
  const [title, setTitle] = useState("");
  const [bg, setBg] = useState<string>(backgrounds[0]);
  const [status, setStatus] = useState("Private");
  const dispatch = useAppDispatch()

  if (!open) return null;

  const handleAddBoard = () => {
    if (!title) return;

    dispatch(createBoard({
        id: nanoid(), 
        title,
        bgColor: bg,
        status: status || "Private",
    }));

        setTitle("");
        setBg(backgrounds[0]);
        setStatus("Private");

        onClose();
    };

  return (
    <div className="absolute top-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-100 bg-white rounded-xl shadow-lg p-4 relative">
        
        <div className="flex justify-center items-center mb-4 relative">
          <h2 className="text-lg font-semibold">Create board</h2>
          <button
            onClick={onClose}
            className="absolute right-0 text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>
        <div
          className="w-full h-28 rounded-md mb-4 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: bg?.startsWith("#") ? undefined : `url(${bg})`,
            backgroundColor: bg?.startsWith("#") ? bg : undefined,
          }}
        >
          <div className="bg-white/70 p-2 rounded">{title}</div>
        </div>


        <p className="text-sm font-medium mb-2">Background</p>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {backgrounds.map((item) => (
            <div
              key={item}
              onClick={() => setBg(item)}
              className="h-12 rounded cursor-pointer bg-cover bg-center border"
              style={{ backgroundImage: `url(${item})` }}
            />
          ))}
        </div>


        <div className="flex gap-2 mb-4">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => setBg(color)}
              className="w-10 h-10 rounded cursor-pointer"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>


        <label className="text-sm font-medium">
          Board title <span className="text-red-500">*</span>
        </label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-md p-2 mt-1 mb-1 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {!title && (
          <p className="text-sm text-gray-500 mb-3">
            👋 Board title is required
          </p>
        )}


        <p className="text-sm font-medium mb-1">Visibility</p>
        <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded-md p-2 mb-4"
        >
            <option value="Workspace">Workspace</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
        </select>


        <button
            disabled={!title}
            onClick={handleAddBoard}
            className={`w-full py-2 rounded-md mb-2 ${
                title
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
        >
            Create
        </button>

        <button className="w-full py-2 rounded-md bg-gray-100">
          Start with a template
        </button>
      </div>
    </div>
  );
}

export default CreateBoardModal;