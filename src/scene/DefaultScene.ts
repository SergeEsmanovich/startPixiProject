import {Render} from '../Render';
import {NestedRender} from '../helpers/NestedRender';

@NestedRender
export class DefaultScene {
    render: Render;

    public update(delta:number) {
    }
}
