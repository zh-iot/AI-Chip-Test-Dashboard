人工智能芯片测试 设备&后端 API 文档

- [dev-api](#dev-api)
  - [设备登录](#设备登录)
  - [设备同步](#设备同步)

dev-api
=============

设备登录
----------

**post /dev/login**

**Form Data**

```
devid: 5edb36ceb
devpwd: 5edb36ceb
```

**Json Response**
```json
{
  "msg": "Success",
  "code": 0,
  "data": null
}
```

设备同步
----------

**put /dev/sync**

**Form Data**

```
devid: 5edb36ceb
devname: "设备1"
devtype: 1  // 1 英伟达V100， 2 Jeston Nano， 3 瑞星微RK3399Pro， 4 比特大陆S5
devstatus: 1 // 1 待机， 2 任务运行中， 3 错误
devmsg: "缺少数据集"

taskid: 212ddwd
taskstatus: 0,    // 0 未运行任务， 2 Runing, 3 Error, 4 Completed
progress: 88
taskname: "任务1"
tasktype: 1      // 1 目标检测，2 图像分类，3 自然语言处理
network: 1   // 1 YOLOv3，2 ResNet-50，3 BERT
dataset: 1   // 1 ImageNet, 2 VOC2012, 3 WMT
datasetPcs: 5233,
batchSize: 128,
rate: 2,  // 张/秒
tflops: 0.22,
averagePower: 22,
modelperformance: "Exact_Match 33.4%",
updatetime: 1609892349152

```

**Json Response**
```json
{
  "msg": "Success",
  "code": 1,
  "data":  {
    "taskid": "5ed9e242d2a09671aa2f9bb6",
    "taskname": "任务1",
    "tasktype": 0,
    "network": 0,
    "dataset": 0
  }
}
```
|code|说明|
|---|----|
|0|成功|
|1|创建任务|
|2|终止任务|

|tasktype|说明|
|---|----|
|1|目标检测|
|2|图像分类|
|3|自然语言处理|

|network|说明|
|---|----|
|1|YOLOv3|
|2|ResNet-50|
|3|BERT|

|dataset|说明|
|---|----|
|1|ImageNet|
|2|VOC2012|
|3|WMT|



