<template>
  <div class="dashboard-container">
    <el-row :gutter="60">
      <el-col :span="6">
        <div class="grid-content bg-green">
          <p><em>1000</em>个</p>
          <p>已创建网站数量</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-orange">
          <p><em>1000</em>个</p>
          <p>已上线网站数量</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-blue">
          <p><em>1000</em>个</p>
          <p>未上线网站数量</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <p><em>1000</em>个</p>
          <p>我创建网站数量</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    padding: 30px;
    .el-row {
      .el-col {
        height: 146px;
        .grid-content {
          font-size: 18px;
          padding: 30px 0 30px 26px;
          color: #fff;
          width: 100%;
          height: 100%;
          border-radius: 4px;
          min-height: 36px;
          em{
            font-style: normal;
            font-size: 42px;
            margin-right: 8px;
          }
          p:last-child{
            margin-top: 22px;
            margin-left: 6px;
          }
        }
        .bg-purple {
          background: #FF7131;
        }
        .bg-green {
          background: #23BC9E;
        }
        .bg-orange {
          background: #F9B630;
        }
        .bg-blue {
          background: #2860FF;
        }
      }
    }
  }
}
</style>

