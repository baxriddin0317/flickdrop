// Utility helpers shared across shadcn components
export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ")
}

interface ParticleConfig {
  size: number;
  delay: number;
  duration: number;
  startLeft: number;
  startTop: number;
}

export const generateParticles = (
  topCount: number = 10,
  leftCount: number = 10,
  cardWidth: number = 224,
  cardHeight: number = 163
): ParticleConfig[] => {
  const particles: ParticleConfig[] = [];
  const sizeRange = [4, 5, 6, 7, 8];
  const durationRange = [3.5, 4, 4.5, 5];
  
  const topStep = cardWidth / (topCount + 1);
  const randomDelay = (min: number, max: number) =>
    Number((min + Math.random() * (max - min)).toFixed(2));
  
  for (let i = 0; i < topCount; i++) {
    particles.push({
      size: sizeRange[Math.floor(Math.random() * sizeRange.length)],
      delay: randomDelay(0, 6),
      duration: durationRange[Math.floor(Math.random() * durationRange.length)],
      startLeft: topStep * (i + 1),
      startTop: -10,
    });
  }
  
  const leftStep = cardHeight / (leftCount + 1);
  for (let i = 0; i < leftCount; i++) {
    particles.push({
      size: sizeRange[Math.floor(Math.random() * sizeRange.length)],
      delay: randomDelay(0.5, 6.5),
      duration: durationRange[Math.floor(Math.random() * durationRange.length)],
      startLeft: -10,
      startTop: leftStep * (i + 1),
    });
  }
  
  return particles;
};