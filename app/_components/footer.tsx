import { Card, CardContent } from "@/components/ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            2025 Copyrights <span className="font-bold">DD Media</span>{" "}
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
