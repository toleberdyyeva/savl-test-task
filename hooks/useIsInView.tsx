export const useIsInView = () => {
  const isElementInViewport = (el: HTMLElement) => {
    // Special bonus for those using jQuery
    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */
    );
  };
  return { isElementInViewport };
};
