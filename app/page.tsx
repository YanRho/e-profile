import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <div
        className="h-screen text-white bg-cover bg-center blur-sm"
        style={{
          backgroundImage: "url(/images/bg.jpg)",
        }}
      ></div>
      <Header />
    </>
  );
}
