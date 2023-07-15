const { default: connection } = require("@/utils/db");

const GET = async ({params}) => {
  try {
    await connection();

  } catch (error) {}
};
