import HeaderRoutine from "./pages/Produto/components/header";
import Routines from "./pages/Produto/components/routines";

export default function Home() {
  return (
    <main className="h-screen w-full pb-10">
      <HeaderRoutine />
      <Routines />
    </main>
  );
}
