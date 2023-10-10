import Cliente from "../models/cliente";

const getClientes = async () => {
  const clientes = await Cliente.findAll();
  return clientes;
};

export default async function Home() {
  const clientes = await getClientes();
  console.log(clientes);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <table className="w-full flex flex-col gap-3">
        <thead></thead>
        <tbody>
          {clientes.map((cliente) => {
            const clienteInfo = cliente.get({ plain: true });
            return (
              <tr key={clienteInfo.id_cliente} className="border p-4 text-left">
                <th>{clienteInfo.id_cliente}</th>
                <th>{clienteInfo.nome}</th>
                <th>{clienteInfo.morada}</th>
                <th>{clienteInfo.codigo_postal}</th>
                <th>{clienteInfo.distrito}</th>
                <th>{clienteInfo.concelho}</th>
                <th>{clienteInfo.localidade}</th>
                <th>{clienteInfo.nif}</th>
                <th>{clienteInfo.telefone}</th>
                <th>{clienteInfo.telemovel}</th>
                <th>{clienteInfo.tipo_cliente}</th>
                <th>{clienteInfo.contato_empresa}</th>
                <th>{clienteInfo.setorCliente}</th>
                <th>{clienteInfo.estado}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
