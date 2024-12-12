const createOrder = function (request, h) {
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
