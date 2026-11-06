// =========================================================================
// REAL ANIMAL SOUNDS ENGINE (AUDIO RECORDINGS + SYNTHETIC WEBAUDIO BACKUP)
// =========================================================================
import { haptics } from './haptics';

// Map of animal IDs to authentic audio recordings
const BASE_URL = import.meta.env.BASE_URL || '/';

export const REAL_ANIMAL_SOUND_MAP = {
  dog: `${BASE_URL}sounds/animals/dog.ogg`,
  cat: `${BASE_URL}sounds/animals/cat.ogg`,
  cow: `${BASE_URL}sounds/animals/cow.ogg`,
  sheep: `${BASE_URL}sounds/animals/sheep.ogg`,
  horse: `${BASE_URL}sounds/animals/horse.ogg`,
  zebra: `${BASE_URL}sounds/animals/horse.ogg`,
  pig: `${BASE_URL}sounds/animals/pig.ogg`,
  chicken: `${BASE_URL}sounds/animals/chicken.ogg`,
  chick: `${BASE_URL}sounds/animals/chicken.ogg`,
  duck: `${BASE_URL}sounds/animals/duck.ogg`,
  elephant: `${BASE_URL}sounds/animals/elephant.ogg`,
  wolf: `${BASE_URL}sounds/animals/wolf.ogg`,
  lion: `${BASE_URL}sounds/animals/lion.ogg`,
  cheetah: `${BASE_URL}sounds/animals/lion.ogg`,
};

// Cached HTMLAudioElements for zero-latency replay
const audioCache = {};

function getCachedAudio(url) {
  if (!audioCache[url]) {
    const audio = new Audio(url);
    audio.preload = 'auto';
    audioCache[url] = audio;
  }
  return audioCache[url];
}

// WebAudio Context for synthetic sound effects & fallbacks
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Realistic Web Audio synthesizers for animals without large audio files
function synthesizeAnimalSound(type) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;

  switch (type) {
    case 'frog': {
      // Deep croak with resonant bandpass filter
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(110, now);
      osc.frequency.exponentialRampToValueAtTime(85, now + 0.18);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(450, now);
      filter.Q.setValueAtTime(4.0, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);

      // Second croak
      setTimeout(() => {
        const now2 = ctx.currentTime;
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        const filter2 = ctx.createBiquadFilter();
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(120, now2);
        osc2.frequency.exponentialRampToValueAtTime(90, now2 + 0.2);
        filter2.type = 'bandpass';
        filter2.frequency.setValueAtTime(480, now2);
        filter2.Q.setValueAtTime(4.0, now2);
        gain2.gain.setValueAtTime(0, now2);
        gain2.gain.linearRampToValueAtTime(0.35, now2 + 0.03);
        gain2.gain.exponentialRampToValueAtTime(0.001, now2 + 0.25);
        osc2.connect(filter2);
        filter2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now2);
        osc2.stop(now2 + 0.27);
      }, 140);
      break;
    }

    case 'bee': {
      // 220Hz buzz with fast frequency wobble
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(245, now + 0.3);
      osc.frequency.linearRampToValueAtTime(215, now + 0.6);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.75);
      break;
    }

    case 'owl': {
      // Soft gentle two-tone hoot (620Hz -> 580Hz)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(620, now);
      osc.frequency.linearRampToValueAtTime(560, now + 0.35);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.45);
      break;
    }

    case 'bear': {
      // Low guttural growl
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(75, now);
      osc.frequency.linearRampToValueAtTime(60, now + 0.5);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.35, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.65);
      break;
    }

    case 'dolphin': {
      // High-pitched playful clicks and chirps
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          const t = ctx.currentTime;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(2400 + i * 400, t);
          osc.frequency.exponentialRampToValueAtTime(3600, t + 0.08);

          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.09);
        }, i * 90);
      }
      break;
    }

    default:
      break;
  }
}

/**
 * Plays a real animal recording if available, or synthesized acoustic model.
 * @param {string} animalId - id matching the animal (e.g. 'dog', 'cat', 'lion', etc.)
 * @returns {Promise<boolean>} returns true if sound played
 */
export async function playRealAnimalSound(animalId) {
  haptics.pop();
  const normalizedId = (animalId || '').toLowerCase().trim();

  // 1. Check if we have an authentic audio file
  const soundUrl = REAL_ANIMAL_SOUND_MAP[normalizedId];
  if (soundUrl) {
    try {
      const audio = getCachedAudio(soundUrl);
      audio.currentTime = 0;
      await audio.play();
      return true;
    } catch (err) {
      console.warn(`[AnimalSound] Failed to play recording for ${normalizedId}:`, err);
    }
  }

  // 2. Synthesize if specialized model exists
  if (['frog', 'bee', 'owl', 'bear', 'dolphin'].includes(normalizedId)) {
    synthesizeAnimalSound(normalizedId);
    return true;
  }

  return false;
}
