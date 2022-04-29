import request from "supertest";
import response from "supertest"
import app from "./server";


describe("Testing Validations", () => {
    it("CHECK IF CPF IS VALID", async () => {
        const res = await request(app).post("/pedidos").send({

            nome: "netoaaaass",
            email: "emails@gmail.com",
            cpf: "444.404.9528-85",
            cep: "16010360",
            frete: 30.2

        });
        expect(res.status).toBe(500);
        expect(res.body).toHaveProperty("error");
    })
    it("CHECK IF ITENS IS EMPTY", async () => {
        const res = await request(app).post("/pedidos").send({
            "nome": "netoaaaass",
            "email": "emails@gmail.com",
            "cpf": "444.404.9528-85",
            "cep": "16010360",
            "frete": 30.2,
            "valorTotal": 100

        })
        expect(res.status).toBe(500);
        expect(res.body).toEqual({
            "error": "Itens não informados"
        });
    });
    it("CHECK IF CEP IS INVALID", async () => {
        const res = await request(app).post("/pedidos").send({
            "nome": "netoaaaass",
            "email": "emails@gmail.com",
            "cpf": "444.404.958-85",
            "cep": "160102aadada3233360",
            "frete": 30.2,
            "valorTotal": 100, "Itens": [{
                "sku": "asda",
                "descricao": "dada",
                "valor": 22,
                "quantidade": 1
            }]

        })
        expect(res.status).toBe(500);
        expect(res.body).toEqual({
            "error": "CEP inválido"
        });
    });
    it("CHECK IF CREATE IS WORKING", async () => {
        const res = await request(app).post("/pedidos").send(
            {
                "nome": "netoaaaass",
                "email": "emails@gmail.com",
                "cpf": "444.404.958-85",
                "cep": "16010360",
                "frete": 30.2,
                "valorTotal": 100,
                "Itens": [{
                    "sku": "asda",
                    "descricao": "dada",
                    "valor": 22,
                    "quantidade": 1
                }]

            }
        )
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("idPedido");
    });

});