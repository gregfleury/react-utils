
import ReactDOM from "react-dom";

const measureElement = (element, id) => {
    return new Promise((resolve) => {
        const measureLayer = document.createElement("div");
    
        measureLayer.style.display = "inline-block";
        measureLayer.style.visibility = "hidden";
        measureLayer.style.zIndex = "-1";
        measureLayer.style.position = "absolute";

        document.body.appendChild(measureLayer);
    
        ReactDOM.render(element, measureLayer, () => {
            let width = measureLayer.offsetWidth;
            let height = measureLayer.offsetHeight;
    
            ReactDOM.unmountComponentAtNode(measureLayer);
            measureLayer.parentNode.removeChild(measureLayer);

            resolve({width, height, id});
        });
    })
}

export default measureElement;