export default {
  onWrapperClick: (INPUT_ID: string) => () => {
    const input: HTMLInputElement | null = document.querySelector(
      `#${INPUT_ID}`
    );
    if (input) {
      input?.focus();
    }
  },
};
