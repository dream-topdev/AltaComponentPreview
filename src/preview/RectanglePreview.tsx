import { Rect, RectangleComponent } from "../componentTypes";
import { generateHTMLStyle } from "../utils";

const RectanglePreview = ({ component, isRoot = false, parentFrame }: { component: RectangleComponent, isRoot?: boolean, parentFrame: Rect }) => {
  const style = generateHTMLStyle(component, isRoot, parentFrame);  /** Extract style from component */
  
  return (
    <div
      data-testid={component.name}
      id={component.id}
      style={style}
    />
  )
}

export default RectanglePreview;