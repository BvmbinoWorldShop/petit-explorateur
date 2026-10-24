// Speech Synthesis Engine for the French Teacher

class TeacherSpeech {
  constructor() {
    this.frenchVoice = null;
    this.englishVoice = null;
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

    // Find French voice (prefer fr-FR, fr-CA, or any French voice)
    this.frenchVoice =
      voices.find((v) => v.lang === 'fr-FR' && (v.name.includes('Audrey') || v.name.includes('Thomas') || v.name.includes('Natural') || v.name.includes('Google'))) ||
      voices.find((v) => v.lang.startsWith('fr')) ||
      null;

    // Find English voice for bilingual support
    this.englishVoice =
      voices.find((v) => (v.lang === 'en-US' || v.lang === 'en-GB') && (v.name.includes('Natural') || v.name.includes('Google'))) ||
      voices.find((v) => v.lang.startsWith('en')) ||
      null;
  }

  speakFrench(text, callback) {
    if (this.isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (callback) callback();
      return;
    }

    window.speechSynthesis.cancel(); // cancel any active utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    if (this.frenchVoice) {
      utterance.voice = this.frenchVoice;
    }
    // Toddler-friendly teacher voice: clear, slightly elevated pitch, measured pace
    utterance.rate = 0.9;
    utterance.pitch = 1.15;

    utterance.onstart = () => this.notify(true);
    utterance.onend = () => {
      this.notify(false);
      if (callback) callback();
    };
    utterance.onerror = () => {
      this.notify(false);
      if (callback) callback();
    };

    window.speechSynthesis.speak(utterance);
  }

  speakBilingual(frenchText, englishText) {
    this.speakFrench(frenchText, () => {
      if (englishText && !this.isMuted) {
        setTimeout(() => {
          const utterance = new SpeechSynthesisUtterance(englishText);
          utterance.lang = 'en-US';
          if (this.englishVoice) utterance.voice = this.englishVoice;
          utterance.rate = 0.9;
          utterance.pitch = 1.1;
          utterance.onstart = () => this.notify(true);
          utterance.onend = () => this.notify(false);
          utterance.onerror = () => this.notify(false);
          window.speechSynthesis.speak(utterance);
        }, 300);
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

export const teacher = new TeacherSpeech();
