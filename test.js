import forward from '.';
import expect from 'expect';


describe('proxy-forwarder', () => {
    let make = () => {
        let target = {};

        let fake = forward(target);
        return [target, fake];
    };

    it('forwards getPrototypeOf', () => {
        let [target, fake] = make();

        expect(Object.getPrototypeOf(fake)).toBe(Object.getPrototypeOf(target));
    });

    it('forwards setPrototypeOf', () => {
        let [target, fake] = make();

        Object.setPrototypeOf(fake, String);
        expect(Object.getPrototypeOf(target)).toBe(String);
    });

    it('forwards isExtensible', () => {
        let [target, fake] = make();

        expect(Object.isExtensible(fake), true);
        Object.preventExtensions(target);
        expect(Object.isExtensible(fake), false);
    });

    it('forwards preventExtensions', () => {
        let [target, fake] = make();

        expect(Object.isExtensible(target), true);
        Object.preventExtensions(fake);
        expect(Object.isExtensible(target), false);
    });

    it('forwards defineProperty', () => {
        let [target, fake] = make();

        Object.defineProperty(fake, 'prop', {});
        expect(target.hasOwnProperty('prop')).toBe(true);
    });

    it('forwards has', () => {
        let [target, fake] = make();

        target.prop = true;
        expect('prop' in fake).toBe(true);
    });

    it('forwards get', () => {
        let [target, fake] = make();

        target.x = 5;
        expect(fake.x).toBe(5);
    });

    it('forwards set', () => {
        let [target, fake] = make();

        fake.x = 5;
        expect(target.x).toBe(5);
    });

    it('forwards deleteProperty', () => {
        let [target, fake] = make();
        
        target.prop = true;
        delete fake.prop;

        expect(target.prop).toBe(undefined);
    });

    it('forwards enumerate', () => {
        let [target, fake] = make();

        target.prop = true;
        for (let prop in fake) {
            expect(fake[prop]).toBe(true);
        }
    });

    it('forwards ownKeys', () => {
        let [target, fake] = make();

        target.prop = true;
        expect(Object.getOwnPropertyNames(fake)).toEqual(['prop']);
    });

    it('forwards apply', () => {
        let target = function (a) {
            return [this, a];
        };
        let fake = forward(target);

        expect(fake.call(1, 2)).toEqual(target.call(1, 2));
    });

    it('forwards construct', () => {
        let target = function (a) {
            return [this, a];
        };
        let fake = forward(target);
        
        expect(new fake(1)).toEqual(new target(1));
    });
});
