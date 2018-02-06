export default function (message: string) {
  const emojis = ['🎉', '📦', '🎊'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  setTimeout(() => {
    console.log(`${message} ${randomEmoji}`);
  }, 3000);
}
