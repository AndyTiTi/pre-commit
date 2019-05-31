<template>
  <section class="all">
    <div class="top">
      <h3>筛选条件</h3>

      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="网站名称">
          <el-input v-model="formInline.user" placeholder="请输入网站名称" />
        </el-form-item>
        <el-form-item label="所属行业">
          <el-select v-model="formInline.region" placeholder="全部">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="上线状态">
          <el-select v-model="formInline.region" placeholder="全部">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="管理者">
          <el-select v-model="formInline.region" placeholder="王小小">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>

      <el-button style="background-color: #f9B630;color:#fff;">+ 创建网站模板</el-button>
    </div>

    <div class="content">
      <el-table :data="siteList" style="width: 100%">
        <el-table-column prop="number" label="序号" width="156" align="center" />
        <el-table-column prop="name" label="网站名称" width="156" align="center" />
        <el-table-column prop="address" label="所属行业" width="156" align="center" />
        <el-table-column prop="logo" label="网站logo" width="156" align="center">
          <div class="logo_img" />
        </el-table-column>
        <el-table-column label="网站模块" width="250" align="center">
          <template slot-scope="scope">
            <el-button v-for="item in scope.row.module" :key="item.label" type="text">{{ item.label }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="weburl" label="网站网址" width="156" align="center" />
        <el-table-column prop="status" label="上线状态" width="156" align="center" />
        <el-table-column prop="administrator" label="管理者" width="156" align="center" />
        <el-table-column prop="handle" label="操作" align="center" />
        <el-table-column prop="weburl" label="网站网址" width="156" align="center" />
        <el-table-column prop="status" label="上线状态" width="156" align="center" />
        <el-table-column prop="administrator" label="管理者" width="156" align="center" />
        <el-table-column prop="handle" label="操作" align="center" />
      </el-table>
    </div>

    <el-pagination background layout="prev, pager, next" :page-size="10" :total="200" />

  </section>
</template>

<script>

export default {
  data() {
    return {
      // 筛选条件
      formInline: {
        user: '',
        region: ''
      },
      // 网站列表
      siteList: [
        {
          number: '1',
          name: '中华牛奶网',
          address: '乳制品',
          logo: 'vvv',
          module: [
            { label: '品牌大全' },
            { label: '招商加盟' },
            { label: '十大投票' },
            { label: '排行榜' },
            { label: '关于我们' },
            { label: '关于我们' }// 要删除，这条是多余的
          ],
          weburl: 'www.baidu.com',
          status: '已上线',
          administrator: '王小小',
          handle: '查看 编辑'
        }

      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
<style lang="scss" type="scss/css">
  .all{
    width:1647px;
    padding-left:28px;
    padding-top:36px;
    .top {
      width: 1508px;
      height: 231px;
      background: #fff;
      padding: 0 26px;
      box-shadow: 0px 1px 3px rgba(136, 149, 180, 0.1);
      border-radius: 8px;

      h3 {
        font-size: 22px;
      }
    }
    .content{
      width: 1560px;
      margin-top:20px;
      .logo_img{
        margin:0 auto;
        width:78px;
        height: 44px;
        border:1px solid red;
        img{width:100%;height:100%;}
      }
    }
  }

</style>
