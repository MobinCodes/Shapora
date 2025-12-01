import Breadcrumb from "@/components/ui/Breadcrumb";

export default function PagesHeroHeader({title}) {
  return (
    <div className="flex flex-col items-center justify-center py-5 max-w-[1400px] w-full">
      <h1 className="text-2xl ">{title}</h1>
      <Breadcrumb />
    </div>
  );
}