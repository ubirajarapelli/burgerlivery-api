const login = function (request, h) {
  const payload = request.payload;
  if (
    payload.login === "jorge@abreu.com.br" &&
    payload.password === "abobrinha"
  ) {
    const token = {
      token: Buffer.from(`${payload.login}.${payload.password}`).toString(
        "base64"
      ),
    };
    return token;
  }

  return h.response({ message: "Usuário não encontrado" }).code(404);
};

module.exports = login;
