import confetti from 'canvas-confetti';

export function fireHeartConfetti() {
  const count = 75;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#FF7AA8', '#FFB3CE', '#FFE4EF', '#FF5993', '#FAD2E1', '#E85382', '#FFF0F5'],
    shapes: ['circle', 'square'] as confetti.Shape[],
    ticks: 200,
    gravity: 0.8,
    scalar: 1.1,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Multi-blast romantic confetti
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}
