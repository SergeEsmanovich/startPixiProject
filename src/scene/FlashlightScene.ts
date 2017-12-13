import {NestedRender} from '../helpers/NestedRender';
import {Render} from '../Render';
import {Flashlight} from '../entities/Flashlight';

@NestedRender
export class FlashlightScene {
    render: Render;
    entity: Flashlight;

    constructor() {
        this.entity = new Flashlight();

        // let lighting:any = new PIXI.display.Layer();
        // lighting.on('display', function (element) {
        //     element.blendMode = PIXI.BLEND_MODES.ADD
        // });
        // lighting.filters              = [new PIXI.filters.VoidFilter()];
        // lighting.filters[0].blendMode = PIXI.BLEND_MODES.MULTIPLY;
        //
        // lighting.filterArea = new PIXI.Rectangle(0, 0, 800, 600);

        // this.render.app.stage.addChild(lighting);
    }

    update(delta: number) {
        this.entity.move(delta);
    }
}
