const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

const login = async (req, res) => {
  const { cpf, password } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { cpf, password },
    });
    res.status(200).json({ message: 'Usuário inserido com sucesso!' });
  } catch (error) {
    console.error('Erro ao inserir usuário:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

const updatePasswordNumber = async (req, res) => {
  const { cpf, passwordNumber } = req.body;
  try {
    const user = await prisma.user.update({
      where: { cpf },
      data: { passwordNumber },
    });
    res.status(200).json({ message: 'Senha Numérica atualizada com sucesso!' });
  } catch (error) {
    console.error('Erro ao atualizar senha numérica:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

module.exports = {
  getAll,
  login,
  updatePasswordNumber
};
