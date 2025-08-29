import { Input } from "@/components/ui/input"
import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/barbershop-item"

const Home = async () => {
  // chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        {/* texto */}
        <h2 className="text-xl font-bold">Olá, Del!</h2>
        <p>Sexta feira, 28 de agosto</p>

        {/* busca */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca"></Input>
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende com os melhores"
            src="/banner pizza.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTO */}
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Agendamentos
        </h2>
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/* Direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">08</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
