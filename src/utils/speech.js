// High-energy Dora-the-Explorer-like French voice synthesis engine

class DoraVoiceEngine {
  constructor() {
    this.frenchVoice = null;
    this.isMuted = false;
    this.isSpeaking = false;
    this.listeners = new Set();
    this.initVoices();

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.initVoices();
      };
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(speaking) {
    this.isSpeaking = speaking;
    this.listeners.forEach((fn) => fn(speaking));
  }

  initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();

    // Prefer youthful French voices (Julie, Hortense, Thomas, Audrey, Google français)
    this.frenchVoice =
      voices.find((v) => v.lang === 'fr-FR' && (v.name.includes('Julie') || v.name.includes('Hortense') || v.name.includes('Natural') || v.name.includes('Google'))) ||
      voices.find((v) => v.lang === 'fr-FR') ||
      voices.find((v) => v.lang.startsWith('fr')) ||
      null;
  }

  speak(text, onComplete) {
    if (this.isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onComplete) onComplete();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    if (this.frenchVoice) {
      utterance.voice = this.frenchVoice;
    }

    // Little girl voice style (Dora style): high pitch, clear, energetic, enthusiastic
    utterance.pitch = 1.38;
    utterance.rate = 0.95;

    utterance.onstart = () => this.notify(true);
    utterance.onend = () => {
      this.notify(false);
      if (onComplete) onComplete();
    };
    utterance.onerror = () => {
      this.notify(false);
      if (onComplete) onComplete();
    };

    window.speechSynthesis.speak(utterance);
  }

  speakBilingual(frenchText, englishText) {
    this.speak(frenchText, () => {
      if (englishText && !this.isMuted) {
        setTimeout(() => {
          const utterance = new SpeechSynthesisUtterance(englishText);
          utterance.lang = 'en-US';
          utterance.pitch = 1.35;
          utterance.rate = 0.95;
          utterance.onstart = () => this.notify(true);
          utterance.onend = () => this.notify(false);
          window.speechSynthesis.speak(utterance);
        }, 350);
      }
    });
  }

  stop() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.notify(false);
    }
  }
}

export const teacher = new DoraVoiceEngine();
export const doraVoice = teacher;
