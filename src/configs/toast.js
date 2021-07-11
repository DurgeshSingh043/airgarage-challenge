import { useToasts } from 'react-toast-notifications';

const common = {
  autoDismiss: true,
  autoDismissTimeout: 2000,
  transitionDuration: 800,
};

export const TOAST_TYPE = {
  SUCCESS: { appearance: 'success', ...common },
  ERROR: { appearance: 'error', ...common },
  WARNING: { appearance: 'warning', ...common },
  INFO: { appearance: 'info', ...common },
};

export const useToast = () => {
  const { addToast } = useToasts();

  return {
    addToast: (msg) => addToast(msg, TOAST_TYPE.SUCCESS),
    addErrorToast: (msg) => addToast(msg, TOAST_TYPE.ERROR),
    addWarningToast: (msg) => addToast(msg, TOAST_TYPE.WARNING),
    addInfoToast: (msg) => addToast(msg, TOAST_TYPE.INFO),
  };
};

export const TOAST_TEXT = {
  SEARCH_MIN_LENGTH: 'Search text length should be greater than 3',
  SEARCH_TEXT: 'Please enter search address..',
  SEARCH_ERROR: 'Something went wrong. Please try again..',
};
