import { Color, Component, Rect } from "./componentTypes";

/** A utility function that converts Color object to HTML color string */
export const parseHTMLColor = (c : Color) => {
  return `rgba(${c.r * 255}, ${c.g * 255}, ${c.b * 255}, ${c.a})`;
}

/** A utility function that generates HTML stylesheet from component */
export const generateHTMLStyle = (component: Component, isRoot: boolean, parentFrame: Rect) => {
  /** Fill the very common styles in every component */
  const style: React.CSSProperties = {
    position: isRoot ? 'relative' : 'absolute', /** should place the frame if it's the root of component tree */
    left: component.frame.x - parentFrame.x, /** calculates the relative x position of it's parent */
    top: component.frame.y - parentFrame.y, /** calculates the relative y position of it's parent */
    width: component.frame.width,
    height: component.frame.height,
  }

  /** For ComponentWithFill, fill background color and border */
  if ('backgroundColor' in component && component.backgroundColor !== undefined)
    style.backgroundColor = parseHTMLColor(component.backgroundColor);
  if ('border' in component && component.border !== undefined) {
    style.borderWidth = component.border.width;
    style.borderColor = parseHTMLColor(component.border.color);
    style.borderStyle = 'solid';
  }
  
  /** For ContainerComponent, make the corder radius */
  if ('cornerRadius' in component)
    style.borderRadius = component.cornerRadius;
  
  /** For EllipseComponent, make the border radius is half of the width */
  if (component.type === 'ellipse')  
    style.borderRadius = component.frame.width / 2;
  
  /** For TextComponent, fill the fontfamily, fontsize, fontweight, color */
  if (component.type === 'text') {
    style.fontFamily = component.fontFamily;
    style.fontSize = component.fontSize;
    style.fontWeight = component.fontWeight;
    style.color = parseHTMLColor(component.textColor);
  }

  return style;
}