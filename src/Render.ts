/// <reference path="../node_modules/@types/pixi.js/index.d.ts" />
import {Service} from 'typedi';
import {DefaultScene} from './scene/DefaultScene';
import {FlashlightScene} from './scene/FlashlightScene';
// import * from ''

@Service()
export class Render {
    public app: PIXI.Application;
    public width: number;
    public height: number;
    public resources: any;

    public entities: any = [];
    private systems: any = [];

    public scene: DefaultScene;

    constructor() {
        console.log('Render');
        PIXI.loader
            .add('sample', 'Assets/sample.png')
            .load(this.onLoaded.bind(this));
    }

    addEntity(obj: any) {
        this.entities.push(obj);
    }

    addSystem(obj: any) {
        this.systems.push(obj);
    }

    private resize() {
        this.width      = document.getElementById('wrapper').offsetWidth;
        this.height     = document.getElementById('wrapper').offsetHeight;
        let that        = this;
        window.onresize = function (event) {
            that.width  = document.getElementById('wrapper').offsetWidth;
            that.height = document.getElementById('wrapper').offsetHeight;
            that.app.renderer.resize(that.width, that.height);
        };
    }

    public update(delta: number) {
        if (this.scene) {
            this.scene.update(delta);
        }
    }

    public onLoaded(loader: any, res: any) {
        this.resize();
        this.app = new PIXI.Application(this.width, this.height, {
            backgroundColor: 0x1a6f1d,
            antialias      : true,
            autoResize     : true,
        }, false);
        document.getElementById('wrapper').appendChild(this.app.view);

        // this.app.stage = new PIXI.display.Stage();

        // var layer = new PIXI.display.Layer();
        // console.log(PIXI.display);

        this.app.stop();
        this.resources = res;

        this.loadScene(new FlashlightScene());

        this.app.start();
        this.app.ticker.add((delta: number) => {
            this.update(delta);
        });
    }

    loadScene(scene: any) {
        this.scene = scene;
    }
}
