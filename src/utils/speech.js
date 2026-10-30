// High-energy Dora-the-Explorer-like French Female voice synthesis engine with Tyanna character

const MALE_VOICE_KEYWORDS = [
  'thomas', 'daniel', 'mathieu', 'nicolas', 'remy', 'rémy', 'henri',
  'paul', 'claude', 'jerome', 'jérôme', 'antoine', 'bernard', 'guillaume',
  'luca', 'jacques', 'fabrice', 'alain', 'pierre', 'marc', 'louis',
  'gabriel', 'arthur', 'hugo', 'lucas', 'male', 'homme', 'masculin',
  'fr-fr-x-frb', 'fr-fr-x-frd', 'fr-ca-x-cab', 'fr-ca-x-cad', 'rocko', 'eddy', 'reed'
];

const FEMALE_VOICE_PRIORITY = [
  'eloise', 'éloïse', // Microsoft Neural child girl voice
  'audrey', 'aurélie', 'aurelie', 'amélie', 'amelie', 'marie',
  'denise', 'vivienne', 'coralie', 'julie', 'hortense', 'céline', 'celine',
  'chantal', 'virginie', 'léa', 'lea', 'manon', 'camille', 'chloé', 'chloe',
  'claire', 'pauline', 'margaux', 'victoire', 'siri', 'shelley', 'sandy', 'flo',
  'fr-fr-x-fra', 'fr-fr-x-frc', 'fr-fr-x-vlf', 'fr-ca-x-caa', 'fr-ca-x-cac',
  'google français', 'female', 'femme', 'féminin', 'natural'
];

function isMaleVoice(voice) {
  const haystack = `${voice.name || ''} ${voice.voiceURI || ''}`.toLowerCase();
  return MALE_VOICE_KEYWORDS.some((kw) => haystack.includes(kw));
}

function getFemaleScore(voice) {
  if (isMaleVoice(voice)) return -100;
  const haystack = `${voice.name || ''} ${voice.voiceURI || ''}`.toLowerCase();
  let score = 0;

  for (let i = 0; i < FEMALE_VOICE_PRIORITY.length; i++) {
    if (haystack.includes(FEMALE_VOICE_PRIORITY[i])) {
      score += 100 - i * 2;
      break;
    }
  }

  const lang = (voice.lang || '').toLowerCase();
  if (lang === 'fr-fr' || lang === 'fr_fr') score += 20;
  else if (lang.startsWith('fr')) score += 15;

  if (haystack.includes('natural') || haystack.includes('online') || haystack.includes('premium') || haystack.includes('enhanced')) {
    score += 25;
  }

  return score;
}

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
    if (!voices || voices.length === 0) return;

    // Filter all French voices across fr-FR, fr-CA, fr-BE, fr-CH
    const frenchVoices = voices.filter((v) => (v.lang || '').toLowerCase().startsWith('fr'));

    if (frenchVoices.length > 0) {
      // Sort by female priority score, strictly avoiding male voices like Thomas
      const sorted = [...frenchVoices].sort((a, b) => getFemaleScore(b) - getFemaleScore(a));
      const bestCandidate = sorted[0];
      if (!isMaleVoice(bestCandidate)) {
        this.frenchVoice = bestCandidate;
      } else {
        // Every French voice reported by OS had a male name; pick non-male if any exists
        this.frenchVoice = frenchVoices.find((v) => !isMaleVoice(v)) || bestCandidate;
      }
    }

    // English female voice for bilingual mode
    const englishVoices = voices.filter((v) => (v.lang || '').toLowerCase().startsWith('en'));
    this.englishVoice =
      englishVoices.find((v) => !isMaleVoice(v) && (
        v.name.includes('Samantha') ||
        v.name.includes('Victoria') ||
        v.name.includes('Ava') ||
        v.name.includes('Allison') ||
        v.name.includes('Jenny') ||
        v.name.includes('Aria') ||
        v.name.includes('Zira') ||
        v.name.includes('Google') ||
        v.name.includes('Natural')
      )) ||
      englishVoices.find((v) => !isMaleVoice(v)) ||
      englishVoices[0] ||
      null;
  }

  // Strip emojis so TTS doesn't read "visage souriant" or emoji descriptions aloud
  cleanTextForSpeech(text) {
    if (!text) return '';
    return String(text)
      .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F000}-\u{1F2FF}]/gu, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  speak(text, onComplete) {
    if (this.isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onComplete) onComplete();
      return;
    }

    // Re-initialize voices if not yet loaded (crucial on iOS/Android first tap)
    if (!this.frenchVoice || isMaleVoice(this.frenchVoice)) {
      this.initVoices();
    }

    const cleaned = this.cleanTextForSpeech(text);
    if (!cleaned) {
      if (onComplete) onComplete();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleaned);

    if (this.frenchVoice) {
      utterance.voice = this.frenchVoice;
      // Match the exact voice lang (e.g. fr-CA for Amélie on iOS) so iOS doesn't revert to Thomas (fr-FR)
      utterance.lang = this.frenchVoice.lang || 'fr-FR';
    } else {
      utterance.lang = 'fr-FR';
    }

    // Sweet, warm, cheerful female voice pitch & cadence
    const voiceName = (this.frenchVoice?.name || '').toLowerCase();
    if (voiceName.includes('eloise') || voiceName.includes('éloïse')) {
      // Already a child voice
      utterance.pitch = 1.1;
      utterance.rate = 0.96;
    } else if (this.frenchVoice && isMaleVoice(this.frenchVoice)) {
      // Fallback if device only has a male voice installed
      utterance.pitch = 1.65;
      utterance.rate = 0.95;
    } else {
      // Female voice tuned to sweet young girl tone
      utterance.pitch = 1.32;
      utterance.rate = 0.94;
    }

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

  speakFrench(text, onComplete) {
    this.speak(text, onComplete);
  }

  speakBilingual(frenchText, englishText) {
    this.speak(frenchText, () => {
      if (this.mode === 'bilingual' && englishText && !this.isMuted) {
        setTimeout(() => {
          const cleanedEn = this.cleanTextForSpeech(englishText);
          if (!cleanedEn) return;
          const utterance = new SpeechSynthesisUtterance(cleanedEn);
          if (this.englishVoice) {
            utterance.voice = this.englishVoice;
            utterance.lang = this.englishVoice.lang || 'en-US';
          } else {
            utterance.lang = 'en-US';
          }
          utterance.pitch = 1.28;
          utterance.rate = 0.94;
          utterance.onstart = () => this.notify(true);
          utterance.onend = () => this.notify(false);
          utterance.onerror = () => this.notify(false);
          window.speechSynthesis.speak(utterance);
        }, 320);
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
