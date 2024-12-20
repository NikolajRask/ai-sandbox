export function generateGradientFromText(text: string) {
    const hash = hashString(text);
    return `linear-gradient(90deg, hsl(${hash % 360}, 100%, 50%), hsl(${(hash + 180) % 360}, 100%, 50%))`;
}

function hashString(text: string) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}