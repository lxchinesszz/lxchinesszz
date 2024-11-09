---
title: 机器学习
editLink: true
navbar: true
category: 'Gradio'
---

# Gradio

[Hugging Face](https://huggingface.co/)

Gradio 是一个Hugging Face发布的开源Python库，可以为机器学习模型、API或任意Python函数快速构建web可视化界面，并且通过Gradio的内置共享功能快速生成对应的链接，而无需任何JavaScript、CSS或网络托管经验。Gradio的设计理念是“无代码”，它的自封装组件的功能也相对比较完整


### 安装依赖

建议使用 `anaconda` 安装，保证环境是隔离的。避免污染本机环境的依赖。

```
   pip install pyqtwebengine
   pip install pyqt5
   pip install gradio
```

### 简单运行



```python
import gradio as gr
print(gr.__version__)
def analyze_sentiment(text):
    return '12312321321'
# 定义Gradio应用的界面
interface = gr.Interface(fn=analyze_sentiment,
                         inputs="text",
                         outputs="label",
                         title="文本情感分析",
                         description="输入一段文本，判断其情感倾向是正面、中性还是负面。")

# 启动应用
interface.launch()    
```

## Input 基本组件

### text 文本

![](https://img.springlearn.cn/blog/6baa4f2d30ee1e1735bd770f3e7a81c3.png)

### slider 滑块

![](https://img.springlearn.cn/blog/1716bd176e4eece488617a7065ccae8f.png)

### dropdown 下拉菜单

![](https://img.springlearn.cn/blog/422dc0b0d338951d1618df9c92dd2981.png)

```python
# 定义Gradio应用的界面
dropdown = gr.Dropdown(["Option 1", "Option 2", "Option 3"])
interface = gr.Interface(fn=analyze_sentiment,
                         inputs=dropdown,
                         outputs="label",
                         title="文本情感分析",
                         description="输入一段文本，判断其情感倾向是正面、中性还是负面。")

# 启动应用
interface.launch()
```

### file 文件上传

![](https://img.springlearn.cn/blog/cf72ede882ecb871480975a3c9bd2362.png)

## Output 基本组件

### label

![](https://img.springlearn.cn/blog/cf72ede882ecb871480975a3c9bd2362.png)

### image

![](https://img.springlearn.cn/blog/1266ed2eca7018835fb17ee4e531fa11.png)

### audio

![](https://img.springlearn.cn/blog/7748610bdcd3506ffc2971e041fc6dd9.png)



## 布局

![](https://img.springlearn.cn/blog/95ce2574f8337891930d343f2c47eb92.png)

```python
def style_transfer(image, style):
    # 这里假设有一个风格转换的处理函数
    return image  # 返回处理后的图像

styles = ["风格1", "风格2", "风格3"]

with gr.Blocks() as app:
    gr.Markdown("## 图像风格转换")
    ## 设置单独的行，有 2 个元素，一个图片，一个风格
    with gr.Row():
        image = gr.Image()
        style = gr.Dropdown(choices=styles, label="选择风格")
    ## 单独的一列    
    output = gr.Image()
    ## 点击后的输入参数是图片和风格
    gr.Button("转换").click(style_transfer, inputs=[image, style], outputs=output)

app.launch()
```
