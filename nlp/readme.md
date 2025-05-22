# 机器学习

- notebookllm
  你不知道的JavaScript 深入学习
  AI 博客

- modelscope 模型
  阿里开源大模型社区
- python notebook
  ipynb 后缀
  nlp 机器学习 文档格式

- python
  nlp 第一语言
  js 也挺好

- 引入了pipeline 模块
  model中国第一大模型社区
  魔搭
  from modelscope.pipelines import pipeline
  from modelscope.utils.constant import Tasks

  所有任务中的文本分类 Tasks.text_classification
  机器学习 nlp
  情感分析 sentiment-classification
  semantic_cls = pipeline(Tasks.text_classification, 'damo/nlp_structbert_sentiment-classification_chinese-base')

  运行过程：
  1.先下载这个大模型
  result = semantic_cls(input='我喜欢吃苹果')
  2.再对这个结果进行打分 - print(result)