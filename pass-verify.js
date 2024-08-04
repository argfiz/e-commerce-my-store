const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$A0vH2y552IhZO6AHpMLtp.qvzDmLoyBgzmFNieI6tWjlVTBY1RnD2';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
