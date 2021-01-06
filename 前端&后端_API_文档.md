人工智能芯片测试 前端&后端 API 文档

- [admin-api](#admin-api)
  - [管理员登录](#管理员登录)
- [dev-api](#dev-api)
  - [设备注册](#设备注册)
- [task-api](#task-api)
  - [创建任务](#创建任务)
  - [终止任务](#终止任务)
  - [任务队列](#任务队列)


admin-api
=============

管理员登录
----------

**post /admin/login**

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

dev-api
=============

设备注册
----------

**post /dev/register**

**Form Data**

```
devname: "设备1"
devtype: 1
```

**Json Response**
```json
{
  "msg": "Success",
  "code": 0,
  "data": {
    "devid": "2esdw2",
    "devpwd": "dwdwswa",
    "devname": "设备1",
    "devtype": 1
  }
}
```
|devtype|说明|
|---|----|
|1|英伟达V100|
|2|Jeston Nano|
|3|瑞星微RK3399Pro|
|4|比特大陆S5|


Task API
=============

创建任务
------------

**post /task/create-task**

**Form Data**

```
taskname: 任务1
tasktype: 1      // 1 目标检测，2 图像分类，3 自然语言处理
network: 1   // 1 YOLOv3，2 ResNet-50，3 BERT
dataset: 1   // 1 ImageNet, 2 VOC2012, 3 WMT
devid: 5edb36ceb
devtype: 1  // 1 英伟达V100， 2 Jeston Nano， 3 瑞星微RK3399Pro， 4 比特大陆S5
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

**put /task/stop-task**

**Form Data**

```
taskid:5edb36ceb2523eb1c6d65e7d
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

**get /task/list-task?page=1&perPageNum=10**

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
        "status": 1,    
        "batchSize": 128,
        "dataset":  1,  
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
