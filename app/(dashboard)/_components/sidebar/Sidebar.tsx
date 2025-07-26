import List from "./List";
import NewButton from "./NewButton";

function Sidebar() {
  return (
    <aside className="fixed h-full z-10 left-0 w-[60px] p-3 bg-blue-500 text-white space-y-4">
      <NewButton />
      <List />
    </aside>
  );
}

export default Sidebar;
