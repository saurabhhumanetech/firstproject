/**
 * Web Audio API synthesized gentle romantic chimes & music box sounds
 * Respects user preferences, plays only on explicit user interaction
 */

let audioCtx: AudioContext | null = null;
let isMuted = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function toggleMute(): boolean {
  isMuted = !isMuted;
  return isMuted;
}

export function getIsMuted(): boolean {
  return isMuted;
}

// Gentle music box chime note
function playNote(freq: number, startTime: number, duration: number, type: OscillatorType = 'sine', gainLevel = 0.15) {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);

  // Soft envelope
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(gainLevel, startTime + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

// Play a sweet heart-pop chime
export function playHeartSound() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  // Two sweet rising notes
  playNote(523.25, now, 0.35, 'sine', 0.12); // C5
  playNote(659.25, now + 0.12, 0.45, 'sine', 0.14); // E5
  playNote(783.99, now + 0.24, 0.6, 'sine', 0.16); // G5
  playNote(1046.50, now + 0.38, 0.8, 'sine', 0.12); // C6
}

// Play cute celebratory chords for YES
export function playCelebrationSound() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const notes = [
    { freq: 523.25, time: 0 },       // C5
    { freq: 659.25, time: 0.1 },     // E5
    { freq: 783.99, time: 0.2 },     // G5
    { freq: 987.77, time: 0.3 },     // B5
    { freq: 1046.50, time: 0.45 },   // C6
    { freq: 1318.51, time: 0.6 },    // E6
    { freq: 1567.98, time: 0.75 },   // G6
  ];

  notes.forEach((n) => {
    playNote(n.freq, now + n.time, 0.7, 'triangle', 0.12);
  });
}

// Soft gentle "aww" chime for NO
export function playSoftAwwSound() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playNote(440.00, now, 0.4, 'sine', 0.1); // A4
  playNote(392.00, now + 0.2, 0.6, 'sine', 0.08); // G4
  playNote(349.23, now + 0.4, 0.8, 'sine', 0.06); // F4
}

// Play a mini music-box melody preview
let melodyInterval: number | null = null;
export function playMelodyPreview(onDone?: () => void) {
  if (isMuted) {
    onDone?.();
    return;
  }
  const ctx = getAudioContext();
  if (!ctx) {
    onDone?.();
    return;
  }

  // Cute romantic music box melody
  const melody = [
    { freq: 523.25, dur: 0.4 }, // C5
    { freq: 587.33, dur: 0.4 }, // D5
    { freq: 659.25, dur: 0.5 }, // E5
    { freq: 783.99, dur: 0.5 }, // G5
    { freq: 880.00, dur: 0.6 }, // A5
    { freq: 783.99, dur: 0.4 }, // G5
    { freq: 659.25, dur: 0.8 }, // E5
    { freq: 523.25, dur: 1.0 }, // C5
  ];

  const now = ctx.currentTime;
  let t = 0;
  melody.forEach((note) => {
    playNote(note.freq, now + t, note.dur + 0.2, 'sine', 0.15);
    t += 0.38;
  });

  if (melodyInterval) window.clearTimeout(melodyInterval);
  melodyInterval = window.setTimeout(() => {
    onDone?.();
  }, (t + 0.5) * 1000);
}

export function stopMelody() {
  if (melodyInterval) {
    window.clearTimeout(melodyInterval);
    melodyInterval = null;
  }
}
