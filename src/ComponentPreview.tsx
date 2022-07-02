import { ReactNode } from "react";
import { Component } from "./componentTypes";
import ContainerPreview from "./preview/ContainerPreview";
import EllipsePreview from "./preview/EllipsePreview";
import RectanglePreview from "./preview/RectanglePreview";
import TextPreview from "./preview/TextPreview";

const ComponentPreview = ({ component }: { component: Component }) => {
    // TODO: Implement Me!
    let previewResult: ReactNode = null; /** the result that shows the preview of the component */

    /** A root relative position is (0, 0), all the child components will be placed by this position */
    const parentFrame = {x: 0, y: 0, width: 0, height: 0};
    /**Render proper component according to its type */
    switch(component.type) {
        case 'container':
            previewResult = <ContainerPreview component={component} isRoot={true} parentFrame={parentFrame}/>;
            break;
        case 'ellipse':
            previewResult = <EllipsePreview component={component} isRoot={true} parentFrame={component.frame}/>;
            break;
        case 'rectangle':
            previewResult = <RectanglePreview component={component} isRoot={true} parentFrame={component.frame}/>;
            break;
        case 'text':
            previewResult = <TextPreview component={component} isRoot={true} parentFrame={component.frame}/>;
            break;
    }

    return (
        <div>
            <h3>{component.name}</h3>
            {previewResult}
        </div>
    );
};

export default ComponentPreview;
