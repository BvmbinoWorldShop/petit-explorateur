// Mobile Device Haptic Vibration Engine for Tactile Feedback

class HapticsEngine {
  constructor() {
    this.isEnabled = true;
    this.initGlobalListeners();
  }

  isSupported() {
    return typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'vibrate' in navigator;
  }

  vibrate(pattern) {
    if (!this.isEnabled || !this.isSupported()) return;
    try {
      navigator.vibrate(pattern);
    } catch (e) {
      // Ignore vibration errors if blocked by browser policy
    }
  }

  // Light, crisp tap for pills, tabs, and buttons (10ms)
  tap() {
    this.vibrate(10);
  }

  // Soft pop feedback for menu selections and letter picks (14ms)
  pop() {
    this.vibrate(14);
  }

  // Medium vibration for drawing strokes and dragging items (18ms)
  drag() {
    this.vibrate(18);
  }

  // Double pulse for correct answer or card match (two quick taps)
  success() {
    this.vibrate([16, 45, 24]);
  }

  // Festive celebration pulse for star rewards and game completions
  celebrate() {
    this.vibrate([24, 40, 24, 50, 35]);
  }

  // Error or bloop subtle rumble
  error() {
    this.vibrate([22, 60, 22]);
  }

  // Automatically attach subtle haptic feedback to buttons, tabs and pills across the app
  initGlobalListeners() {
    if (typeof window === 'undefined') return;

    const handlePointerDown = (e) => {
      const target = e.target.closest(
        'button, .num-mode-tab-btn, .letter-tile-btn, .num-tile-btn, .palette-swatch-btn, .math-choice-btn, .memory-card-tile, .card-nav-pill, .action-button, [role="button"]'
      );
      if (target) {
        this.tap();
      }
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
  }
}

export const haptics = new HapticsEngine();
export default haptics;
