# Ollama使用GPU运行模型

1. 显示出当前GPU的所有基础信息
```shell
nvidia-smi
```
![nvidia-smi](./img/ollama-1.png)

2. 安装[Visual Studio 2022](https://visualstudio.microsoft.com/zh-hans/downloads/)

> 选择使用C++ 的桌面开发

![Visual Studio 2022](./img/ollama-2.png)

3. 安装[CUDA Toolkit](https://developer.nvidia.com/cuda-downloads)

> 先下载

![CUDA Toolkit](./img/ollama-3.png)

> 选择自定义安装，`CUDA`子树勾选`Development`, `Runtime`, `Documentation`【`nvtx`，`nsight`开头的都可以不装】

![CUDA Toolkit](./img/ollama-4.png)

```shell
# 查看cuda版本
nvcc -V
```
![nvcc](./img/ollama-5.png)

4. 环境变量，会自动配置好的，配置完记得重启

![环境变量](./img/ollama-6.png)

5. 验证，进入安装路径`C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.6\extras\demo_suite`

> 输入`bandwidthTest.exe`提示`Result = PASS`

![bandwidthTest](./img/ollama-7.png)

> 输入`deviceQuery.exe`提示`Result = PASS`

![deviceQuery](./img/ollama-8.png)

> 运行模型，并询问问题，然后输入`ollama ps`查看GPU使用率

![deviceQuery](./img/ollama-9.png)
