import {NestedRender} from '../helpers/NestedRender';
import {Render} from '../Render';
import {Flashlight} from '../entities/Flashlight';
import {Block} from '../entities/Block';

@NestedRender
export class FlashlightScene {
    render: Render;
    fl: Flashlight;
    block: Block;

    constructor() {
        this.fl    = new Flashlight();
        this.block = new Block();
        this.fl.setBlock(this.block);

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
        this.fl.move(delta);
    }
}
