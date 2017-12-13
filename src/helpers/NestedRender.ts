import {Render} from '../Render';
import {Container} from 'typedi';

export function NestedRender(target: any) {

    // save a reference to the original constructor
    const original = target;

    // a utility function to generate instances of a class
    function construct(constructor:any, args:any[]) {
        const decorateClass: any = function () {
            return constructor.apply(this, args);
        };

        constructor.prototype.render = Container.get(Render);
        decorateClass.prototype      = constructor.prototype;

        return new decorateClass();
    }

    // the new constructor behaviour
    const f: any = function (...args:any[]) {
        console.log('New: ' + original.name);
        return construct(original, args);
    };

    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;

    // return new constructor (will override original)
    return f;
}
