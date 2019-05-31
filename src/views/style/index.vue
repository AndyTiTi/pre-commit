/* 可修改页面 */
<template>
  <div class="about">
    <div class="content">
      <div class="shai">
        <h1>筛选条件</h1>
        <dl>
          <dt>
            <el-input
              v-model="input"
              placeholder="请输入模块名称或者编号"
            />
          </dt>
          <dd>
            <el-button
              type="primary"
              icon="el-icon-search"
            >搜索</el-button>
          </dd>
          <dd />
        </dl>
        <div class="shangchuan">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button
              size="small"
              type="primary"
            ><img src="">上传模板</el-button>
          </el-upload>
        </div>
      </div>
      <el-table
        :data="tableData"
        style="width:1560px;height:550px;background:rgba(255,255,255,1);opacity:1;border-radius:8px;"
      >
        <el-table-column
          align="center"
          label="序号"
          width="180"
        >
          <template slot-scope="scope">{{ scope.$index+1 }}</template>
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="模板编号"
          width="180"
        />
        <el-table-column
          prop="name"
          align="center"
          label="模板名称"
          width="250"
        />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="table-op-btn">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >预览</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="fen">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="200"
        />
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
          date: '9965',
          name: '模板1'
        },
        {
          date: '9965',
          name: '模板2'
        },
        {
          date: '9965',
          name: '模板1'
        },
        {
          date: '9965',
          name: '模板2'
        },
        {
          date: '9965',
          name: '模板1'
        },
        {
          date: '9965',
          name: '模板2'
        },
        {
          date: '9965',
          name: '模板1'
        },
        {
          date: '9965',
          name: '模板2'
        },
        {
          date: '9965',
          name: '模板1'
        },
        {
          date: '9965',
          name: '模板2'
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
    margin-left: 260px;
    .shai {
      width: 1560px;
      height: 174px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(225, 230, 239, 1);
      box-shadow: 0px 1px 3px rgba(136, 149, 180, 0.1);
      opacity: 1;
      border-radius: 8px;
      margin-top: 116px;
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
        margin-top: 34px;
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
      .shangchuan {
        margin-left: 375px;
        margin-top: -49px;
        .el-button--small {
          width: 111px;
          height: 34px;
          background: rgba(249, 182, 48, 1);
          opacity: 1;
          border-radius: 4px;
          border: 0;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          span {
            display: block;
            font-size: 14px;
            line-height: 17px;
            img {
              width: 19px;
              height: 17px;
              opacity: 1;
            }
          }
        }
      }
    }
    table {
      tr {
        height: 50px;
      }
      tr:last-child td {
        border-bottom: none;
      }
      .table-op-btn {
        .el-button {
          background: #fff;
          color: #f37261;
          font-size: 16px;
          border: 0px;
          text-align: left;
          padding: 0;
          margin: 0;
          margin-right: 30px;
          text-align: center;
        }

        .el-button:first-child span {
          padding: 0;
          margin: 0;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          line-height: 21px;
          color: rgba(40, 96, 255, 1);
        }
      }
    }
    .fen {
      width: 800px;
      margin: 40px auto;
      li {
        display: block;
        float: left;
        width: 22px;
        height: 22px;
        border: 1px solid rgba(153, 153, 153, 1);
        opacity: 1;
        border-radius: 4px;
        background: #fff;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 22px;
        color: rgba(153, 153, 153, 1);
        margin-right: 10px;
        padding: 0px;
      }
      li:first-child {
        margin-left: -2px;
      }
      .active {
        color: #fff !important;
      }
      .el-icon {
        width: 20px;
        height: 20px;
        border: 1px solid rgba(153, 153, 153, 1);
        opacity: 1;
        border-radius: 4px;
        color: #999999;
        line-height: 22px;
      }
      .el-icon-arrow-right {
        margin-bottom: 6px;
      }
      .el-icon-arrow-left {
        margin-bottom: 6px;
      }
      .more {
        margin-top: 0px;
      }
    }
  }
}
</style>

