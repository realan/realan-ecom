
// MODIFY THE NAVIGATION WITH NEW STRUCTURE
export const updateNavigation = navigation => {
  return navigation.map(curr => {
    if (curr.megaMenu || curr.megaMenuWithSub) {
      const flatChild = curr.child.flat();
      return {
        title: curr.title,
        child: flatChild
      };
    }
    return {
      title: curr.title,
      child: curr.child
    };
  });
};