const createOrder = function (request, h) {
  const authHeader = request.headers["authorization"];

  if (!authHeader) {
    return h.response({ error: "Token não fornecido" }).code(401);
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
