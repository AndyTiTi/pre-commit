
<template>
  <div class="about">
    <div class="content">
      <div class="shai">
        <h1>筛选条件</h1>
        <dl>
          <dt>
            模块名称：
          </dt>
          <dd>
            <el-input v-model="input" placeholder="请输入模块名称" />
          </dd>
          <dd>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </dd>
          <dd />
        </dl>
      </div>
      <div class="weihu">
        <p>维护模块</p>
      </div>
      <el-table
        :data="tableData"
        style="width:1560px;height:600px;background:rgba(255,255,255,1);opacity:1;border-radius:8px;"
      >
        <el-table-column align="center" label="序号" width="100">
          <template slot-scope="scope">{{ scope.$index+1 }}</template>
        </el-table-column>
        <el-table-column prop="date" align="center" label="模块名称" width="180" />
        <el-table-column prop="name" align="center" label="模块描述" width="730" />
        <el-table-column label="操作" width="300" align="center">
          <template slot-scope="scope">
            <div class="table-op-btn">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">  编辑</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="fen">
        <el-pagination background layout="prev, pager, next" :total="200" />
      </div>
    </div>
  </div></template>
<script>
export default {
  data() {
    return {
      input: '',
      tableData: [
        {
          date: '品牌大全',
          name: '一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展的'
        },
        {
          date: '新闻资讯',
          name: '一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展的'
        },
        {
          date: '品牌大全',
          name: '一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展示，此模块的目的是为了凸显网站实力的 一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展示，此模块的目的是为了凸显网站实力的'
        },
        {
          date: '新闻资讯',
          name: '一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展的'
        },
        {
          date: '品牌大全',
          name: '一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展的'
        },
        {
          date: '新闻资讯',
          name: '一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展示，此模块的目的是为了凸显网站实力的 一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展示，此模块的目的是为了凸显网站实力的'
        },
        {
          date: '品牌大全',
          name: '一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展的'
        },
        {
          date: '新闻资讯',
          name: '一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展的'
        },
        {
          date: '品牌大全',
          name: '一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展的'
        },
        {
          date: '新闻资讯',
          name: '一定的规则排列展示，此模块的目的是为了凸显网站实力一定的规则排列展的'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.about {
  min-width: 1200px;
  .content {
    margin-left: 40px;
    .shai {
      width: 1560px;
      height: 174px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(225, 230, 239, 1);
      box-shadow: 0px 1px 3px rgba(136, 149, 180, 0.1);
      opacity: 1;
      border-radius: 8px;
      margin-bottom: 20px;
      h1 {
        width: 88px;
        height: 30px;
        font-size: 22px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        line-height: 30px;
        color: rgba(51, 51, 51, 1);
        opacity: 1;
        margin-left: 30px;
      }
      dl {
        margin-top: 38px;
        dt {
            float: left;
            margin-left: 30px;
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(51,51,51,1);
            opacity:1;
        }
        dd {
            float: left;
            margin-left: 0;
            margin-top: -10px;
            input {
                width: 236px;
                height: 34px;
                background: rgba(255, 255, 255, 1);
                border: 1px solid rgba(225, 230, 239, 1);
                opacity: 1;
                border-radius: 4px 0px 0px 4px;
          }
          .el-button {
            width: 80px;
            height: 34px;
            background: rgba(40, 96, 255, 1);
            opacity: 1;
            border-radius: 0px 4px 4px 0px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            span {
              text-align: center;
            }
          }
        }
      }
    }
    .weihu{
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:21px;
        color:rgba(166,169,192,1);
        opacity:1;
        margin-left: 35px;
    }
    .el-button{
        margin-right: 0 !important;
    }
    .fen {
        clear: both;
        width: 800px;
        margin: 40px auto;
      li{
        display: block;
        float: left;
        width:22px;
        height:22px;
        border:1px solid rgba(153,153,153,1);
        opacity:1;
        border-radius:4px;
        background: #fff;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:22px;
        color:rgba(153,153,153,1);
        margin-right: 10px;
        padding: 0px;
      }
      li:first-child{
        margin-left: -2px;
      }
      .active{
        color: #fff !important;
      }
      .el-icon{
        width:20px;
        height:20px;
        border:1px solid rgba(153,153,153,1);
        opacity:1;
        border-radius:4px;
        color: #999999;
        line-height: 22px;
      }
      .el-icon-arrow-right{
        margin-bottom: 6px;
      }
      .el-icon-arrow-left{
        margin-bottom: 6px;
      }
      .more{
        margin-top: 0px;
      }
    }
  }
}
</style>

