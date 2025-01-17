# console.log()输出彩色字体

## 写法

>  `\x1b[背景色编号;字色编号m`
>
> 字色编号：30黑，31红，32绿，33黄，34蓝，35紫，36深绿，37白色
>
> 背景编号：40黑，41红，42绿，43黄，44蓝，45紫，46深绿，47白色

## 示例
```js
console.log('\x1b[42;31m SUCCESS \x1b[0m')
```

## 其他

或者直接使用[chalk](https://www.npmjs.com/package/chalk)，[colors](https://www.npmjs.com/package/colors)