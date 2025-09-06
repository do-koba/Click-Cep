import React, { useState } from "react";

import "./FormCep.sass";

import { ViaCepResponse } from "./types";

import { Input, Button, Label } from "../../helpers";

import { CepResult } from "../CepResult/CepResult";

export const FormCep: React.FC = (): React.JSX.Element => {
  const [cep, setCep] = useState("");
  const [data, setData] = useState<ViaCepResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 8);
    if (value.length > 5) {
      value = value.replace(/(\d{5})(\d{1,3})/, "$1-$2");
    }
    setCep(value);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError(null);
    setData(null);

    const cepOnlyNumbers: string = cep.replace("-", "");
    if (cepOnlyNumbers.length !== 8) {
      setError("Digite um CEP válido (8 dígitos).");
      return;
    }

    try {
      setLoading(true);
      const response: Response = await fetch(
        `https://viacep.com.br/ws/${cepOnlyNumbers}/json/`
      );
      const json: ViaCepResponse = await response.json();
      if (json.erro) setError("CEP não encontrado.");
      else setData(json);
    } catch (err) {
      setError("Erro ao buscar o CEP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-cep">
        <Label htmlFor="input-cep" className="cep-label">
          Digite seu CEP
        </Label>
        <Input
          id="input-cep"
          type="text"
          placeholder="00000-000"
          value={cep}
          onChange={handleChange}
        />
        {data && <CepResult data={data} />}

        <Button type="submit" id="submit-btn" disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </Button>
      </form>
      {error && <p className="error">{error}</p>}
    </>
  );
};
