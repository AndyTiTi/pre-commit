
<template>
  <div class="about">
    <el-row>
      <!-- <router-link to="/change-password"> -->
      <el-button @click="$router.push('/change-password')">修改密码</el-button>
      <!-- </router-link> -->
    </el-row>
    <div class="content">
      <div class="shai">
        <h1>筛选条件</h1>
        <dl>
          <dt>
            <el-input v-model="input" placeholder="请输入模块名称开始搜索" />
          </dt>
          <dd>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </dd>
          <dd />
        </dl>
        <div class="tianjia">
          <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加用户</el-button>
          <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="姓名:" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" placeholder="请输入姓名" />
              </el-form-item>
              <el-form-item label="密码:" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" placeholder="请输入密码" />
              </el-form-item>
              <el-form-item label="用户角色:" :label-width="formLabelWidth">
                <el-select v-model="form.region">
                  <el-option label="管理员" value="管理员" selected="selected" />
                  <el-option label="子管理员" value="子管理员" />
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
      <div class="shanchc">
        <el-button type="primary" icon="el-icon-delete">批量删除</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width:1560px;height:600px;background:rgba(255,255,255,1);opacity:1;border-radius:8px;"
      >
        <el-table-column type="selection" width="65" />
        <el-table-column align="center" label="序号" width="180">
          <template slot-scope="scope">{{ scope.$index+1 }}</template>
        </el-table-column>
        <el-table-column prop="date" align="center" label="姓名" width="180" />
        <el-table-column prop="name" align="left" label="管理者" width="180" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="table-op-btn">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="fen">
        <el-pagination background layout="prev, pager, next" :total="200" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      tableData: [
        {
          date: '王小小',
          name: '管理员'
        },
        {
          date: '王小小',
          name: '子管理员'
        },
        {
          date: '王小小',
          name: '管理员'
        },
        {
          date: '王小小',
          name: '子管理员'
        },
        {
          date: '王小小',
          name: '管理员'
        },
        {
          date: '王小小',
          name: '子管理员'
        },
        {
          date: '王小小',
          name: '管理员'
        },
        {
          date: '王小小',
          name: '子管理员'
        },
        {
          date: '王小小',
          name: '管理员'
        },
        {
          date: '王小小',
          name: '子管理员'
        }
      ],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style lang="scss">
.about {
  min-width: 1200px;
  .el-row{
    position: absolute;
    top: 80px;
    right: 350px;
    .el-button--default{
      width:128px;
      height:40px;
      background:rgba(255,255,255,1);
      border:1px solid rgba(242,244,249,1);
      box-shadow:0px 1px 2px rgba(0,0,0,0.16);
      opacity:1;
      border-radius:4px;
    }
  }
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
          input {
            width: 236px;
            height: 34px;
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(225, 230, 239, 1);
            opacity: 1;
            border-radius: 4px 0px 0px 4px;
          }
        }
        dd {
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
      .tianjia {
        margin-left: 375px;
        margin-top: -49px;
        .el-button--primary {
          width: 111px;
          height: 34px;
          background: #F9B630;
          opacity: 1;
          border-radius: 4px;
          border: 0;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
        }
        .el-input__inner{
          width: 318px;
          height: 40px;
          margin-left: -30px;
          background:rgba(245,246,250,1);
          opacity:1;
          border-radius:8px;
        }
        .el-dialog__header{
          height:50px;
          background:rgba(40,96,255,1);
          opacity:1;
          border-radius: 8px 8px 0 0;
          padding-top: 0;
          padding-bottom: 0;
          .el-dialog__title{
            font-size:18px;
            font-family:Microsoft YaHei;
            font-weight:400;
            line-height:50px;
            color:rgba(255,255,255,1);
          }
          .el-icon-close{
            color: #fff;
            line-height: 20px;
          }
        }
        .el-form-item__label{
          font-size:16px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(102,102,102,1);
          opacity:1;
        }
        .el-dialog__footer{
          height:50px;
          background:rgba(245,246,250,1);
          opacity:0.97;
          margin-top: 48px;
          border-radius: 0 0 8px 8px;
          padding-top: 0;
          padding-bottom: 0;
          .el-button--default{
            background:rgba(245,246,250,1);
            opacity:0.97;
            border: 0;
            line-height: 20px;
          }
          .el-button--primary{
            width:80px;
            height:34px;
            background:rgba(40,96,255,1);
            opacity:1;
            border-radius:4px;
            margin-top: 9px;
          }
        }
      }
    }
    .shanchc{
      position: absolute;
      top: 319px;
      right: 340px;
      z-index: 999;
      .el-button--primary{
        width:104px;
        height:36px;
        background:rgba(243,114,97,1);
        opacity:1;
        border-radius:4px;
        border: 0;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
      }
    }
    .el-checkbox{
      margin-left: 20px;
    }
    .fen {
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

