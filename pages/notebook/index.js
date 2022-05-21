import Notebook from "../../components/note/cards/Notebook";

export default function Index() {
  return (
    <div className="mx-auto container py-20 px-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="rounded">
          <Notebook />
        </div>
      </div>
    </div>
  );
}
