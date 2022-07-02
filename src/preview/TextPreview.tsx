import { Rect, TextComponent } from "../componentTypes";
import { generateHTMLStyle } from "../utils";

const TextPreview = ({ component, isRoot = false, parentFrame }: { component: TextComponent, isRoot?: boolean, parentFrame: Rect }) => {
  const style = generateHTMLStyle(component, isRoot, parentFrame);  /** Extract style from component */

  return (
    <div
      data-testid={component.name}
      id={component.id}
      style={style}
    >
      {component.content}
    </div>
  )
}

export default TextPreview;