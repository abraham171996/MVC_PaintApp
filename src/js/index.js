import Model from "./model";
import View from "./view";
import Controller from "./controller";

function initialize(){
    const model = new Model;
    const view = new View;
    const controller = new Controller(model,view);

    controller.init();
}

window.addEventListener("DOMContentLoaded",initialize);