import {NestedRender} from '../helpers/NestedRender';
import {Render} from '../Render';

@NestedRender
export class BlockView {
    public render: Render;
    public container = new PIXI.Container();

    constructor() {


        const block = new PIXI.Graphics();
        block.beginFill(0xFFFFFF);
        block.lineStyle(5, 0x000000, 1);
        block.drawRect(0, 0, 120, 120);
        block.endFill();

        this.container.addChild(block);
        this.container.pivot.x = this.container.width / 2;
        this.container.pivot.y = this.container.height / 2;

        this.render.app.stage.addChild(this.container);
    }

    public setPosition(x: number, y: number) {
        this.container.position.set(x, y);
    }

    public getPosition() {
        return this.container.position;
    }

    public setScale(x: number, y: number) {
        this.container.scale.set(x, y);
    }

    rotateTo(point: PIXI.Point) {
        const pos               = this.getPosition();
        this.container.rotation = Math.atan2(point.y - pos.y, point.x - pos.x) - Math.PI / 2;
    }
}
