import { Rect, RectangleComponent } from "../componentTypes";
import { generateHTMLStyle } from "../utils";

const RectanglePreview = ({ component, isRoot = false, parentFrame }: { component: RectangleComponent, isRoot?: boolean, parentFrame: Rect }) => {
  const style = generateHTMLStyle(component, isRoot, parentFrame);  /** Extract style from component */
  
  return (
    <div id={component.name} style={style} />
  )
}

export default RectanglePreview;