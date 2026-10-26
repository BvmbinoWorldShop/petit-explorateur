// High-energy Dora-the-Explorer-like French voice synthesis engine with Tyanna character

class DoraVoiceEngine {
  constructor() {
    this.frenchVoice = null;
    this.englishVoice = null;
    this.isMuted = false;
    this.isSpeaking = false;
    this.mode = 'fr'; // 'fr' (100% French) or 'bilingual' (FR + EN)
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

    this.frenchVoice =
      voices.find((v) => v.lang === 'fr-FR' && (
        v.name.includes('Amélie') || 
        v.name.includes('Google français') || 
        v.name.includes('Julie') || 
        v.name.includes('Marie') || 
        v.name.includes('Céline') || 
        v.name.includes('Hortense') || 
        v.name.includes('Virginie') ||
        v.name.includes('Natural') || 
        v.name.includes('Denise')
      )) ||
      voices.find((v) => v.lang === 'fr-FR' && !v.name.includes('Paul') && !v.name.includes('Claude') && !v.name.includes('Henri') && !v.name.includes('Male')) ||
      voices.find((v) => v.lang === 'fr-FR') ||
      voices.find((v) => v.lang.startsWith('fr')) ||
      null;

    this.englishVoice =
      voices.find((v) => (v.lang === 'en-US' || v.lang === 'en-GB') && (
        v.name.includes('Jenny') || 
        v.name.includes('Natural') || 
        v.name.includes('Google') || 
        v.name.includes('Aria')
      )) ||
      voices.find((v) => v.lang.startsWith('en')) ||
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

    // Sweet little girl voice: warm, bright, clear, cheerful
    utterance.pitch = 1.45;
    utterance.rate = 0.92;

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
      if (this.mode === 'bilingual' && englishText && !this.isMuted) {
        setTimeout(() => {
          const utterance = new SpeechSynthesisUtterance(englishText);
          utterance.lang = 'en-US';
          if (this.englishVoice) utterance.voice = this.englishVoice;
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
