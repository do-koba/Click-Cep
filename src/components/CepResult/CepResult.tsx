import React from "react";

import "./CepResult.sass";

import { ViaCepResponse } from "../FormCep/types";

type Props = {
  data: ViaCepResponse;
};

export const CepResult: React.FC<Props> = ({ data }): React.JSX.Element => {
  const fields: Array<{
    label: string;
    value: string;
  }> = [
    { label: "CEP", value: data.cep },
    { label: "Logradouro", value: data.logradouro },
    { label: "Complemento", value: data.complemento },
    { label: "Bairro", value: data.bairro },
    { label: "Cidade", value: `${data.localidade} - ${data.uf}` },
    { label: "DDD", value: data.ddd },
    { label: "IBGE", value: data.ibge },
    { label: "SIAFI", value: data.siafi },
  ];

  return (
    <div className="cep-result">
      {fields.map((field) => (
        <p key={field.label}>
          <strong>{field.label}:</strong> {field.value || "N/A"}
        </p>
      ))}
    </div>
  );
};
