interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export function trackEvent({ event, category, action, label, value }: AnalyticsEvent) {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
    
    console.log('Analytics Event:', { event, category, action, label, value });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

export function trackFormStart(formType: 'quick' | 'full' | 'exit-intent') {
  trackEvent({
    event: 'form_start',
    category: 'Lead Generation',
    action: 'form_start',
    label: formType
  });
}

export function trackFormSubmit(formType: 'quick' | 'full' | 'exit-intent') {
  trackEvent({
    event: 'form_submit',
    category: 'Lead Generation',
    action: 'form_submit',
    label: formType
  });
}

export function trackModalOpen(modalType: 'itinerary' | 'exit_intent') {
  trackEvent({
    event: 'modal_open',
    category: 'Engagement',
    action: 'modal_open',
    label: modalType
  });
}

export function trackScroll(percentage: number) {
  if (percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100) {
    trackEvent({
      event: 'scroll',
      category: 'Engagement',
      action: 'scroll_depth',
      label: `${percentage}%`,
      value: percentage
    });
  }
}

export function trackButtonClick(buttonId: string, section: string) {
  trackEvent({
    event: 'button_click',
    category: 'User Interaction',
    action: 'button_click',
    label: `${section}_${buttonId}`
  });
}