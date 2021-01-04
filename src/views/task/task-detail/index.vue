<template>
  <div class="dashboard-editor-container">
    <el-card>
      <span>任务详情</span>
      <el-divider></el-divider>
      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="detailForm"
        fit
        highlight-current-row
        style="width: 100%;"
      >
        <el-table-column label="ID" align="center" width="80">
          <template slot-scope="{row}">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="名称" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="150px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column label="算法" min-width="150px">
          <template slot-scope="{row}">
            <span class="link-type" @click="handleUpdate(row)">{{ row.title }}</span>
            <el-tag>{{ row.type | typeFilter }}</el-tag>
          </template>
        </el-table-column> -->
        <el-table-column label="任务" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.terminal }}</span>
          </template>
        </el-table-column>
        <el-table-column label="板卡" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.terminal }}</span>
          </template>
        </el-table-column>
        <el-table-column label="网络" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.algorithm }}</span>
          </template>
        </el-table-column>
        <el-table-column label="数据集" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.dataset }}</span>
          </template>
        </el-table-column>
        <el-table-column label="框架" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.dataset }}</span>
          </template>
        </el-table-column>
        <el-table-column label="测试环境" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.dataset }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column v-if="showReviewer" label="Reviewer" width="110px" align="center">
          <template slot-scope="{row}">
            <span style="color:red;">{{ row.reviewer }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Imp" width="80px">
          <template slot-scope="{row}">
            <svg-icon v-for="n in + row.importance" :key="n" icon-class="star" class="meta-item__icon" />
          </template>
        </el-table-column>
        <el-table-column label="Readings" align="center" width="95">
          <template slot-scope="{row}">
            <span v-if="row.pageviews" class="link-type" @click="handleFetchPv(row.pageviews)">{{ row.pageviews }}</span>
            <span v-else>0</span>
          </template>
        </el-table-column> -->
        <!-- <el-table-column label="状态" class-name="status-col" width="150">
          <template slot-scope="{row}">
            <el-tag :type="row.status | statusFilter">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Actions" align="center" width="300" class-name="small-padding fixed-width">
          <template slot-scope="{row,$index}">
            <el-button type="primary" size="mini" @click="handleUpdate(row)">
              Edit
            </el-button>
            <el-button v-if="row.status!='published'" size="mini" type="success" @click="handleModifyStatus(row,'published')">
              Publish
            </el-button>
            <el-button v-if="row.status!='draft'" size="mini" @click="handleModifyStatus(row,'draft')">
              Draft
            </el-button>
            <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
              Delete
            </el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </el-card>

    <!-- <github-corner class="github-corner" /> -->

    <!-- <panel-group @handleSetLineChartData="handleSetLineChartData" /> -->
    <el-card style="margin-top:40px">
      <span>资源占用</span>
      <el-divider></el-divider>
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chart-data="lineChartData" />
      </el-row>
    </el-card>
    <el-card style="margin-top:40px">
      <span>结果</span>
      <el-divider></el-divider>
      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="detailForm"
        fit
        highlight-current-row
        style="width: 100%;"
      >
        <el-table-column label="Batch size" align="center" width="100">
          <template slot-scope="{row}">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="验证集" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="总时间（秒）" width="150px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="速率（张/秒）" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.terminal }}</span>
          </template>
        </el-table-column>
        <el-table-column label="算力（TFLOPS）" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.terminal }}</span>
          </template>
        </el-table-column>
        <el-table-column label="平均功耗(W)" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.algorithm }}</span>
          </template>
        </el-table-column>
        <el-table-column label="模型性能" minwidth="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.dataset }}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="chart-container">
        <chart height="100%" width="100%" />
      </div>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <raddar-chart />
          </div>
        </el-col>
        <!-- <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <pie-chart />
          </div>
        </el-col> -->
        <el-col :xs="24" :sm="24" :lg="18">
          <div class="chart-wrapper">
            <bar-chart />
          </div>
        </el-col>
      </el-row>

    </el-card>

    <!-- <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card />
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
// import GithubCorner from '@/components/GithubCorner'
// import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
// import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
// import TransactionTable from './components/TransactionTable'
// import TodoList from './components/TodoList'
// import BoxCard from './components/BoxCard'
import { fetchTask } from '@/api/article'
import Chart from './components/LineMarker'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
    memoryData: [10, 32, 31, 134, 162, 134, 105]
  }
  // messages: {
  //   expectedData: [200, 192, 120, 144, 160, 130, 140],
  //   actualData: [180, 160, 151, 106, 145, 150, 130]
  // },
  // purchases: {
  //   expectedData: [80, 100, 121, 104, 105, 90, 100],
  //   actualData: [120, 90, 100, 138, 142, 130, 130]
  // },
  // shoppings: {
  //   expectedData: [130, 140, 141, 142, 145, 150, 160],
  //   actualData: [120, 82, 91, 154, 162, 140, 130]
  // }
}

export default {
  name: 'DashboardAdmin',
  components: {
    // GithubCorner,
    // PanelGroup,
    LineChart,
    RaddarChart,
    // PieChart,
    BarChart,
    // TransactionTable,
    // TodoList,
    // BoxCard,
    Chart
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      tableKey: 0,
      detailForm: [],
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      importanceOptions: [1, 2, 3],
      // calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    console.log('id: ', id)
    this.fetchData(id)
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    fetchData(id) {
      console.log('task:')
      this.listLoading = true
      fetchTask(id).then(response => {
        console.log('task:', response.data)
        this.detailForm.push(response.data)
        console.log('detailForm:', this.detailForm)
        this.listLoading = false
        // this.postForm = response.data

        // // just for test
        // this.postForm.title += `   Article Id:${this.postForm.id}`
        // this.postForm.content_short += `   Article Id:${this.postForm.id}`

        // // set tagsview title
        // this.setTagsViewTitle()

        // // set page title
        // this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.chart-container{
  position: relative;
  width: 100%;
  height: 500px;
  // height: calc(100vh - 84px);
}

.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
