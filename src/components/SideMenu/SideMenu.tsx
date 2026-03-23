import React, { useState } from "react";
import { Layout, Plus, Activity, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const [open, setOpen] = useState(false);
  const [isActive, setActive] = useState("Boards");

  return (
    <div className="flex h-[calc(100%-60px)] pl-6 w-60">
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed sm:static z-50 h-full transition-all duration-300
        ${open ? "w-72 translate-x-0" : "w-72 -translate-x-full sm:translate-x-0 sm:w-64"}`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <button
            className="sm:hidden"
            onClick={() => setOpen(false)}
          >
          </button>
        </div>
          <nav className="px-2 space-y-1 mt-2">
            <Item to="/" icon={<Layout size={18} />} label="Boards" onClick={() => setActive("Boards")} active={isActive === "Boards"} />
            <Item to="/templates" icon={<Plus size={18} />} label="Templates" onClick={() => setActive("Templates")} active={isActive === "Templates"} />
            <Item to="/home" icon={<Activity size={18} />} label="Home" onClick={() => setActive("Home")} active={isActive === "Home"} />
          </nav>

        <div className="my-3 border-t border-gray-400" />

        <div className="px-3 text-xs font-semibold text-gray-500">
          Workspaces
        </div>

        <div className="px-2 mt-2">
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-green-500 flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="text-sm text-gray-800">Trello Workspace</span>
            </div>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

    </div>
  );
}

type ItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
  to: string;
};

function Item({ icon, label, active, onClick, to }: ItemProps) {
  return (
    <Link
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm
        ${active
          ? "bg-blue-100 text-blue-600"
          : "text-gray-700 hover:bg-gray-200"}`}
      onClick={onClick} to={to}    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}