import {BlockView} from '../views/BlockView';

export class Block {
    public view  = new BlockView();
           scale = 0.5;

    constructor() {
        this.view.setPosition(100, 300);
        this.view.setScale(0.5);
        this.view.rotateTo(new PIXI.Point(0, 500));
    }
}
