import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="mx-7 md:mr-12 md:ml-52 mt-32 mb-20 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Scraping Results</h1>
      <h2 className="mb-5 text-gray-400">We wont be long...</h2>

      <div className="flex flex-col space-y-8">
        <Skeleton className="w-full h-[256px]" />
        <Skeleton className="w-full h-[256px]" />
        <Skeleton className="w-full h-[256px]" />
        <Skeleton className="w-full h-[256px]" />
        <Skeleton className="w-full h-[256px]" />
        <Skeleton className="w-full h-[256px]" />
        <Skeleton className="w-full h-[256px]" />
        <Skeleton className="w-full h-[256px]" />
      </div>
    </div>
  );
}

export default Loading;
