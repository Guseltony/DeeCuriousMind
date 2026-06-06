import React from "react";

// Mock Variants type
export type Variants = any;

// AnimatePresence mock component
export const AnimatePresence = ({ children }: any) => {
  return <>{children}</>;
};

// All framer-motion props that must not reach the DOM
const MOTION_PROPS = new Set([
  "initial", "animate", "transition", "whileHover", "whileTap",
  "whileInView", "viewport", "exit", "layout", "layoutId",
  "variants", "onAnimationStart", "onAnimationComplete", "onUpdate",
  "custom", "drag", "dragConstraints", "dragElastic", "dragMomentum",
  "dragTransition", "onDrag", "onDragStart", "onDragEnd",
  "onDirectionLock", "onHoverStart", "onHoverEnd", "onTap",
  "onTapStart", "onTapCancel", "onPan", "onPanStart", "onPanEnd",
  "onPanSessionStart", "positionTransition", "transformTemplate",
  "transformValues", "inherit",
]);

// Create a component that filters out motion properties and returns standard Tag element
const createMockComponent = (Tag: any) => {
  const Component = React.forwardRef((allProps: any, ref) => {
    const filtered: Record<string, any> = {};
    for (const key in allProps) {
      if (!MOTION_PROPS.has(key)) {
        filtered[key] = allProps[key];
      }
    }
    return <Tag ref={ref} {...filtered} />;
  });
  Component.displayName = `mock-motion-${Tag}`;
  return Component;
};

// Proxied motion object mapping tags like motion.div, motion.section to mock HTML components
export const motion = new Proxy({} as any, {
  get: (target, key: string) => {
    if (key === "create") {
      return (Component: any) => createMockComponent(Component);
    }
    if (!target[key]) {
      target[key] = createMockComponent(key);
    }
    return target[key];
  }
});
