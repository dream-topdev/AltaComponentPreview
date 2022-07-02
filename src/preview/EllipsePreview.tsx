import { EllipseComponent, Rect } from "../componentTypes";
import { generateHTMLStyle } from "../utils";

const EllipsePreview = ({ component, isRoot = false, parentFrame }: { component: EllipseComponent, isRoot?: boolean, parentFrame: Rect }) => {
  const style = generateHTMLStyle(component, isRoot, parentFrame);  /** Extract style from component */
  
  return (
    <div id={component.name} style={style} />
  )
}

export default EllipsePreview;