import { ContainerComponent, Rect } from "../componentTypes";
import { generateHTMLStyle } from "../utils";
import EllipsePreview from "./EllipsePreview";
import RectanglePreview from "./RectanglePreview";
import TextPreview from "./TextPreview";

/** Component that shows the ContainerComponent */

const ContainerPreview = ({ component, isRoot = false, parentFrame }: { component: ContainerComponent, isRoot?: boolean, parentFrame: Rect }) => {
  const style = generateHTMLStyle(component, isRoot, parentFrame); /** Extract style from component */
  
  return (
    <div
      data-testid={component.name}
      id={component.id}
      style={style}
    >
      {component.children.map(e => {
        /** each parent frame will be component.frame */
        switch (e.type) {
          case 'container':
            return <ContainerPreview key={e.id} component={e} parentFrame={component.frame}/>;
          case 'ellipse':
            return <EllipsePreview key={e.id} component={e} parentFrame={component.frame}/>;
          case 'rectangle':
            return <RectanglePreview key={e.id} component={e} parentFrame={component.frame}/>;
          case 'text':
            return <TextPreview key={e.id} component={e} parentFrame={component.frame}/>;
          default:
            return null;
        }
      })}
    </div>
  )
}

export default ContainerPreview;