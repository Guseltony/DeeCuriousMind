import React from "react";

// Mock Variants type
export type Variants = any;

// AnimatePresence mock component
export const AnimatePresence = ({ children }: any) => {
  return <>{children}</>;
};

// Create a component that filters out motion properties and returns standard Tag element
const createMockComponent = (Tag: any) => {
  const Component = React.forwardRef(({
    initial,
    animate,
    transition,
    whileHover,
    whileTap,
    whileInView,
    viewport,
    exit,
    layout,
    layoutId,
    variants,
    onAnimationStart,
    onAnimationComplete,
    onUpdate,
    ...props
  }: any, ref) => {
    return <Tag ref={ref} {...props} />;
  });
  Component.displayName = `mock-motion-${Tag}`;
  return Component;
};

// Proxied motion object mapping tags like motion.div, motion.section to mock HTML components
export const motion = new Proxy({} as any, {
  get: (target, key: string) => {
    if (!target[key]) {
      target[key] = createMockComponent(key);
    }
    return target[key];
  }
});
