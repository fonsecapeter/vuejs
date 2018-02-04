import './styles/styles.scss';

function logWithEmoji(message: string) {
  const emojis = ['🎉', '📦', '🎊'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  console.log(`${message} ${randomEmoji}`);
}

logWithEmoji('Hello from the typescripts!');
