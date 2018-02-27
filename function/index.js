/**
 * 手写简单的bind函数
 * @return {function} 返回一个绑定了this对象的函数
 */
Function.prototype.bind = function() {
    // 当前调用方
    var fn = this;

    // 通过Array.slice方法将arguments包装成一个真正数组
    var args = Array.prototype.slice.call(arguments);
    var ctx = args.shift();

    return function () {
        // 实际执行时，将两次传入的参数组合在一起，此处可做函数柯里化
        return fn.apply(ctx, args.concat( Array.prototype.slice.call(arguments)));
    }
}

/**
 * curry
 * 作用延迟计算、参数复用、动态生成函数
 * @return {function} 返回一个预填充参数的函数
 */

Function.prototype.curry = function () {
    var fn = this;
    var args = Array.prototype.splice.call(arguments);

    return function () {
        return fn.apply(this, args.concat( Array.prototype.slice.call(arguments)));
    }
}
