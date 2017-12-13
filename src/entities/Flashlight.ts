import {FlashlightView} from '../views/FlashlightView';

export class Flashlight {
    public view: FlashlightView = new FlashlightView();

    targetPoint   = new PIXI.Point(0, 0);
    speed: number = 2;

    stop          = false;
    delta: number = null;

    constructor() {
        this.view.setPosition(100, 100);
        this.view.serScale(0.5, 0.5);
        // this.view.rotateTo(this.targetPoint);
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
