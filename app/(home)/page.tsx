import { Card } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Link from "next/link";
import {
  FaCheckCircle,
  FaHistory,
  FaListAlt,
  FaPlusCircle,
} from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-4">
        <Card>
          {/* Use o componente Link para navegar para a página de solicitação */}
          <Link href="/solicitacao">
            <div className="flex items-center justify-center py-8">
              <FaPlusCircle className="text-4xl text-blue-500 mr-2" />
              <h2>Criar Solicitação</h2>
            </div>
          </Link>
        </Card>

        <Card>
          <a href="/minhas-solicitacoes">
            <div className="flex items-center justify-center py-8">
              <FaListAlt className="text-4xl text-blue-500 mr-2" />
              <h2>Minhas Solicitações</h2>
            </div>
          </a>
        </Card>

        <Card>
          <a href="/aprovacao-pendentes">
            <div className="flex items-center justify-center py-8">
              <FaCheckCircle className="text-4xl text-blue-500 mr-2" />
              <h2>Aprovação Pendentes</h2>
            </div>
          </a>
        </Card>

        <Card>
          <a href="/historico-aprovacao">
            <div className="flex items-center justify-center py-8">
              <FaHistory className="text-4xl text-blue-500 mr-2" />
              <h2>Histórico de Aprovação</h2>
            </div>
          </a>
        </Card>
      </section>

      {/* Renderize o componente SolicitacaoPage aqui, se necessário */}
      {/* <SolicitacaoPage /> */}
    </div>
  );
}
