人工智能芯片测试 API 文档

- [Admin API](#admin-api)
  - [login](#login)
- [Task API](#task-api)
  - [创建任务](#创建任务)
  - [终止任务](#终止任务)
  - [任务队列](#任务队列)


admin-api
=============

login
----------

**post /api/login**

**Form Data**

```
username:admin
password:122112
```

**Json Response**
```json
{
  "msg": "Success",
  "code": 0,
  "data": null
}
```

Task API
=============

创建任务
------------

**post /api/create-task**

**Form Data**

```
taskname: 测试1
tasktype: 0      // 0 目标检测，1 图像分类，2 自然语言处理
devid: 5edb36ceb
devtype: 0  // 0 英伟达V100， 1 Jeston Nano， 2 瑞星微RK3399Pro， 3 比特大陆S5
network: 0   // 0 YOLOv3，1 ResNet-50，2 BERT
dataset: 0   // 0 ImageNet, 1 VOC2012, 2 WMT
```

**Json Response**
```json
{
  "msg": "Success",
  "code": 0,
  "data": null
}
```

终止任务
------------

**Form Data**

```
taskId:5edb36ceb2523eb1c6d65e7d
```

**Json Response**
```json
{
  "msg": "Success",
  "code": 0,
  "data": null
}
```

任务队列
----------

**get /api/list-task?page=1&perPageNum=10**

**Json Response**
```json
{
  "msg": "Success",
  "code": 0,
  "data": {
    "total": 1,
    "tasklist": [
      {
        "id": "5edf547c60bf54d55bc501a8",
        "status": 0,    // 0 Runing, 1 Error, 2 Completed
        "batchSize": 128,
        "dataset":  0,   // 0 ImageNet, 1 VOC2012, 2 WMT
        "datasetPcs": 5233,
        "rate": 2,  // 张/秒
        "tflops": 0.22,
        "averagePower": 22,
        "modelPerformance": "Exact_Match 33.4%",
        "createdTime": "2020-06-09T09:21:00.943Z",
        "updatedTime": "2020-06-09T09:21:00.943Z"
      }
    ]
  }
}
```
