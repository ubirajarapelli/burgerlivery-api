const createOrder = function (request, h) {
  const authHeader = request.headers["authorization"];

  if (!authHeader) {
    return h
      .response({ error: "Você não está autorizado a acessar esse conteúdo" })
      .code(401);
  }

  const payload = request.payload;
  const response = {
    orderNumber: Math.floor(Math.random() * (9000 - 1000 + 1)) + 426,
    createdAt: new Date(),
    message: "Pedido criado com sucesso",
    details: payload,
  };
  return response;
};

module.exports = createOrder;
