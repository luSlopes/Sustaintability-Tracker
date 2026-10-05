import { Company } from "./find-companies";

export const companies = [
  {
    cnpj: "71.673.990/0001-77",
    razaoSocial: "Natura Cosméticos S.A.",
    siteUrl: "https://www.natura.com.br",
    email: null,
    descricao: "Cosméticos com uso de ingredientes da sociobiodiversidade",
    cidade: "Cajamar",
    estado: "SP",
    ramos: null,
  },
  {
    cnpj: "16.404.287/0001-55",
    razaoSocial: "Suzano S.A.",
    siteUrl: "https://www.suzano.com.br",
    email: null,
    descricao: "Celulose e papel a partir de florestas plantadas",
    cidade: "Salvador",
    estado: "BA",
    ramos: null,
  },
  {
    cnpj: "89.637.490/0001-45",
    razaoSocial: "Klabin S.A.",
    siteUrl: "https://www.klabin.com.br",
    email: null,
    descricao: "Papéis e embalagens de papelão ondulado",
    cidade: "São Paulo",
    estado: "SP",
    ramos: null,
  },
  {
    cnpj: "42.150.391/0001-70",
    razaoSocial: "Braskem S.A.",
    siteUrl: "https://www.braskem.com.br",
    email: null,
    descricao:
      "Resinas termoplásticas, incluindo polietileno de origem renovável",
    cidade: "Camaçari",
    estado: "BA",
    ramos: null,
  },
  {
    cnpj: "07.526.557/0001-00",
    razaoSocial: "Ambev S.A.",
    siteUrl: "https://www.ambev.com.br",
    email: null,
    descricao:
      "Bebidas, com foco em embalagens retornáveis e uso eficiente de água",
    cidade: "São Paulo",
    estado: "SP",
    ramos: null,
  },
];

export async function getCompanies(ramo?: string) {
  const filtradas = ramo
    ? companies.filter((c) =>
        c.ramos.some((r) => r.toLowerCase() === ramo.toLowerCase()),
      )
    : companies;

  return filtradas
    .map((c) => ({ ...c, ramos: c.ramos.join(", ") }))
    .sort((a, b) => a.razaoSocial.localeCompare(b.razaoSocial, "pt-BR"));
}
