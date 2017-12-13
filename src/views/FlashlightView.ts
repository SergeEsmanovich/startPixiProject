import {Render} from '../Render';
import {NestedRender} from '../helpers/NestedRender';

@NestedRender
export class FlashlightView {
    public render: Render;
    public container = new PIXI.Container();

    constructor() {
        const image   = this.render.resources.sample;
        const view    = PIXI.Sprite.from(image.data);
        view.position = new PIXI.Point(0, 0);
        view.anchor.set(0.5);

        const light = new PIXI.Graphics();
        light.beginFill(0xFFFFFF);
        light.lineStyle(5, 0x000000, 1);
        light.moveTo(0,0);
        light.lineTo(-250, 600);
        light.lineTo(250, 600);
        light.lineTo(0, 0);
        light.endFill();

        this.container.addChild(view);
        this.container.addChild(light);
        this.render.app.stage.addChild(this.container);
    }

    public setPosition(x: number, y: number) {
        this.container.position.set(x, y);
    }

    public getPosition() {
        return this.container.position;
    }

    public serScale(x: number, y: number) {
        this.container.scale.set(x, y);
    }

    rotateTo(point: PIXI.Point) {
        const pos               = this.getPosition();
        this.container.rotation = Math.atan2(point.y - pos.y, point.x - pos.x) - Math.PI / 2;
    }
}
