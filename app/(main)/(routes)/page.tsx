import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <>
      <div className="flex justify-between m-auto">
        <p className="text-3xl font-bold text-indigo-500 py-4">
          Welcome to discord clone
        </p>
        <div className="flex items-center mt-4 mr-4 space-x-4 justify-between">
          <UserButton afterSignOutUrl="/" />
          <Button variant="default">Button</Button>
        </div>
      </div>
    </>
  );
}
