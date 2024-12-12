const login = function (request, h) {
  const payload = request.payload;
  if (
    (payload.login === "eliane_almeida@gmail.com.br" &&
      payload.password === "Prior8756@") ||
    (payload.login === "manoeljuandapaz@gmail.com.br" &&
      payload.password === "Pedra0143@")
  ) {
    const token = Buffer.from(`${payload.login}.${payload.password}`).toString(
      "base64"
    );

    return {
      userName:
        payload.login === "eliane_almeida@gmail.com.br"
          ? "Eliane Almeida"
          : "Manoel Juan da Paz",
      email: payload.login,
      token,
    };
  }

  return h.response({ message: "Usuário não encontrado" }).code(404);
};

module.exports = login;
