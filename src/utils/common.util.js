export function generateRandomPrefix() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let prefix = "";
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    prefix += alphabet.charAt(randomIndex);
  }
  return prefix;
}

export function generateUsername() {
  const prefix = generateRandomPrefix();
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  const username = `${prefix}${randomNumber}`;
  return username;
}
