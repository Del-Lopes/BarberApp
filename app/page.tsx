import { Input } from "@/components/ui/input"
import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"

const Home = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá</h2>
        <p>Sexta feira, 28 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca"></Input>
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>
        <div className="relative h-[150px] w-full">
          <Image
            alt="Agende com os melhores"
            src="/banner pizza.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
