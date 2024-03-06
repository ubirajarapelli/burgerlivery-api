const createOrder = function (request, h) {
  const payload = request.payload;
  const response = {
    orderId: 756,
    created_at: new Date(),
    message: "Pedido criado com sucesso",
  };
  return response;
};

module.exports = createOrder;
