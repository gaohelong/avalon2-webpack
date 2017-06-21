# 更新日志
## v2.0.0
* 2017年4月8日: <br />
通过 `extract-text-webpack-plugin` 打包的图片资源引用路径错误混乱，针对次问题，将所有图片路径设置为绝对路径。请务必将 `build` 设置为本目录。<br />
* 2017年3月17日: <br />
修复资源引用路径 `\\` 错误<br />
修复require.ensure资源引用错误<br />

* 2017年3月11日： <br />
减少项目依赖<br />
加快构建速度<br />
默认关闭单元测试<br />
优化项目文件

## v1.1.1
* 2017年3月9日： <br />
修复样式图片引入错误 <br />
修改打包资源为相对路劲 <br />
添加多线程处理 <br />
关闭样式实时刷新功能 <br />
修复webpack异步引入异常

## v1.1.0
* 2017年2月16日：测试功能完善，全系文档补充

## v1.0.0
* 2017年2月4日：正式版发布