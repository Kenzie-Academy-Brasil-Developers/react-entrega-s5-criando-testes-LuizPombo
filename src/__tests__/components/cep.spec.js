import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Search";
import api from "../../services";
import MockAdapter from "axios-mock-adapter";
import Providers from "../../providers";

const apiMock = new MockAdapter(api);

describe("Cep search", () => {
  it("should be able to search for the adress", async () => {
    apiMock.onGet("20771320").replyOnce(200, {
      bairro: "Cachambi",
      cep: "20771320",
      cidade: "Rio de Janeiro",
      cidade_info: { area_km2: "1200,179", codigo_ibge: "3304557" },
      estado: "RJ",
      estado_info: {
        area_km2: "43.781,566",
        codigo_ibge: "33",
        nome: "Rio de Janeiro",
      },
      logradouro: "Rua Odorico Mendes",
    });
    render(
      <Providers>
        <Search />
      </Providers>
    );

    const cepField = screen.getByPlaceholderText("Insira o CEP");
    const buttonElement = screen.getByText("Buscar pelo CEP");

    fireEvent.change(cepField, { target: { value: 20771320 } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(cepField).toHaveValue(20771320);
    });
  });
});
