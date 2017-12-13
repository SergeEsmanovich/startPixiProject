import {FlashlightView} from '../views/FlashlightView';

export class Flashlight {
    public view: FlashlightView = new FlashlightView();

    targetPoint   = new PIXI.Point(0, 0);
    speed: number = 2;

    stop          = false;
    delta: number = null;

    scale = 0.5;

    block: any;

    constructor() {
        this.view.setPosition(100, 100);
        this.view.setScale(this.scale, this.scale);
        // this.view.rotateTo(this.targetPoint);
        setTimeout(() => {
            this.test();
        }, 1000)
    }

    setBlock(block) {
        this.block = block;
    }

    test() {
        let light = this.view.container.getChildAt(1);

        light.moveTo(0, 0);

        let block = this.block.view.container.getChildAt(0);

        // let pos    = this.block.view.container.position;
        // let width  = this.block.view.container.width;
        // let height = this.block.view.container.height;

        let data = block.getBounds();

        light.lineTo(data.x, data.y);

        console.log(data);
        // light.clear();
        console.log(block);
        console.log(light);
    }

    getRandomPoint() {
        return new PIXI.Point(this.getRandomInt(0, 500), this.getRandomInt(0, 500));
    }

    getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    calcNextTickPosition() {
        const pos = this.view.getPosition();

        const x = this.targetPoint.x - pos.x;
        const y = this.targetPoint.y - pos.y;

        const length = Math.sqrt(x * x + y * y);
        if (length < 5) {
            this.stop = true;
        }

        const speed = this.speed * this.delta;

        return new PIXI.Point(speed * x / length, speed * y / length);
    }

    addPos() {
        const pos     = this.view.getPosition();
        const nextPos = this.calcNextTickPosition();
        this.view.setPosition(pos.x + nextPos.x, pos.y + nextPos.y);
    }

    move(delta: number) {
        // this.delta = delta;
        // if (!this.stop) {
        //     this.addPos();
        // } else {
        //     this.targetPoint = this.getRandomPoint();
        //     this.view.rotateTo(this.targetPoint);
        //     this.stop = false;
        // }
    }
}
